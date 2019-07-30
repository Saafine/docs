// Exhaust map throws away actions if an action is already in progress,
// 
// Will not allow additional input observables until inner observable completes
// (switchmap would keep going)
//
// for example: Adding user could create 2 same users if this action would be dispatched twice
this.action$
	.ofType<AddUser>(UserActionTypes.AddUser)
	.pipe(
		map(action => action.payload),
		exhaustMap(payload => this.userService.addUser(payload.user)),
		map(user => new AddUserSucess({user})),
		catchError(error => of(new AddUser({error})))
	);