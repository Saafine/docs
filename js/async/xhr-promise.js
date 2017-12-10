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

let promiseRequest = tAjax('http://saafine.pe.hu/api/test.php', {test: 'passed'});
// use promise.all for parallel execution
promiseRequest
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((err) => {
    console.log(err);
  });