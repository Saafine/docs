// Event listener (button click) observable from scratch

Rx.Observable.create((obs) => {
  button.onclick = function () {
    obs.next('button clicked');
  }
})
  .subscribe(observer);