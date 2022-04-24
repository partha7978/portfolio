/* Open when someone clicks on the span element */

// let menu = document.getElementById("menu-ul");
// let menuBtn = document.getElementsByClassName("hamburger")[0];

// menuBtn.addEventListener("click", () =>  {
//     if(menu.className === "menu-ul") {
//         menu.className += " responsive";
//     } else {
//         menu.className = "menu-ul";
//     }
// });

const windowResize = () => {
  if (window.innerWidth <= 700) {
    document.querySelector(".hamburger").classList.add("hamburger-mobile");
    let btn = document.querySelector(".hamburger-mobile");
    btn.addEventListener("click", () => {
      document.querySelector(".nav-bar-smallScreen").style.width = "100%";
    });
  } else {
    document.querySelector(".hamburger").classList.remove("hamburger-mobile");
  }
};

window.addEventListener("resize", () => {
  // Toggle on resizing the window.
  windowResize();
});
//toggle when the websie loads 1st in small screen.
windowResize();

/* Close when someone clicks on the "x" symbol inside the overlay */
const closeNav = () => {
  document.querySelector(".nav-bar-smallScreen").style.width = "0%";
};
