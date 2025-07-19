const inventory = [];


function findProductIndex(prodName) {
    for(let i = 0 ; i < inventory.length; i++) {
      if(prodName.toLowerCase() === inventory[i].name) {
        return i;
      } 
      
    }
     return -1;
    
}


function addProduct(prodObj) {
  for(let i = 0 ; i< inventory.length; i++) {
     if(prodObj.name.toLowerCase() === inventory[i].name) {
           inventory[i].quantity+=prodObj.quantity;
           
          
          console.log(`${inventory[i].name} quantity updated`);
          
          return
  } 
  
  }
    prodObj.name = prodObj.name.toLowerCase();
  inventory.push(prodObj);
     console.log(`${prodObj.name} added to inventory`);
    
  }



function removeProduct(prodName, quantity) {
    for(let i = 0 ; i< inventory.length ; i++) {
      if(prodName.toLowerCase() === inventory[i].name) {
        let remQuan = inventory[i].quantity - quantity;
        if(remQuan > 0) {
          inventory[i].quantity = remQuan;
        console.log(`Remaining ${prodName.toLowerCase()} pieces: ${remQuan}`)
        } else if( remQuan === 0) {
             inventory.splice(i,1);

        }else {
          console.log(`Not enough ${prodName.toLowerCase()} available, remaining pieces: ${inventory[i].quantity}`)
        } 
        return 
      } 
         
    }
          
          console.log(`${prodName.toLowerCase()} not found`);
        
  
}



console.log(findProductIndex("flour"));
console.log( findProductIndex("FloUr"));
console.log( findProductIndex("chicken"));
addProduct({name: "FLOUR", quantity: 5})

// console.log(findProductIndex("ladki"));
// addProduct({name: "ladki", quantity: 5})
 addProduct({name: "RICE", quantity: 5});
 console.log(inventory)
 removeProduct("FLOUR", 10)
 console.log(inventory)
 
 

