/**
 * TLDR: when handling errors, you want your catch inside of a merge operation.
 */

/**
 * What if we put the catch inside of the switchMap
 */
Observable.interval(1000) // the interval fires
  .switchMap(() => // switchMap creates the AJAX observable, with a catch
    this.http.get(url) // ajax errors
      .catch(err => Observable.empty()) // catch dies, but wires up the empty
  )
  .subscribe(data => render(data));

/**
 * switchMap won't complete if the source isn't complete yet.
 * 1. second observer chain is created when using catch
 * 2. second chain is punctuated with a catch
 * 3. shielding main observer chain
 */