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
 
  if (shift < 0) {
  return caesar(input, shift + 26) 
  }
  
  const message = input.toLowerCase()
  let cipherText = ""
  for (let i = 0; i < message.length; i++){
   let ascii = message[i].charCodeAt()
   const newCharacter = String.fromCharCode(((ascii - 97 + shift) % 26) + 97)
   if (encode === false) {
    
    if (ascii >= 97 && ascii <= 122) 
    { cipherText += newCharacter
      
    } else {
      cipherText += String.fromCharCode(ascii)
    }
  } else {
    if (ascii >= 97 && ascii <= 122){
      
      if (ascii <= 97 && ascii >= 122){
      
        cipherText += newCharacter
      }
    } else {
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

