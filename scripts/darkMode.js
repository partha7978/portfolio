let checkbox = document.querySelector(".darkModeCheckbox");

let html = document.querySelector(".first-page");
let navBarItem = document.querySelectorAll(".menuItem");
//darkModeFunction
const darkMode = () => {
    html.classList.toggle('darkMode');
    navBarItem.forEach(item => {
        item.classList.toggle('darkMode');
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