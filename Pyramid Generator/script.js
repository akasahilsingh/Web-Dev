

function pyramid(string, rows, isBool) {
  let result="\n";
    if(isBool) {
      for(let i = 0; i<rows ; i++) {
            let spaces = " ".repeat(i);
         let char = string.repeat(2*rows - (2*i+1));
         result +=  spaces+char+"\n";
        
        
      }
      return result ;
    } else {
       for(let i = 0; i<rows ; i++) {

         let spaces = " ".repeat(rows-i-1);
         let char = string.repeat(2*i+1);
         result +=spaces+char+"\n";
        
    
      }
      return result;
    }



}

console.log(pyramid("o", 4, false));
console.log(pyramid("p", 5, true));