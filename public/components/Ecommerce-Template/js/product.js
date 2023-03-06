//alert("hello");

const productImages = document.querySelectorAll(".product-images img");
const productImageSlider = document.querySelector(".image-slider");

let activeImageSlide = 0;

productImages.forEach((item, i) => {
  item.addEventListener("click", () => {
    productImages[activeImageSlide].classList.remove("active");
    item.classList.add("active");
    productImageSlider.style.backgroundImage = `url('${item.src}')`;
    activeImageSlide = i;
  });
});

//toggle sizes button

const sizeBtns = document.querySelectorAll(".size-radio-btn");
let checkedBtn = 0;

sizeBtns.forEach((item, i) => {
  item.addEventListener("click", () => {
    sizeBtns[checkedBtn].classList.remove("check");
    item.classList.add("check");
    checkedBtn = i;
  });
});
