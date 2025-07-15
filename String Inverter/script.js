


function reverseString(str) {
  let splitStr = str.split("");
  
  splitStr.reverse();
  
  return splitStr.join("");
  

}

console.log(reverseString("Hello"));

console.log(reverseString("Howdy"));

console.log(reverseString("Greetings from Earth"));