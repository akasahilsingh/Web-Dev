function generatePassword(passLength) {
  const randomChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let newPass=[];
  let passString;

  for(let i = 0 ; i< passLength ; i++) {
    let randomNum = Math.floor(Math.random()*randomChar.length);
    newPass.push(randomChar[randomNum])
    
  }
  passString = newPass.join("");
  

return  passString;

}

let password = generatePassword(7);
console.log(`Generated password: ${password}`)
// console.log(`generated password is ` + typeof password)


//Testing 
// let x = "HEllo"
// console.log(x[1])


// let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"
// let split = str.split("");

// let num = 6;
// // let newpass=[];
// let newstr;
// for( let i = 0; i< num; i++) {
//    let j = Math.floor(Math.random()*str.length)

   
//    newpass.push(str[j]);
//   newstr = newpass.toString(); 
   
// }
// console.log(newstr)