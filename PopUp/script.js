let submitBtn = document.querySelector(".btn");
let popup = document.querySelector(".popup");
closePopup = document.querySelector(".btn-ok");

submitBtn.addEventListener("click", () => {
  popup.classList.add("open-popup");
});

closePopup.addEventListener("click", () => {
  popup.classList.remove("open-popup");
});
