// Navbar

const navBar = document.querySelector(".navbar");
const navCenter = document.querySelector(".nav-center");

window.addEventListener("scroll", function() {
    var top = this.pageYOffset;
    if (top > 30) {
        navBar.classList.add("fixed");
        navCenter.classList.add("fixed");
    } else {
        navBar.classList.remove("fixed");
        navCenter.classList.remove("fixed");
    }
});

// Navbar2

const body = document.querySelector("body");
    const navbar2 = document.querySelector(".navbar2");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    menuBtn.onclick = ()=>{
      navbar2.classList.add("show");
      menuBtn.classList.add("hide");
      body.classList.add("disabled");
    }
    cancelBtn.onclick = ()=>{
      body.classList.remove("disabled");
      navbar2.classList.remove("show");
      menuBtn.classList.remove("hide");
    }
    window.onscroll = ()=>{
      this.scrollY > 20 ? navbar2.classList.add("sticky") : navbar2.classList.remove("sticky");
    }
    