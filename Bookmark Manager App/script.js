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

const bookMarkData = JSON.parse(localStorage.getItem("data")) || [];

const currentBookmark = {};

const addOrUpdateBookMark = () => {
  if (!name.value.trim() && !url.value.trim()) {
    alert("Please Provide At least one");
    return;
  }
  const bookMarkObj = {
    id: `${name.value.trim().toLowerCase().split(" ").join("-")}-${Date.now()}`,
    name: name.value,
    url: url.value,
  };

  bookMarkData.unshift(bookMarkObj);
  localStorage.setItem("data", JSON.stringify(bookMarkData));
  updateCategoryList();
  console.log(bookMarkObj);
};

const updateCategoryList = () => {
  categoryList.innerHTML = "";

  bookMarkData.forEach(({ id, name, url }) => {
    categoryList.innerHTML += `
    <div class="bookmark" id="${id}">
    <input type="radio" style="margin-right: 10px">
    
    <a href="${url}" target="_blank">${name}</a>
    </div>
    `;
  });
};

if (bookMarkData.length) {
  updateCategoryList();
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
});

closeListBtn.addEventListener("click", () => {
  bookMarkListSection.classList.toggle("hidden");
  mainSection.classList.toggle("hidden");
});

addBookMarkBtnForm.addEventListener("click", () => {
  addOrUpdateBookMark();
  console.log("bookmark added");
});
