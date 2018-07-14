/**
 * Used to empty trash on google drive
 */
const SECURE = {
  url: 'https://clients6.google.com/drive/v2internal/files/trash?openDriveXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  key: 'XXXXXXXXXXXXXXXXXXXXXXXXXX',
  auth: 'SAPISIDHASH XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
};

function emptyTrash() {
  const request = new XMLHttpRequest();
  request.withCredentials = true;
  const payload = {
    openDrive: false,
    reason: 904,
    syncType: 0,
    errorRecovery: false,
    key: SECURE.key
  };

  return new Promise((resolve, reject) => {
    request.open('DELETE', SECURE.url, true);
    request.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
    request.setRequestHeader('authorization', SECURE.auth);

    request.onreadystatechange = () => {
      if (request.readyState === XMLHttpRequest.DONE) {
        console.log(request);
        resolve('finished');
      }
    };

    request.send(JSON.stringify(payload));
  });
}

emptyTrash();


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

let promiseRequest = tAjax('http://saafine.pe.hu/api/test.php', { test: 'passed' });
// use promise.all for parallel execution
promiseRequest
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((err) => {
    console.log(err);
  });