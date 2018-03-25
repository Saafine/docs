function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  var result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall();
console.log('hey');
