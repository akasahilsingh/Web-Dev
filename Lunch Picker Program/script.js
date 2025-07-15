
const lunches = [];

function addLunchToEnd(arr, str) {
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`)
  return arr;
}

function addLunchToStart(arr,str) {
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`)
  return arr;
}

function removeLastLunch(arr) {
  
  if(arr.length >0) {
    let removed = arr.pop();
    console.log(`${removed} removed from the end of the lunch menu.`);
  }
  else  console.log(`No lunches to remove.`);

  return arr;
}

function removeFirstLunch(arr) {
  if(arr.length > 0) {
    let removed = arr.shift();
    console.log(`${removed} removed from the start of the lunch menu.`);
  }
  else 
  console.log(`No lunches to remove.`);

  return arr;
}


function getRandomLunch(arr) {
  if(arr.length > 0) {
    let randomLunchNum = Math.floor(Math.random()*arr.length);
    let randomLunch = arr[randomLunchNum]
    console.log(`Randomly selected lunch: ${randomLunch}`);
  }
  else console.log("No lunches available.");
}

function showLunchMenu(arr) {
  if(arr.length  === 0) {
    console.log("The menu is empty.");
    
  }
  else console.log(`Menu items: ${arr.join( ', ')}`);
}

console.log( addLunchToEnd(["Pizza", "Tacos"], "Burger"));

console.log(addLunchToStart(["Burger", "Sushi"], "Pizza"));

console.log(removeLastLunch(["Stew", "Soup", "Toast"]));

console.log(removeFirstLunch(["Salad", "Eggs", "Cheese"]));

console.log(showLunchMenu(["Greens", "Corns", "Beans"]))

console.log(showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]));