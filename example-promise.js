// function getTempCallBack (location, callback) {
//
//   callback(undefined, 78);
//   callback('City not found');
//
// }
//
//
// getTempCallBack('Miami', function (err, temp) {
//
//   if (err) {
//     console.log('error', err);
//   }
//   else {
//     console.log('Success', temp);
//   }
//
// });
//
// //Using promises
// function getTempPromise (location) {
//
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//
//   });
//
// }
//
// getTempPromise('Miami').then(function (temp){
//   console.log('promise success', temp);
// }), function (err) {
//   console.log('promise error', err);
// })

function addPromise (a, b) {

  return new Promise (function (resolve, reject) {

    if (typeof a === 'number' && typeof b === 'number'){
      resolve(a + b);
    }
    else {
      reject('Both must be numbers');
    }
  });

}

addPromise(2,5).then(function (sum) {

  console.log('Sum of two numbers is: ', sum)

}, function (err) {

  console.log('Promise err', err);

});

addPromise('a',5).then(function (sum) {

  console.log('Sum of two numbers is: ', sum)

}, function (err) {

  console.log('Promise err', err);

});
