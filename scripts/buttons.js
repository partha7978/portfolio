let btn = document.querySelector(".discoverMyWork-btn");

btn.addEventListener("mouseover", () => {
    let div = document.querySelector(".arrow-icon");

    let icon = document.createElement("ion-icon");
    icon.classList.add("arrow");
    icon.setAttribute("name", "arrow-forward-outline");
    div.appendChild(icon);
});

btn.addEventListener("mouseout", () => {
    let icon = document.querySelector(".arrow");
    icon.parentNode.removeChild(icon);
});