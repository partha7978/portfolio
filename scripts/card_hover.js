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