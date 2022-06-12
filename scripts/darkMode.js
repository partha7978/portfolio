let checkbox = document.querySelectorAll(".darkModeCheckbox");

let html = document.getElementsByTagName("HTML")[0];

let firstPage = document.querySelector(".first-page");
let navBarLogo = document.querySelector(".navbar-logo");
let navBarItem = document.querySelectorAll(".menuItem");
let firstPageMainHeading = document.querySelector(".animate__bounce");
let webpageBtn = document.querySelectorAll(".webpage-btn");
let navBarSmallScreen = document.querySelector(".nav-bar-smallScreen");
let themeName = document.querySelector(".themeName");
let menuOpenBtn = document.querySelector(".hamburger");
//todo second page
let secondPage = document.querySelector(".second-page");
let skillPage = document.querySelector(".skills-div");
let innerSkillPage = document.querySelector(".inner-skills-div");

//todo project page
let projectPage = document.querySelector(".project-section-div");

//todo contact page
let contactPage = document.querySelector(".third-page");
let contactInput = document.querySelector(".contact-input-section");
let input = document.querySelectorAll(".inputData");
let submitBtn = document.querySelector(".submitBtn");
let resetBtn = document.querySelector(".resetBtn");

//todo footer page
let footer = document.querySelector(".footer-section");
let addressSection = document.querySelector(".address");
let allFooterText = document.querySelectorAll(".textColor");

//todo popup page
let popup = document.querySelector(".modal-content");
let popupBtn = document.querySelector(".closeBtn");

//todo darkModeFunction
const darkMode = () => {
    html.classList.toggle("darkMode");
    firstPage.classList.toggle('darkMode');
    navBarItem.forEach(item => {
        item.classList.toggle('dark-mode-text');
        item.classList.toggle('navBarColor');
    });
    navBarSmallScreen.classList.toggle('foreground-darkMode-navBarSmall');
    firstPageMainHeading.classList.toggle('dark-mode-text');
    webpageBtn.forEach(item => {
        item.classList.toggle('dark-mode-btn');
    });
    if(themeName.innerText === "Dark Mode") {
        themeName.innerText = "Light Mode";
        navBarLogo.src = "./images/logo2Dark.png";
    }
    else {
        themeName.innerText = "Dark Mode";
        navBarLogo.src = "./images/logo2.png";
    }
    menuOpenBtn.classList.toggle('menu-btn-color-dark');

    //todo second page
    secondPage.classList.toggle('darkMode');
    skillPage.classList.toggle('darkMode');
    innerSkillPage.classList.toggle('foreground-darkMode');
    
    //todo project page
    projectPage.classList.toggle('darkMode');
   
    //todo contact page
    contactPage.classList.toggle('darkMode');
    contactInput.classList.toggle('darkMode');
    contactInput.classList.toggle('foreground-darkMode');
    input.forEach(item => {
        item.classList.toggle('dark-mode-inputfields');
    });
    submitBtn.classList.toggle('dark-mode-btn-contact');
    resetBtn.classList.toggle('dark-mode-btn-contact');

    //todo footer page
    footer.classList.toggle('darkMode');
    addressSection.classList.toggle('darkMode');
    allFooterText.forEach(item => {
        item.classList.toggle('dark-mode-text');
    })

    //todo popup page
    popup.classList.toggle('darkMode');
    popupBtn.classList.toggle('dark-mode-btn');

}


const darkModeBtn = (check) => {
    if(check.classList.contains('on')) {
        check.setAttribute('aria-checked', 'false');
        console.log('darkmode off');
    }
    else
    {
        //!Dark mode ON part
        check.setAttribute('aria-checked', 'true');
        console.log('darkmode on');
    }
    check.classList.toggle('on');
    darkMode();
}
//todo darkmode button
checkbox.forEach(check => {
    check.addEventListener("click", (e) => {  
       darkModeBtn(check);
    })
});


//todo for system theme detection and set the theme according to that STARTS
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    // window.location.reload(); //for reloding
    darkMode();
    checkbox.forEach(check => {
        darkModeBtn(check);
    });
    console.log("dark mode detected"); // dark mode
} else {
    console.log("light mode detected"); // light mode
}
//todo for system theme detection and set the theme according to that ENDS
  