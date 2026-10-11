// UPDATE COPYRIGHT YEAR
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// HIGHLIGHT THE ACTIVE NAVIGATION LINK
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar nav a");

function updateNavigation() {
    let currentSection = "home";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.id;
        }
    });

    navLinks.forEach((link) => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${currentSection}`
        );
    });
}

window.addEventListener("scroll", updateNavigation);
updateNavigation();

// SMOOTH SCROLL FOR NAVIGATION
navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// CONTACT FORM
const messageForm = document.getElementById("messageForm");

if (messageForm) {
    messageForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // Replace with your actual email address.
        const recipient = "your-email@example.com";

        const body =
            `Name: ${name}\n` +
            `Email: ${email}\n\n` +
            `Message:\n${message}`;

        const mailto =
            `mailto:${recipient}` +
            `?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`;

        window.location.href = mailto;
    });
}

// ENSURE THE HERO VIDEO PLAYS WHEN POSSIBLE
const heroVideo = document.querySelector(".hero-video");

if (heroVideo) {
    heroVideo.muted = true;

    const playVideo = () => {
        const playPromise = heroVideo.play();

        if (playPromise !== undefined) {
            playPromise.catch(() => {
                // Some browsers may block autoplay.
                // The video can still be played by the user.
            });
        }
    };

    if (heroVideo.readyState >= 2) {
        playVideo();
    } else {
        heroVideo.addEventListener("loadeddata", playVideo, {
            once: true
        });
    }
}