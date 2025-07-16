const questions = [
 {
   category: "Math",
   question: "What is 7+5?",
   choices: ["10", "12", "13"],
   answer: "12" 
 },

  {
   category: "Science",
   question: "What planet is known as the Red Planet?",
   choices: ["Earth", "Venus", "Mars"],
   answer: "Mars" 
 },

  {
   category: "Geography",
   question: "Which country has the city of Tokyo?",
   choices: ["China", "South Korea", "Japan"],
   answer: "Japan" 
 },

  {
   category: "History",
   question: "Who was the first President of the United States?",
   choices: ["Abraham Lincoln", "George Washington", "Thomas Jefferson"],
   answer: "George Washington" 
 },

  {
   category: "Literature",
   question: "Who wrote 'Romeo and Juliet'?",
   choices: ["Mark Twain", "Charles Dickens", "William Shakespeare"],
   answer: "William Shakespeare" 
 }

];

function getRandomQuestion(questions) {
 return questions[Math.floor(Math.random()*questions.length)];
}

function getRandomComputerChoice(choices) {
  return choices[Math.floor(Math.random()*choices.length)];
}

function getResults(question, compChoice) {
   if(compChoice === question.answer) {
     return `The computer's choice is correct!`;
   }
   else return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
}
console.log(questions[1].choices[Math.floor(Math.random()*questions[1].choices.length)])

