let allContent = document.getElementById("allIcons");
let allButtons = allContent.getElementsByTagName("button");

for (let item of allButtons) {
    let spanItem = document.getElementById(`${item.id}Span`);
    item.addEventListener("mouseover", () => {
        spanItem.style.opacity = "1"
    })
    item.addEventListener("mouseout", () => {
        spanItem.style.opacity = "0"
    })
}



// let cardOne = document.querySelector(".first-content");
// let cardTwo = document.querySelector(".second-content");
// let cardThree = document.querySelector(".third-content");



// cardOne.addEventListener("mouseover", () => {
//     document.querySelector(".card-text").style.opacity = "1";
// });
// cardOne.addEventListener("mouseout", () => {
//     document.querySelector(".card-text").style.opacity = "0";
// });


// cardTwo.addEventListener("mouseover", () => {
//     document.querySelector(".card-text-2").style.opacity = "1";
// });
// cardTwo.addEventListener("mouseout", () => {
//     document.querySelector(".card-text-2").style.opacity = "0";
// });

// cardThree.addEventListener("mouseover", () => {
//     document.querySelector(".card-text-3").style.opacity = "1";
// });
// cardThree.addEventListener("mouseout", () => {
//     document.querySelector(".card-text-3").style.opacity = "0";
// });



// //text ANIMATIONS
// let animation = document.querySelector(".card-text");
// let animation2 = document.querySelector(".card-text-2");
// let animation3 = document.querySelector(".card-text-3");
// cardOne.addEventListener("mouseover", () => {
//     animation.classList.add("text-animation");
// });
// cardOne.addEventListener("mouseout", () => {
//     animation.classList.remove("text-animation");
// });


// cardTwo.addEventListener("mouseover", () => {
//     animation2.classList.add("text-animation");
// });
// cardTwo.addEventListener("mouseout", () => {
//     animation2.classList.remove("text-animation");
// });

// cardThree.addEventListener("mouseover", () => {
//     animation3.classList.add("text-animation");
// });
// cardThree.addEventListener("mouseout", () => {
//     animation3.classList.remove("text-animation");
// });
