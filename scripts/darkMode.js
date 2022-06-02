let checkbox = document.querySelector(".darkModeCheckbox");

let html = document.querySelector(".first-page");
let navBarItem = document.querySelectorAll(".menuItem");
let firstPageMainHeading = document.querySelector(".animate__bounce");
let webpageBtn = document.querySelectorAll(".webpage-btn");

//second page
let secondPage = document.querySelector(".second-page");
let skillPage = document.querySelector(".skills-div");
let innerSkillPage = document.querySelector(".inner-skills-div");

//project page
let projectPage = document.querySelector(".project-section-div");

//darkModeFunction
const darkMode = () => {
    html.classList.toggle('darkMode');
    navBarItem.forEach(item => {
        item.classList.toggle('dark-mode-text');
        item.classList.toggle('navBarColor');
    });
    firstPageMainHeading.classList.toggle('dark-mode-text');
    webpageBtn.forEach(item => {
        item.classList.toggle('dark-mode-btn');
    });

    //second page
    secondPage.classList.toggle('darkMode');
    skillPage.classList.toggle('darkMode');
    innerSkillPage.classList.toggle('foreground-darkMode');

    //project page
    projectPage.classList.toggle('darkMode');
}

//darkmode button
checkbox.addEventListener("click", (e) => {
    if(checkbox.classList.contains('on')) {
        checkbox.setAttribute('aria-checked', 'false');
        console.log('darkmode off');
    }
    else
    {
        //!Dark mode ON part
        checkbox.setAttribute('aria-checked', 'true');
        console.log('darkmode on');
    }
    checkbox.classList.toggle('on');
    darkMode();
   
})