// https://github.com/github/fetch
const tAjax = (url, dataToSend) => {
  fetch(url, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataToSend)
  })
    .then((response) => {
      return response.text(); // json() for json, blob() for text
    })
    .then((text) => {
      console.log(text);
    })
    .catch((err) => {
      console.log(err);
    });

};

tAjax('http://saafine.pe.hu/api/test.php', {test: 'passed'});