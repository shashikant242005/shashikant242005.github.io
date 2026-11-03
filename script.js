// Mobile Navigation

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Automatic Footer Year

document.getElementById("year").textContent =
    new Date().getFullYear();

// Typing Animation

const words = [
    "Tech Enthusiast",
    "Aspiring Developer",
    "AI Explorer",
    "Future Innovator"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (deleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }

    typingElement.textContent =
        currentWord.substring(0, characterIndex);

    let delay = deleting ? 55 : 100;

    if (!deleting && characterIndex === currentWord.length) {
        deleting = true;
        delay = 1200;
    }

    if (deleting && characterIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 400;
    }

    setTimeout(typeEffect, delay);
}

typeEffect();
