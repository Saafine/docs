// Method 1:
// ---------

@Effect() actionX$ = this.updates$
    .ofType('ACTION_X')
    .map(toPayload)
    .switchMap(payload => this.api.callApiX(payload)
        .map(data => ({type: 'ACTION_X_SUCCESS', payload: data}))
        .catch(err => Observable.of({type: 'ACTION_X_FAIL', payload: err}))
    );
@Effect() actionY$ = this.updates$
    .ofType('ACTION_Y')
    .map(toPayload)
    .withLatestFrom(this.store.select(state => state.someBoolean))
    .switchMap(([payload, someBoolean]) => {
        const callHttpY = v => {
            return this.api.callApiY(v)
                .map(data => ({
                    type: 'ACTION_Y_SUCCESS', 
                    payload: data
                }))
                .catch(err => Observable.of({
                    type: 'ACTION_Y_FAIL', 
                    payload: err
                 }));
        }
        
        if(someBoolean) {
            return callHttpY(payload);
        }
        return Observable.of({type: 'ACTION_X', payload})
            .merge(
                this.updates$
                    .ofType('ACTION_X_SUCCESS', 'ACTION_X_FAIL')
                    .first()
                    .switchMap(action => {
                       if(action.type === 'ACTION_X_FAIL') {
                          return Observable.of({
                            type: 'ACTION_Y_FAIL', 
                            payload: 'Because ACTION_X failed.'
                          });
                        }
                        return callHttpY(payload);
                    })
            );
    });

// Method 2:
// ---------

// Component:
ngOnInit() {
  this.users$ = this.userService.users$;
}

// Service:
public requireUsers$ = this.userSelectors.needUsers$
  .filter(needUsers => needUsers)
  .do(() => this.store.dispatch({type: 'GET_USERS'}))
  .switchMap(() => this.getUsers())
  .do(users => this.store.dispatch({type: 'RECEIVE_USERS', users}))
  .share();

public users$ = this.muteFirst(
  this.requireUsers$.startWith(null), 
  this.userSelectors.users$
)

public requireUsersExtraData$ = this.users$
  .withLatestFrom(this.userSelectors.needUsersExtraData$)
  .filter(([users, needData]) => Boolean(users.length) && needData)
  .do(() => this.store.dispatch({type: 'GET_USERS_EXTRA_DATA'}))
  .switchMap(() => this.getUsers())
  .do(users => this.store.dispatch({
    type: 'RECEIVE_USERS_EXTRA_DATA', 
    users
  }))
  .share();

public usersExtraData$ = this.muteFirst(
  this.requireUsersExtraData$.startWith(null),
  this.userSelectors.usersExtraData$
)