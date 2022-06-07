let checkbox = document.querySelectorAll(".darkModeCheckbox");

let html = document.getElementsByTagName("HTML")[0];

let firstPage = document.querySelector(".first-page");
let navBarItem = document.querySelectorAll(".menuItem");
let firstPageMainHeading = document.querySelector(".animate__bounce");
let webpageBtn = document.querySelectorAll(".webpage-btn");
let navBarSmallScreen = document.querySelector(".nav-bar-smallScreen");
let themeName = document.querySelector(".themeName");
let menuOpenBtn = document.querySelector(".hamburger");
//second page
let secondPage = document.querySelector(".second-page");
let skillPage = document.querySelector(".skills-div");
let innerSkillPage = document.querySelector(".inner-skills-div");

//project page
let projectPage = document.querySelector(".project-section-div");

//contact page
let contactPage = document.querySelector(".third-page");
let contactInput = document.querySelector(".contact-input-section");
let input = document.querySelectorAll(".inputData");


//darkModeFunction
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
    }
    else {
        themeName.innerText = "Dark Mode";
    }
    menuOpenBtn.classList.toggle('menu-btn-color-dark');
    
    //second page
    secondPage.classList.toggle('darkMode');
    skillPage.classList.toggle('darkMode');
    innerSkillPage.classList.toggle('foreground-darkMode');
    
    //project page
    projectPage.classList.toggle('darkMode');

    //contact page
    contactPage.classList.toggle('darkMode');
    contactInput.classList.toggle('darkMode');
    contactInput.classList.toggle('foreground-darkMode');
    input.forEach(item => {
        item.classList.toggle('dark-mode-inputfields');
    });
}

//darkmode button
checkbox.forEach(check => {

    check.addEventListener("click", (e) => {
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
       
    })
});


