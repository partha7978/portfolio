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


var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");
let btn = document.querySelector(".closeBtn");
// When the user clicks the button, open the modal 
setTimeout(() => {
  modal.style.display = "block";
},1000);

// When the user clicks on <span> (x), close the modal
btn.addEventListener("click", () => {
    modal.style.display = "none";
    console.log("onclick working");
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}