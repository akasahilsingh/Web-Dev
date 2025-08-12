const permuteString = (str ,prefix = "", arr = []) => {
  if(str.length === 0) {
    arr.push(prefix);
    return arr;
  } else {
   for(let ch = 0 ; ch < str.length ; ch++) {
     let remaining = str.slice(0,ch) + str.slice(ch+1);
     permuteString(remaining,prefix + str[ch],arr)
     
   }
   return arr;
  }
}


console.log(permuteString('cat'));

console.log(permuteString('fcc'))
