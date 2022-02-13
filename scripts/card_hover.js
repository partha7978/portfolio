let allContent = document.getElementById("allIcons");
let allButtons = allContent.getElementsByTagName("button");
let allIcons = allContent.getElementsByTagName("img");




//? Skills page img hover text effect
for(let i of allIcons){
    let text = document.getElementById(`${i.id}Span`);
    console.log(text);
    i.addEventListener("mouseover", () => {
        text.style.opacity = "1"
    })
    i.addEventListener("mouseout", () => {
        text.style.opacity = "0"
    })
}
