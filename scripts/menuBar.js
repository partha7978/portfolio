const windowResize = () => {
  if (window.innerWidth <= 700) {
    document.querySelector(".hamburger").classList.add("hamburger-mobile");
    let btn = document.querySelector(".hamburger-mobile");
    btn.addEventListener("click", () => {
      document.querySelector(".nav-bar-smallScreen").style.width = "40%";
    });
  } else {
    document.querySelector(".hamburger").classList.remove("hamburger-mobile");
  }
};


// ! menu bar responsiveness 
const menuBarResponsive = () => {
  if (window.innerWidth <= 450) {
    let btn2 = document.querySelector(".hamburger-mobile");
    btn2.addEventListener("click", () => {
       document.querySelector(".nav-bar-smallScreen").style.width = "65%";
    });

   
  }
};

window.addEventListener("resize", () => {
  // Toggle on resizing the window.
  windowResize();
  menuBarResponsive();
});
//toggle when the websie loads 1st in small screen.
windowResize();
menuBarResponsive();

/* Close when someone clicks on the "x" symbol inside the overlay */
const closeNav = () => {
  document.querySelector(".nav-bar-smallScreen").style.width = "0%";
};



