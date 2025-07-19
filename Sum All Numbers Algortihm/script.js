
function sumAll(arr) { 

  let num1 = arr[0];
  let num2 = arr[1];
let sum = 0;
   arr.sort((a,b) => a-b)
  for(let i = arr[0]; i <=arr[arr.length-1] ;i++) {
    
    sum+=i;

  }
  return sum;
  }

  console.log(sumAll([2,4,7]));

  
  console.log(sumAll([4,1]));


  
  console.log(sumAll([5,10]));
  
  console.log(sumAll([10,5]));


