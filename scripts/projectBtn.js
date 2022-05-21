//! Here I'll do, if someone will click the new project and old project button,
//! I'll change the content of the project section.

const p_Btn_Parent = document.querySelector(".project-btns");
const p_Btn = document.querySelectorAll(".project-btn");
const project_Image = document.querySelectorAll(".project-img-overlay");


p_Btn_Parent.addEventListener("click", (e) => {
    const clicked_Btn = e.target;
    
    p_Btn.forEach((currentBtn) => {
        currentBtn.classList.remove("project-btn-active");
    });
    clicked_Btn.classList.add("project-btn-active");
    p_Btn_Parent.classList.remove("project-btn-active");
    
    //todo: To remove class from parent element so that it will not add shadow to the parent element because in that class I've added the shadow.


    //todo: To find the number inside the data attribute of button element.
    const btn_num = clicked_Btn.dataset.btnNum;
    //data-btn-num="1" is the attribute here, So I use dataset to find the data attribute then I dont need to write data-btn-num--  Just add btnNum and removed all the highpins. Then it will give the value which I gave.

    
    //todo: to findout which image is active 
    const image_active = document.querySelectorAll(`.project-btn--${btn_num}`);
    // console.log(image_active);
    //project-btn--1 : this is the class name and i have to find out weather that number is matching or not.



    //? Here I'm hiding all the project images then I'll only show the image only according to the button clicked.  
    project_Image.forEach((currentImage) => {
        currentImage.classList.add("project-image-not-active");
    }); 
    image_active.forEach((showImage) => {
        showImage.classList.remove("project-image-not-active");
        showImage.classList.remove("animate__animated", "animate__fadeIn");
        showImage.classList.add("animate__animated", "animate__fadeIn");
        setTimeout(() => {
            showImage.classList.remove("animate__animated", "animate__fadeIn");
        },500);
    });

    //todo: If the user click on outside of the button container then it will show all the project cards.
    // console.log(clicked_Btn.classList[0]);
    if(!(clicked_Btn.classList[0] === "project-btn")) {
        console.log("Working");
        project_Image.forEach((allImage) => {
            allImage.classList.add("project-image-not-active");
            allImage.classList.remove("project-image-not-active");
            allImage.classList.remove("animate__animated", "animate__fadeIn");
            allImage.classList.add("animate__animated", "animate__fadeIn");
            setTimeout(() => {
                allImage.classList.remove("animate__animated", "animate__fadeIn");
            },500);
        })
    }
});