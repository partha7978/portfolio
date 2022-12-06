let handleOnScroll = () => {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;  /* or you can also use  document.getElementsByTagName('html')[0].scrollTop; */
    if (scrollTop > 40) {
        document.querySelector(".scroll-to-top").style.display = "block";
    } else {
        document.querySelector(".scroll-to-top").style.display = "none";
    }
};

window.addEventListener("scroll", handleOnScroll);
document.getElementById("scroll-to-top-btn").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
