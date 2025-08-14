const generateElement = () => Math.floor((Math.random())*100)


const generateArray = () => {
  const arr = [];
  for(let i = 0; i<5 ; i++) {
    arr.push(generateElement());
  }
  return arr;
}

const generateContainer = () => {
 return document.createElement("div");
  
}

const fillArrContainer  = (element, arr) => {

   for(let i = 0; i<arr.length ; i++) {
      const spanEl = document.createElement("span");
     spanEl.textContent = arr[i]
    element.appendChild(spanEl);
   }
   return element;
}

const isOrdered = (num1, num2) => {
 if(num1 <= num2) {
   return true;
 } else return false;
}

const swapElements = (arr, index) => {
 
if(!isOrdered(arr[index],arr[index+1])) {
let a = arr[index];
let b = arr[index + 1];
let temp = a;
a = b;
b = temp;
arr[index] = a;
arr[index+1] = b;
}
}

const highlightCurrentEls = (element, index) => {
  element.children[index].style.border = '2px dashed red';
  element.children[index+1].style.border = '2px dashed red';
}

const generateBtn = document.getElementById('generate-btn');

const startingArray = document.getElementById('starting-array');

const arrayContainer = document.getElementById('array-container');

const sortBtn = document.getElementById('sort-btn');

console.log(generateElement());
console.log(generateArray())
console.log()

let currentArr = [];

generateBtn.addEventListener("click", ()=> {
  startingArray.innerHTML = "";
  currentArr = generateArray();
const container = fillArrContainer(generateContainer(),currentArr)
  startingArray.appendChild(container);
  
})

sortBtn.addEventListener("click", ()=> {
  arrayContainer.innerHTML = "";
  const arrCopy = [...currentArr];

  const startingDiv = generateContainer();
  
  fillArrContainer(startingDiv, arrCopy);
  arrayContainer.appendChild(startingDiv);

  for(let i = 0; i< arrCopy.length -1 ; i++) {
    for(let j = 0; j < arrCopy.length -1 - i; j++) {
      if(!isOrdered(arrCopy[j],arrCopy[j+1])) {
        swapElements(arrCopy,j);
        
        const stepDiv = generateContainer();
        fillArrContainer(stepDiv, arrCopy);
        highlightCurrentEls(stepDiv, j);
        arrayContainer.appendChild(stepDiv);
      }
    }
  }
  
})


