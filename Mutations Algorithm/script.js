function mutation(arr) {
  const first = arr[0];
  const second = arr[1];

  let first_container = [];
  let second_container = [];
for(const ch of first.toLowerCase()){
    first_container.push(ch);
    
}
// console.log(first_container);



let count=0;

for(const ch of second.toLowerCase()) {

  if(first_container.includes(ch)){
    count++;
   
 } 
}
 if(count === second.length) 
   return true
 
 else return false;

 
 
}



 console.log(mutation(["hello", "hey"]));
 console.log( mutation(["hello", "Hello"]));
 console.log(mutation(["Alien", "line"]))
 console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]))
 console.log(mutation(["Mary", "Army"]))
 console.log(mutation(["floor", "for"]))
 console.log(mutation(["hello", "neo"]))
 console.log(mutation(["voodoo", "no"]))
 console.log(mutation(["ate", "date"]))
 console.log(mutation(["Tiger", "Zebra"]))
 console.log(mutation(["Noel", "Ole"]))
