const tAjax = (url, dataToSend) => {
  const request = new XMLHttpRequest();
  return new Promise((resolve, reject) => {
    request.open('POST', url, true); // method, url, async, user, password
    request.setRequestHeader('Content-type', 'application/json');

    request.onreadystatechange = () => {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.readyState === 4 && request.status === 200) {
          resolve(request.responseText);
        } else {
          reject(new Error('XMLHttpRequest failed.'));
        }
      }
    };

    const jsonStr = JSON.stringify(dataToSend);
    request.send(jsonStr);
  });
};

// Generator loop that works with promises
function run (generator) {
  console.log('Creating generator');
  const iterator = generator();

  function iterate (iteration) {
    if (iteration.done) {
      console.log('Generator finished');
      return iteration.value;
    }
    // expect each yield to be a promise that can get resolved
    const promise = iteration.value;
    // 1. when promise get resolved, continue with generator (next iteration)
    // 2. x is an object that contains status of generator (done: true/false), and promise data (resolve with response.text, and reject with error)
    // 3. !note1C - return is neccessary for the same reason as in !note1
    return promise.then(x => iterate(iterator.next(x)));
  }

  console.log('Initilize iterating');
  return iterate(iterator.next()); // !note1 - return is neccessary if we want to use then/catch (a promise) inside run execution (see !note1A, !note1B, !note1C)
}

run(function * () {
  let firstResponse = yield tAjax('http://saafine.pe.hu/api/test.php', {test: 'passed'});
  // console.log(firstResponse);
  let secondResponse = yield tAjax('http://saafine.pe.hu/api/test.php', {test: 'passed2'});
  // console.log(secondResponse);
  return (firstResponse + ' //////// ' + secondResponse);
}).then(result => { // !note1A
  console.log('Run resulted in:', result);
}).catch(err => { // !note1B
  console.log('Failure... :(', err);
});