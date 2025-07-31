const poll = new Map();
poll.set("Malaysia", new Set());
poll.set("Turkey", new Set());
poll.set("Algeria", new Set());


poll.get("Malaysia").add("1");
poll.get("Turkey").add("9");
poll.get("Algeria").add("11");

const addOption = (option) => {

if(option === ""){
  return `Option cannot be empty.`;
}

if(!poll.has(option)) {
 poll.set(option, new Set());
 return `Option "${option}" added to the poll.`;
} 
  return `Option "${option}" already exists.`;

};

const vote = (option, voterId) => {

if(!poll.has(option)) {
  return `Option "${option}" does not exist.`;
}
if(poll.get(option).has(voterId)) {
  return `Voter ${voterId} has already voted for "${option}".`;
}
 poll.get(option).add(voterId);
return `Voter ${voterId} voted for "${option}".`
}

const displayResults = () => {
  let result = `Poll Results:\n`
for(const [keys, option] of poll) {
  result += `${keys}: ${option.size} votes\n`
}
  
 return result.trim();
}
console.log(addOption("Egypt"));
console.log(addOption("Turkey"));
console.log(vote("Malaysia", "traveler1"));
console.log(vote("Algeria", "traveler1"));
console.log(vote("Algeria", "traveler1"));
console.log(poll);

console.log(displayResults());



