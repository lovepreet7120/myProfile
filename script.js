// Student Name: Lovepreet singh
// Student Id: 145033205
// Dated: 12/12/2021 



let form = document.querySelector("form");
let hiddenElement = document.getElementById("hiddenElement")
form.elements.chosen[2].addEventListener("click" , () => {
    hiddenElement.style.display = "block"
})