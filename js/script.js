// Scroll Animation

ScrollReveal().reveal('.section', {
    distance: '40px',
    duration: 1000,
    origin: 'bottom',
    interval: 200
});

/* Typed */

new Typed("#typing", {
    strings: [
        "Product Engineer",
        "Full Stack Engineer",
        "MERN Stack Developer",
        "Backend Specialist",
        "API and Microservices Developer",
        "Turning Ideas into Code",
        "Scalable Web App Builder"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
})

// BACKGROUND
/* PARTICLES */

particlesJS("particles-js", {
    particles: {
        number: { value: 60 },
        size: { value: 3 },
        move: { speed: 1 },
        line_linked: { enable: true }
    }
})

// PROJECT SLIDER

// PROJECT SLIDER

const slider = document.querySelector(".projects");
const cards = document.querySelectorAll(".project");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;
const visibleCards = 3; // how many cards visible
const totalCards = cards.length;

next.addEventListener("click", () => {

    if (index < totalCards - visibleCards) {
        index++;
    }

    slider.style.transform = `translateX(-${index * (100 / visibleCards)}%)`;

});

prev.addEventListener("click", () => {

    if (index > 0) {
        index--;
    }

    slider.style.transform = `translateX(-${index * (100 / visibleCards)}%)`;

});

// BACK TO TOP

const btn = document.getElementById("topBtn");

btn.onclick = function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}