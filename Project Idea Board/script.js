const projectStatus = {
PENDING: {description: 'Pending Execution'},
SUCCESS: {description: 'Executed Successfully'},
FAILURE: {description: 'Execution Failed'}

};

class ProjectIdea {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.status =  projectStatus.PENDING;
  }
  updateProjectStatus(newStatus) {
    this.status = newStatus;
  } 

  
}

class ProjectIdeaBoard {
  constructor(title) {
    this.title = title;
    this.ideas = [];
  }

  pin(projectIdea) {
    this.ideas.push(projectIdea);
  }

  unpin(projectIdea) {
    this.ideas.pop();
  }

  count() {
    return this.ideas.length;
  }

  formatToString() {
    let result = `${this.title} has ${this.count()} idea(s)\n`;
    this.ideas.forEach(idea => {
      result += `${idea.title} (${idea.status.description}) - ${idea.description}\n`
});
  
  return result;
  }
}
console.log(new ProjectIdeaBoard("Empty Board"))


console.log(new ProjectIdea("Smart Window Locks", "An automation project allowing users to lock, unlock windows automatically based on weather conditions."));

const fitnessApp = new ProjectIdea("Fitness Tracker App", "An app that tracks user workouts, diet, and sleep patterns.")

fitnessApp.updateProjectStatus(projectStatus.SUCCESS);
console.log(fitnessApp.status.description)

const breakFast =  new ProjectIdea("Breakfast Chef Robot", "A robot that can follow a given list of instructions and prepare breakfast for the user and let them know through their phone.") 

breakFast.updateProjectStatus(projectStatus.FAILURE)

console.log(breakFast.status.description)
