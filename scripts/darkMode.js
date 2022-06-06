let checkbox = document.querySelector(".darkModeCheckbox");

let html = document.getElementsByTagName("HTML")[0];

let firstPage = document.querySelector(".first-page");
let navBarItem = document.querySelectorAll(".menuItem");
let firstPageMainHeading = document.querySelector(".animate__bounce");
let webpageBtn = document.querySelectorAll(".webpage-btn");

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

    //contact page
    contactPage.classList.toggle('darkMode');
    contactInput.classList.toggle('darkMode');
    contactInput.classList.toggle('foreground-darkMode');
    input.forEach(item => {
        item.classList.toggle('dark-mode-inputfields');
    });
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