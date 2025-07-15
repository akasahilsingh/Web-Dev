function maskEmail(email) {
    
    let extraction_index = email.indexOf("@");
  
  let extracted_text = email.slice(1,extraction_index-1);
  
  return email.replace(extracted_text,"*".repeat(extraction_index-2));
  
 
}

let email = `hello@gmail.com`;

console.log(maskEmail(email));

console.log(maskEmail("apple.pie@example.com"));

console.log(maskEmail("freecodecamp@example.com"));
console.log(maskEmail("info@test.dev"));
console.log(maskEmail("user@domain.org"));

