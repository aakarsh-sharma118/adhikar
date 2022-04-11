const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */

    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

    // owl-crousel for blog

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });

    // click to scroll top

    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    // AOS Instance

    AOS.init();

});

// Navbar

const navBar = document.querySelector(".navbar");
const navCenter = document.querySelector(".nav-center");

window.addEventListener("scroll", function () {
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
menuBtn.onclick = () => {
    navbar2.classList.add("show");
    menuBtn.classList.add("hide");
    body.classList.add("disabled");
}
cancelBtn.onclick = () => {
    body.classList.remove("disabled");
    navbar2.classList.remove("show");
    menuBtn.classList.remove("hide");
}
window.onscroll = () => {
    this.scrollY > 20 ? navbar2.classList.add("sticky") : navbar2.classList.remove("sticky");
}

// Intro

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.to(".text", { y: "0%", duration: 1.2, stagger: 0.5 });
tl.to(".slider", { y: "-100%", duration: 1.8, delay: 0.8 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".card", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

// For colour Change In Intro

var i = 0;
function divchange() {
    var divtag = document.getElementById("intro");
    var bgcolor = ["#0080FF"];
    divtag.style.backgroundColor = bgcolor[i];
    i = (i + 1) % bgcolor.length;
}
setInterval(divchange, 3000);