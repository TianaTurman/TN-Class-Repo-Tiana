/******************
 * YOUR CODE BELOW *
 ******************/
var myFirstName = "YourFirstName"; // Replace with your first name
var myLastName = "YourLastName";   // Replace with your last name
var myFavoriteCeleb = "FavoriteCelebrity"; // Replace with your favorite celebrity's name
var mySentence = "My name is " + myFirstName + " " + myLastName + ". My favorite celebrity is " + myFavoriteCeleb + ".";

// Variables representing personal attributes

var message = "Global message";

function showMessage(str) {
  var message = "Local message"; // This "shadows" the global variable
  console.log(message); // Accessing the local variable
  if(message < str.legnth){
    let noMessage = '';

  }
  
}



/*********************************************************************************************************************

 * CODE BELOW HERE IS FOR INTERNAL USE ONLY! IT ENSURES THAT THE TESTING *
 * CAN READ AND EVALUATE YOUR CODE. *
 * DON'T CHANGE ANYTHING BELOW HERE, PLEASE! *

 *********************************************************************************************************************/

if (typeof myFirstName === "undefined") {
  myFirstName = undefined;
}

if (typeof myLastName === "undefined") {
  myLastName = undefined;
}

if (typeof myFavoriteCeleb === "undefined") {
  myFavoriteCeleb = undefined;
}

if (typeof mySentence === "undefined") {
  mySentence = undefined;
}

if (typeof myLuckyNum === "undefined") {
  myLuckyNum = undefined;
}

if (typeof myAge === "undefined") {
  myMentalAge = undefined;
}

if (typeof myHeight === "undefined") {
  myHeight = undefined;
}

if (typeof myFavoriteYear === "undefined") {
  myFavoriteYear = undefined;
}

if (typeof mySum === "undefined") {
  mySum = undefined;
}

if (typeof myProduct === "undefined") {
  myProduct = undefined;
}

if (typeof myHeightAndAge === "undefined") {
  myHeightAndAge = undefined;
}

module.exports = {
  myFirstName,
  myLastName,
  myFavoriteCeleb,
  mySentence,
  myLuckyNum,
  myAge,
  myHeight,
  myFavoriteYear,
  mySum,
  myProduct,
  myHeightAndAge,
};
