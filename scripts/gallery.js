const images = document.querySelectorAll(".image");
const addImage = document.querySelector(".addimage");
const imagesContent = document.querySelector(".images-light");
const menuIcon1 = document.querySelector(".menuIcon");

images.forEach((image) => {
  image.addEventListener("click", () => {
    showImage(image.getAttribute("src"));
    console.log("has hecho click");
  });
});

imagesContent.addEventListener("click", (e) => {
  if (e.target !== imagesContent) {
    imagesContent.classList.toggle("showImage");
    menuIcon1.style.opacity = "1";
  }
});

const showImage = (image) => {
  addImage.src = image;
  imagesContent.classList.toggle("showImage");
  menuIcon1.style.opacity = "0";
};
