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
let cardOne = document.querySelector(".first-content");
let cardTwo = document.querySelector(".second-content");
let cardThree = document.querySelector(".third-content");
let animation = document.querySelector(".card-text");
let animation2 = document.querySelector(".card-text-2");
let animation3 = document.querySelector(".card-text-3");


//! education card hover text effect.
cardOne.addEventListener("mouseover", () => { //?for card 1
    document.querySelector(".card-text").style.opacity = "1";
    animation.classList.add("text-animation");
});
cardOne.addEventListener("mouseout", () => { //?for card 1
    document.querySelector(".card-text").style.opacity = "0";
    animation.classList.remove("text-animation");
});


cardTwo.addEventListener("mouseover", () => { //?for card 2
    document.querySelector(".card-text-2").style.opacity = "1";
    animation2.classList.add("text-animation");
});
cardTwo.addEventListener("mouseout", () => { //?for card 2
    document.querySelector(".card-text-2").style.opacity = "0";
     animation2.classList.remove("text-animation");
});

cardThree.addEventListener("mouseover", () => { //?for card 3
    document.querySelector(".card-text-3").style.opacity = "1";
    animation3.classList.add("text-animation");
});
cardThree.addEventListener("mouseout", () => { //?for card 3
    document.querySelector(".card-text-3").style.opacity = "0";
    animation3.classList.remove("text-animation");
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


