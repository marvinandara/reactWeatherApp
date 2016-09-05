var names = ['Andrew', 'Julie', 'Jen'];
//
// names.forEach( function (name) {
//
//   console.log('foreach', name);
//
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
//
// console.log(returnMe('Marvin'));


// var person = {
//   name: 'Marvin',
//   greet: function () {
//     names.forEach(function (name) {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };

// var person = {
//   name: 'Marvin',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
//
// person.greet();

//Challenge

// function add (a,b) {
//   return a + b;
// }

// var add = (a,b) => {
//   return a + b;
// }

var add = (a,b) => a + b;

console.log(add(1,3));
console.log(add(9,0));
