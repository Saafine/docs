// whenever notifyRestart$ emits, observable reloads
merge(
    source$,
    notifyRestart$.pipe(
        tap(() => {
            throw new Error('restart');
        })
    )
).pipe(
    retryWhen(err$ => err$.pipe(map(err => {
            if (err.message === 'restart') {
                return true;
            } else {
                throw err;
            }
        }),
        shareReplay()
    )
