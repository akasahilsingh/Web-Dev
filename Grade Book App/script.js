function getAverage(arrOfScore) {
   let sum = 0
   for(let num of arrOfScore) {
     sum += num;
   }
   let avg = sum/arrOfScore.length;
   return avg;

}

function getGrade(score) {
  if(score === 100) {
    return "A+";
  } 
  else if(score >=90 && score <= 99) {
    return "A";
  }
  else if(score >= 80 && score <=89) {
    return "B";
  }
  else if(score >=70 && score <=79) {
    return "C";
  }
  else if(score >=60 && score <=69) {
    return "D";
  }
  else return "F";
}

function hasPassingGrade(score) {
  let grade = getGrade(score);
     if(grade === "A+" || grade === "A" || grade === "B" || grade ==="C" || grade === "D") {
       return true;
     }
     else return false;
}


function studentMsg(arrOfScore, score) {
  let avg = getAverage(arrOfScore);
  let grade = getGrade(score)
    if(score>70) {
      return `Class average: ${avg}. Your grade: ${grade}. You passed the course.`;
    }
    else return `Class average: ${avg}. Your grade: ${grade}. You failed the course.`;

}




console.log(getGrade(89));

console.log()


console.log( getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));


console.log(studentMsg([15, 25, 35, 45, 55, 60, 70, 60], 75));

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

console.log(hasPassingGrade(69));