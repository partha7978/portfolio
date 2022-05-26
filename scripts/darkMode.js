let checkbox = document.querySelector(".darkModeCheckbox");

let html = document.getElementsByTagName("html");
//darkModeFunction


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
   
})