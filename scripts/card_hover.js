let cardOne = document.querySelector(".first-content");
let cardTwo = document.querySelector(".second-content");
let cardThree = document.querySelector(".third-content");

cardOne.addEventListener("mouseover", () => {
    console.log("click");
    document.querySelector(".card-text").style.opacity ="1";
});
cardOne.addEventListener("mouseout", () => {
    console.log("click");
    document.querySelector(".card-text").style.opacity ="0";
});


cardTwo.addEventListener("mouseover", () => {
    console.log("click");
    document.querySelector(".card-text-2").style.opacity ="1";
});
cardTwo.addEventListener("mouseout", () => {
    document.querySelector(".card-text-2").style.opacity ="0";
});

cardThree.addEventListener("mouseover", () => {
    console.log("click");
    document.querySelector(".card-text-3").style.opacity ="1";
});
cardThree.addEventListener("mouseout", () => {
    document.querySelector(".card-text-3").style.opacity ="0";
});