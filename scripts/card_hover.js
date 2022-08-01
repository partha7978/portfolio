//todo: for skills page 
let allContent = document.getElementById("allIcons");
let allIcons = allContent.getElementsByTagName("img");

//! Skills page image hover text effect
for(let i of allIcons){
    let text = document.getElementById(`${i.id}Span`);
    i.addEventListener("mouseover", () => {
        text.style.opacity = "1"
    })
    i.addEventListener("mouseout", () => {
        text.style.opacity = "0"
    })
}


//todo: for education card
let allEducationCard = document.querySelectorAll(".first-content");
let allEducationAnimation = document.querySelectorAll(".card-text");

//! education card hover text effect.
allEducationCard.forEach(card => {
    card.addEventListener("mouseover", () => {
        card.querySelector(".card-text").style.opacity = "1";
        card.querySelector(".card-text").classList.add("text-animation");
    });
    card.addEventListener("mouseout", () => {
        card.querySelector(".card-text").style.opacity = "0";
        card.querySelector(".card-text").classList.remove("text-animation");
    });
});


//! FOR PROJECT PAGE CARDS HOVER EFFECT

let cards = document.getElementById("projectContent");
let cardContent = cards.getElementsByClassName("project-card");
let cardButtons = cards.getElementsByClassName("view-details-button");

for(let j of cardContent) {
    let btn = document.getElementById(`${j.id}Btn`); 
    j.addEventListener("mouseover", () => {
        btn.style.opacity = "1";
    });
    j.addEventListener("mouseout", () => {
        btn.style.opacity = "0";
    });
}


//! FOR PROJECT PAGE CARDS HEADING HOVER EFFECT 
let spanDiv = cards.getElementsByClassName("project-heading");
for(let k of cardContent) {
    let span = document.getElementById(`${k.id}Span`); 
    console.log(span, "k");
}


