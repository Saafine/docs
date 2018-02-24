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

// async + await keyword
let getData = async () => {
  try {
    // sequential
    // let data = await tAjax('http://saafine.pe.hu/api/test.php', {test: 'passed'});
    // let data2 = await tAjax('http://saafine.pe.hu/api/test.php', {test: 'passed2'});
    // parallel
    let parallelData = await Promise.all([
      tAjax('http://saafine.pe.hu/api/test.php', {test: 'passed'}),
      tAjax('http://saafine.pe.hu/api/test.php', {test: 'passed2'})
    ]);
    console.log('ES7 Async+fetch/data >>>', parallelData); // returns an array with fetched data
  } catch (error) {
    console.log(error);
  }
};

getData();