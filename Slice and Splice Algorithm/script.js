function frankenSplice(arr1, arr2, num) {
   
   let arr2Copy = arr2.slice()
  
 
   
  
  for (let i = 0 ; i<arr1.length; i++) {
    arr2Copy.splice(num+i,0,arr1[i]);
  
}
 return arr2Copy;

  
}


console.log(frankenSplice([1, 2, 3], [4, 5], 1));

console.log(frankenSplice([1, 2], ["a", "b"], 1));

console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));

console.log(frankenSplice([1, 2, 3, 4], [], 0));


let arr3 = [1,2,3]

for (const i of arr3) {
  console.log(i)
}
