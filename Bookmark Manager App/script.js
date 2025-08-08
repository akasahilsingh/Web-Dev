const viewCategoryBtn = document.getElementById("view-category-button");

const formSection = document.getElementById("form-section");

const mainSection = document.getElementById("main-section");

const closeFormBtn = document.getElementById("close-form-button");

const addBookMarkBtn = document.getElementById("add-bookmark-button");

const bookMarkListSection = document.getElementById("bookmark-list-section");

const closeListBtn = document.getElementById("close-list-button");

const bookMarkCategoryName = document.querySelectorAll(".category-name");

const categoryDropdown = document.getElementById("category-dropdown");

const categoryList = document.getElementById("category-list");

const addBookMarkBtnForm = document.getElementById("add-bookmark-button-form");

const name = document.getElementById("name");

const url = document.getElementById("url");

const deleteBtn = document.getElementById("delete-bookmark-button");

const bookMarkData = JSON.parse(localStorage.getItem("data")) || [];

const currentBookmark = {};

const addOrUpdateBookMark = () => {
  if (!name.value.trim() && !url.value.trim()) {
    alert("Please Provide At least one");
    return;
  }
  const selected  = categoryDropdown.options[categoryDropdown.selectedIndex].text;
  
  const bookMarkObj = {
    id: `${name.value.trim().toLowerCase().split(" ").join("-")}-${Date.now()}`,
    name: name.value,
    url: formatURl(url.value),
    category: selected
  };

  bookMarkData.unshift(bookMarkObj);
  localStorage.setItem("data", JSON.stringify(bookMarkData));
  updateCategoryList(selected);
  console.log(bookMarkObj);
};

const formatURl = (rawUrl) => {
  const trimmed = rawUrl.trim();
  if(!/^https?:\/\//i.test(trimmed)){
    return `https://${trimmed}`;
  }
  return trimmed
}

const selectedDropdown = categoryDropdown.value;

const updateCategoryList = (selectedCategory = selectedDropdown) => {
  

 const filteredBookMarkData = bookMarkData.filter(b => b.category === selectedCategory)

  if(!filteredBookMarkData.length){
  categoryList.style.color = "black";
  categoryList.textContent = "No Bookmarks Found";
  return;
}
  categoryList.innerHTML = "";
  // console.log(selected)
  filteredBookMarkData.forEach(({ id, name, url }) => {
    categoryList.innerHTML += `
    <div class="bookmark" id="${id}">
    <input type="radio" id="${id}" name="radio" style="margin-right: 10px">
    
    <a href="${url}" target="_blank">${name}</a>
    
    </div>
    `;
  });

};


updateCategoryList(); // called here so that No bookmarks Found message is handeled correctly


const deleteBookMark = (buttonEl) => {
  
  const selectedRadio = document.querySelector('input[name="radio"]:checked');
  console.log("buttonEl:", buttonEl);
  console.log("parentElement:", buttonEl?.parentElement);
  console.log("parent ID:", buttonEl?.parentElement?.id);

  if(!selectedRadio && bookMarkData.length){
    alert("Please Select one to delete");
    return;
  }

  const dataArrIndex  = bookMarkData.findIndex(
  (item)=> item.id === selectedRadio.id
  );
  
  // buttonEl.parentElement.remove();
  bookMarkData.splice(dataArrIndex,1);
  localStorage.setItem("data",JSON.stringify(bookMarkData));
  updateCategoryList();
  console.log("DOM id:", buttonEl.parentElement.id)
 console.log("Data item ids:", bookMarkData.map(b => b.id));   
}

addBookMarkBtn.addEventListener("click", () => {
  formSection.classList.toggle("hidden");
  mainSection.classList.toggle("hidden");
});

closeFormBtn.addEventListener("click", () => {
  formSection.classList.toggle("hidden");
  mainSection.classList.toggle("hidden");
});

viewCategoryBtn.addEventListener("click", () => {
  bookMarkListSection.classList.remove("hidden");
  mainSection.classList.add("hidden");
  const selected =
    categoryDropdown.options[categoryDropdown.selectedIndex].text;

  bookMarkCategoryName.forEach((el) => {
    el.textContent = selected;
  });
  updateCategoryList(selected);
});

closeListBtn.addEventListener("click", () => {
  bookMarkListSection.classList.toggle("hidden");
  mainSection.classList.toggle("hidden");
});

addBookMarkBtnForm.addEventListener("click", () => {
  addOrUpdateBookMark();
  formSection.classList.add("hidden");
   mainSection.classList.toggle("hidden");
   name.value = "";
   url.value = "";
  // console.log("bookmark added");
});

deleteBtn.addEventListener("click", function() {deleteBookMark(this)})