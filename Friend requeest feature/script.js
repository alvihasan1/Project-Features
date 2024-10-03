let screenText = document.querySelector("h2")

let addFriend = document.querySelector("#add")

let btnText = document.querySelector("button")

let counter = 0

addFriend.addEventListener("click", function(){
   if(counter == 0 ){
    screenText.innerHTML = "You are friends now"
    screenText.style.color = "blue" 
    btnText.innerHTML = "Remove friend"
    counter = 1
   } else  {screenText.innerHTML = "You are no longer friends"
   screenText.style.color = "red" 
   screenText.style.backgroundColor = "lightgray"
   screenText.style.borderRadius = "20px"
   btnText.innerHTML = "Add Friend"
   counter = 0

}
   
})

