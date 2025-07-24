const checkBtn = document.getElementById("check-btn");

const textInput = document.getElementById("text-input");

const result =  document.getElementById("result");


function isPalindrom() {
   
  

  const input = textInput.value.toLowerCase().trim().replace(/[^a-z0-9]/g,"");
  const inputCopy = textInput.value.trim();

  if(inputCopy === "") {
  alert("Please input a value");
  return;
  }
  
  let low = 0;
  let high = input.length-1;
  while(low <=high) {
    if(input[low].toLowerCase() != input[high].toLowerCase()) {
      result.textContent = `${inputCopy} is not a palindrome`;
      return;
    }
    low++;
    high--;
  }
       result.textContent = `${inputCopy} is a palindrome`;
}

checkBtn.addEventListener("click", isPalindrom);

textInput.addEventListener("keydown", (event) => {
  if(event.key === "Enter") {
    isPalindrom();
  }
});






