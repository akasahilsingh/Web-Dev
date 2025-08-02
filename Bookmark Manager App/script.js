const viewCategoryBtn = document.getElementById("view-category-button");

const formSection= document.getElementById("form-section");

const mainSection= document.getElementById("main-section");

const closeFormBtn= document.getElementById("close-form-button");

const addBookMarkBtn= document.getElementById("add-bookmark-button");

const bookMarkListSection = document.getElementById("bookmark-list-section");

const closeListBtn = document.getElementById("close-list-button");

const bookMarkCategoryName = document.getElementById("category-name");

const categoryDropdown = document.getElementById("category-dropdown");

addBookMarkBtn.addEventListener("click", ()=> {
  formSection.classList.toggle("hidden");
  mainSection.classList.toggle("hidden");  
});

closeFormBtn.addEventListener("click", ()=> {
  formSection.classList.toggle("hidden");
  mainSection.classList.toggle("hidden");
});

viewCategoryBtn.addEventListener("click", ()=> {
  bookMarkListSection.classList.toggle("hidden");
  mainSection.classList.toggle("hidden");  
});

closeListBtn.addEventListener("click", ()=> {
  bookMarkListSection.classList.toggle("hidden");
  mainSection.classList.toggle("hidden")
})






categoryDropdown.addEventListener("change", ()=> {
    console.log(categoryDropdown.value);
    
    bookMarkCategoryName.textContent = categoryDropdown.value;
})