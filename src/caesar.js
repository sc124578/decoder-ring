// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

//What I need to do
//create a function that takes in an input and a shift amout and returns a different input
//make sure the input cannot change numbers
//make sure the input returns false if given a 0 a number greater than 25 and less than -25
//make sure the function ignores capital letters and makes all the letters lower case
//make sure it maintaines spaces before and after encoding and decoding



const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    
    // your solution code here
   if (shift > 25 || shift < -25 || shift === 0 || !input) { // This is my exclusions to the code that makes it so it returns false if any of the code contain those paramaters.
    return false
  }
  shift *= encode ? 1: -1 //This is to make sure decoding is correct
  if (shift < 0) {
    return caesar(input, shift + 26) // I found this method online, I belive it helps with wrapping around the alphabet
  }
  
  const message = input.toLowerCase() // I need to make sure to make all letters lowercase
  let cipherText = "" // the cipherText will become the desired outcome
  for (let i = 0; i < message.length; i++){ // loop through each letter to find its code of the ascii chart
   let ascii = message[i].charCodeAt() //Make a new declaration that takes the input after it is looped and find its position on the ascii chart
   const newCharacter = String.fromCharCode(((ascii - 97 + shift) % 26) + 97)//takes the previous declaration plus some additional math to find out what the code should be with an input.
   if (encode === false) { //if it is a decode and not an encode.
    
    if (ascii >= 97 && ascii <= 122) //if the ascii is within the lowercase letter value it will change the found input into the declared variable 
    { cipherText += newCharacter
      
    } else {
      cipherText += String.fromCharCode(ascii)
    }
  }  else {
    if (ascii >= 97 && ascii <= 122 || ascii <= 97 && ascii >= 122){
        cipherText += newCharacter
      }
     else {
   cipherText += String.fromCharCode(ascii)
    }
  }


}
  

  return cipherText
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };


