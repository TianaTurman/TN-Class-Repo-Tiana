// let age = 15;

// function tikTokAge(age) {
//   if ( age >= 16) {
//     return 'you are old enough'
//   }else {
//     return 'not old enough'
//   }
// }

// console.log(tikTokAge(age))

// for (let i = 0; i <= 3; i++){
//   console.log(i);
// }


// const person1 = {
//   firstName: "spongebob",
//   lastName: "squarepants",
//   age: 30,
//   isEmployed: true,
//   sayHello: function(){console.log('hey!')}
// }

// person1.sayHello()

// var myName = "tiana";

// var myName2 = myName.toLocaleUpperCase();
// console.log(myName2)



function factorial(n) {
  if(n == 1 || n == 0){
    return 1;

  }else {
    return n * factorial(n-1)
  }
}
console.log(factorial(1));

//2 - 2 * factorial(2)
//2 - 3 * factorial(2)
//1