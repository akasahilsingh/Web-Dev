const forumLatest =
  'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://cdn.freecodecamp.org/curriculum/forum-latest';

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Backend Development', className: 'backend' }
};

const timeAgo = (timestamp) => {
 const timeDiff = timestamp -  new Date().toTimeString().split(" ")[0];

 if(timeDiff < 60) {
   return `${timeDiff}m ago`;
 } else if(timeDiff < 24) {
   return `${timeDiff}h ago`;
 } else  {
   return `${timeDiff}d ago`;
 }
}

const viewCount = (noOfViews) => {
if(noOfViews >= 1000) {
  return `${Math.floor(noOfViews/1000)}k`
} else return noOfViews;
}

const forumCategory = (selectedCatId) => {
 
let categoryData;
 if( allCategories[selectedCatId]) {
   categoryData = allCategories[selectedCatId];
 } else {
   categoryData = {category: 'General', className: 'general'}
 }

return `<a href="${forumCategoryUrl}/${categoryData.className}/${selectedCatId}" class="category ${categoryData.className}">${categoryData.category}</a>`
}

const avatars = (posters, users) => {
  return `<img`
}

