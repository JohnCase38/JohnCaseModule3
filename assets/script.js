// Assignment Code
var generateBtn = document.querySelector("#generate");
var numSet = "1234567890"
var lowerSet = "abcdefghijklmnopqrstuvwxyz"
var upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specSet = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

function generatePassword() {
  let invalid = true
  while(invalid) {
    var length = prompt("How many characters?")
    length = parseInt(length)
    console.log(length)
    if(length >= 8 && length <= 128) {invalid = false}
    else alert("Error")
  }
  var specCharacters = confirm("Use special characters?")
  var lowercase = confirm("Use lowercase?")
  var uppercase = confirm("Use Uppercase?")
  var numbers = confirm("Use numbers?")
  if(!specCharacters && !lowercase && !uppercase && !numbers) {
    alert("You didn't select a character type!")
  }
  var password = ""
  for(let i = 0; i < length; i++) {
    password = password + selectFrom(selectarray(numbers, lowercase, uppercase, specCharacters))
  }
  
  return password
 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword("#password");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function selectFrom(array) {
  let RanNum = Math.floor(Math.random() * array.length);
  return array[RanNum]
}

function selectarray(Nums, lowers, uppers, specs) {
  let invalid = true 
  while(invalid) {
    let RanNum = Math.floor(Math.random() * 4);
    if(RanNum === 0 && Nums) return numSet
    if(RanNum === 1 && lowers) return lowerSet
    if(RanNum === 2 && uppers) return upperSet
    if(RanNum === 3 && specs) return specSet
  }
}