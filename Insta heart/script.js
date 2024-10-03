var itemContainer = document.querySelector("#container");
var loveIcon = document.querySelector("i");

itemContainer.addEventListener("dblclick", function () {
  loveIcon.style.transform = " scale(2)";
  setTimeout(function () {
    loveIcon.style.transform = " scale(0)";
  }, 1000);
});
