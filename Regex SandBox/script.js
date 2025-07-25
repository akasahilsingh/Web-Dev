const regexPattern = document.getElementById("pattern");

const caseInsensitiveFlag = document.getElementById("i");

const globalFlag = document.getElementById("g");

const stringToTest = document.getElementById("test-string");

const testButton = document.getElementById("test-btn");

const testResult = document.getElementById("result");



function getFlags() {
//   if(globalFlag.checked && caseInsensitiveFlag.checked){
//   return "ig";
//   }
//   else  if(caseInsensitiveFlag.checked){
//   return "i";
// }
//   else if(globalFlag.checked){
//   return "g";
//   }
  
//   else return "";
return (globalFlag.checked ? "g" : "")+(caseInsensitiveFlag.checked ? "i" : "");
}

function testRegex() {
  
  const regex = new RegExp(regexPattern.value,getFlags())
  // console.log(regex);
  // console.log(stringToTest.textContent);
  const result = stringToTest.textContent.match(regex);
  const replaced = stringToTest.textContent.replace(regex, match =>`<span class="highlight">${match}</span>`);
  
//   console.log(replaced);
//   console.log(typeof result)
  if(result){
  stringToTest.innerHTML = replaced;
  testResult.textContent = Array.isArray(result)? result.join(", ") : result;
  }
  else return testResult.textContent = "no match";
 
}

testButton.addEventListener("click",testRegex);



