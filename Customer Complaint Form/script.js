const fullName = document.getElementById("full-name");

const email= document.getElementById("email");

const form =  document.getElementById("form");

const orderNo =  document.getElementById("order-no");

const productCode =  document.getElementById("product-code");

const quantity =  document.getElementById("quantity");

const complaintsGroup =  document.querySelectorAll('input[type="checkbox"]');

const complaintDescription =  document.getElementById('complaint-description');

const solutionsGroup = document.querySelectorAll('input[type="radio"]');

const solutionDescription =  document.getElementById('solution-description');







form.addEventListener("submit", (event) => {
   let isValid = true;
  if(fullName.value.trim() === "") {
    isValid = false;
    // event.preventDefault();  
    console.log("fullName empty hai tu")
  }

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
  if(!regexEmail.test(email.value)){
     isValid = false;
    // event.preventDefault();  
    console.log("email sahi nahi tu")
  }

  const regexOrderNumber = /^2024\d{6}/;
  if(!regexOrderNumber.test(orderNo.value)) {
     isValid = false;
    // event.preventDefault();  
    console.log("orderNo sahi hai hai tu")
  }

  const regexProdCode = /^[a-zA-Z]{2}\d{2}-[a-zA-Z]{1}\d{3}-[a-zA-Z]{2}\d{1}$/;
  if(!regexProdCode.test(productCode.value)) {
     isValid = false;
    // event.preventDefault();  
    console.log("productCode sahi hai hai tu")
  }
  
  const isAnyChecked = Array.from(complaintsGroup).some(check => check.checked)
  if(!isAnyChecked) {
    isValid = false;
    console.log("at least one should be checked")
  }
  
  const otherCheckBox = Array.from(complaintsGroup).find(box => box.value === 'other')
  
  if(otherCheckBox && otherCheckBox.checked) {
    if(complaintDescription.value.trim().length < 20){
  
  isValid = false;
  console.log("Description of Complaint Reason should be greater than 20 characters")
    }
  }

  const isAnyRadio = Array.from(solutionsGroup).some(ch => ch.checked)
  if(!isAnyRadio) {
    isValid = false;
    console.log("At least select one radio");
  }

  const otherRadio = Array.from(solutionsGroup).find(radio => radio.value === 'other')

if(otherRadio && otherRadio.checked) {
   if(solutionDescription.value.trim().length < 20 ) {
    isValid = false;
    console.log("At least 20 characters for solution")
  }
}




  if(!isValid) {
    console.log("mat karo submit");
    event.preventDefault();
  }

})

function validateForm() {
  


 
}

