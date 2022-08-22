let btn = document.querySelector('.backBtn');
let icon = document.querySelector(".back-arrow");
let goBackText = document.querySelector(".goBack-text");

let quickLink = document.querySelectorAll(".project-quick-link");

//! For go back button animation
btn.addEventListener('mouseover', () => {
    icon.style.transition = "all 1s ease-in";
    icon.style.display = 'block';
    goBackText.style.transition = "all 0.1s ease-in";
    goBackText.style.transform = 'translateX(5px)';
})
btn.addEventListener('mouseout', () => {
    goBackText.style.transform = 'translateX(-5px)';
    icon.style.display = 'none';
})

//! for quick link animation
quickLink.forEach(link => {
    let i= link.querySelector(".fa-chevron-right");
    link.addEventListener('mouseover', () => {
        
        i.style.transition = "all 0.3s ease-in";
        i.style.transform = 'rotate(360deg)';
    })
    link.addEventListener('mouseout', () => {
        i.style.transform = 'rotate(0deg)';
    })

})