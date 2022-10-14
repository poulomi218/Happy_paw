const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links1001");
const links = document.querySelectorAll(".nav-links1001 li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});