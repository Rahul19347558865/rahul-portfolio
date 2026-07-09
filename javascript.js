
/* ==========================
   TYPING EFFECT
========================== */

const roles = [
    "Full Stack Developer",
    "Web Developer",
    "Frontend Developer",
    "Problem Solver",
    "Digital Marketing Enthusiast"
];

const typingElement = document.getElementById("typing");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}

typeEffect();

/* ==========================
   ACTIVE NAVBAR
========================== */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
            &&
            pageYOffset <
            sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {
            link.classList.add("active");
        }

    });

});

/* ==========================
   SCROLL REVEAL
========================== */

const revealElements =
    document.querySelectorAll(
        ".section, .project-card, .service-card, .skill-card"
    );

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight =
            window.innerHeight;

        const revealTop =
            element.getBoundingClientRect().top;

        const revealPoint = 100;

        if (
            revealTop <
            windowHeight - revealPoint
        ) {

            element.classList.add("show");

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

/* ==========================
   HEADER SHADOW
========================== */

const header =
    document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.25)";

    } else {

        header.style.boxShadow = "none";

    }

});

/* ==========================
   FUTURE PROJECT FILTER
========================== */

function filterProjects(category) {

    console.log(
        "Future Project Filter:",
        category
    );

}

/* ==========================
   CONSOLE MESSAGE
========================== */

console.log(
    "%cWelcome to Rahul's Portfolio",
    "color:#38bdf8;font-size:20px;font-weight:bold;"
);

console.log(
    "Built with HTML, CSS & JavaScript"
);

