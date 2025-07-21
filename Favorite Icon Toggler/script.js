const classFill = document.querySelectorAll(".favorite-icon");


for(const i of classFill) {
i.addEventListener("click", () => {
 const isFilled = i.classList.toggle("filled")

  if(isFilled) {
    i.innerHTML = "&#10084";

  }
  else{
    i.innerHTML = "&#9825";
  }

});
}


