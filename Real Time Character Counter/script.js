const inputText  = document.getElementById("text-input")


const ptext = document.getElementById("char-count")



inputText.addEventListener("input", () => {
  if(inputText.value.length <= 50) {
  
  ptext.innerText= `Character Count: ${inputText.value.length}/50`;
} 
else return inputText.value = inputText.value.slice(0,50);
})




