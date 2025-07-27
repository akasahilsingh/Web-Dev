const fullName = document.getElementById("full-name");

const email= document.getElementById("email");






function validateForm() {
  
  if(fullName.value){

  }
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+/i;

  regex.test(email.value);

  const regexNumber = /^2024\d{6}/;

  const regexProdCode = /^[a-zA-Z]{2}\d{2}[a-zA-Z]{1}\d{3}[a-zA-Z]{2}\d{1}$/;
}
