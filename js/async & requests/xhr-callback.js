const tAjax = (url, callback, dataToSend) => {
  const request = new XMLHttpRequest();
  request.open('POST', url, true); // method, url, async, user, password
  request.setRequestHeader('Content-type', 'application/json');

  request.onreadystatechange = () => {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.readyState === 4 && request.status === 200) {
        callback(request.responseText);
      } else {
        console.log('XMLHttpRequest failed.');
      }
    }
  };

  const jsonStr = JSON.stringify(dataToSend);
  request.send(jsonStr);
};

function mycallback (data) {
  console.log('Data fetched.', data);
}
// Simple request with url, callback and json object as args.
tAjax('http://saafine.pe.hu/api/test.php', mycallback, {test: 'passed'});

// Sequenced requests using callbacks
// ----------------------------------
let myCallbackHell1 = () => {
  console.log('Starting fetching data.');
  tAjax('http://saafine.pe.hu/api/test.php', myCallbackHell2, {test: 'passed'});
};

let myCallbackHell2 = () => {
  console.log('Fetching data number 2.');
  tAjax('http://saafine.pe.hu/api/test.php', myCallbackHell3, {test: 'passed'});
};

let myCallbackHell3 = () => {
  console.log('Fetching data number 3.');
  tAjax('http://saafine.pe.hu/api/test.php', myCallbackHell4, {test: 'passed'});
};

let myCallbackHell4 = () => {
  console.log('Fetching data finished.');
};

// Initiliaze hell
myCallbackHell1();

// ------------------------------------------------------
// Callback with timeout
// ------------------------------------------------------
let testTimeout = (callback) => {
  setTimeout(() => {
    callback();
  }, 2000);
};

let callbackTimeout = () => {
  console.log('Timeout finished');
};

testTimeout(callbackTimeout);
