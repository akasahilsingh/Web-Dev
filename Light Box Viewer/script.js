const selectGallery = document.querySelector(".gallery")

const selectButton = document.getElementById("close-btn");
 const selectLightBox = document.querySelector(".lightbox");

const selectLightBoxImg = document.getElementById("lightbox-image");

selectGallery.addEventListener("click", (event)=> {
   
  const imgSrc = event.target.src;
  const newSrc = imgSrc.replace("-thumbnail", "")
  console.log(newSrc);
  document.getElementById("lightbox-image").src = newSrc;
  selectLightBox.style.display = "flex";
  
});

selectLightBox.addEventListener("click", (event)=> {
    if(event.target != selectLightBoxImg || event.target === selectButton) {
 selectLightBox.style.display = "none"
    }
});



