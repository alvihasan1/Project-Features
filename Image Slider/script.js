let nextBtn = document.querySelector(".next-btn");
let prevBtn = document.querySelector(".prev-btn");
let sliderBox = document.querySelector(".slider");
let slideNumber = 1;
let images = document.querySelectorAll(".slide");

// function nextSlide() {
//   sliderBox.style.transform = `translateX(-${slideNumber * 100}%)`;
//   slideNumber++;
//   sliderBox.style.transition = "all 1s ease-out";
// }

// function firstSlide() {
//   sliderBox.style.transform = `translateX(0px)`;
//   sliderBox.style.transition = "none";
//   slideNumber = 1;
// }

nextBtn.addEventListener("click", function () {
  if (slideNumber < images.length) {
    sliderBox.style.transform = `translateX(-${slideNumber * 100}%)`;
    sliderBox.style.transition = "all 1s ease-out";
    slideNumber++;

    //nextSlide();
  } else {
    sliderBox.style.transform = `translateX(0px)`;
    sliderBox.style.transition = "none";
    slideNumber = 1;
    //firstSlide();
  }
});

// CODE FOR BACK BUTTON

prevBtn.addEventListener("click", function () {
  if (slideNumber > 1) {
    sliderBox.style.transform = `translateX(-${(slideNumber - 2) * 100}%)`;
    sliderBox.style.transition = "all 1s ease-out";
    slideNumber--;
  } else {
    sliderBox.style.transform = `translateX(-${(images.length - 1) * 100}%)`;
    // sliderBox.style.transition = "none";
    slideNumber = images.length;
  }
});
