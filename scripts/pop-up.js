// setTimeout(() => {
//     Swal.fire({
//     title: 'This website is under development.',
//     showClass: {
//         popup: 'animate__animated animate__fadeInDown'
//     },
//     hideClass: {
//         popup: 'animate__animated animate__fadeOutDown'
//     }
// })
// },5000);


let modal = document.getElementById("myModal");
let modelContent = modal.querySelector(".modal-content");
let span = document.getElementsByClassName("close");
let btn = document.querySelector(".closeBtn");
// When the user clicks the button, open the modal 
setTimeout(() => {
  modal.style.display = "block";
  modelContent.classList.add("animate__animated", "animate__fadeInDown"); //!   adding fade in animation when it appears
},2000);


btn.addEventListener("click", () => {
  modelContent.classList.add("animate__animated", "animate__fadeOutDown");
  setTimeout(() => {
    modal.style.display = "none";

  },2000);
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modelContent.classList.add("animate__animated", "animate__fadeOutDown");
    setTimeout(() => {
      modal.style.display = "none";
  
    },2000);
  }
}