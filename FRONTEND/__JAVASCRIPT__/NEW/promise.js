// 1
const makeServerRequest = new Promise((resolve, reject) => {});

// 2.1
const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer;

  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});

// 2.2
makeServerRequest.then((result) => { console.log(result)})
// 'result' получается из аргумента, переданного методу 'resolve' . 

// 2.3 catch
makeServerRequest.catch((error) => {
  console.log(error);
});
// 'error' получается из аргуметна, переданного методы 'reject'


