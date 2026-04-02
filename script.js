/* =========================
   TYPING EFFECT
========================= */
const roles = [
  "Java Backend Developer",
  "Spring Boot Learner",
  "Backend Project Builder",
  "Enterprise Java Focused Developer"
];

const typingElement = document.getElementById("typing-text");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = roles[roleIndex];

  if (!isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 45 : 85);
}

typeEffect();

/* =========================
   NAVBAR SCROLL EFFECT
========================= */
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* =========================
   MOBILE MENU
========================= */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navLinkItems = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

navLinkItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

/* =========================
   ACTIVE NAV LINK
========================= */
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 140;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinkItems.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

/* =========================
   SCROLL PROGRESS BAR
========================= */
const scrollProgress = document.getElementById("scrollProgress");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = `${progress}%`;
});

/* =========================
   REVEAL ANIMATION
========================= */
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.14 }
);

revealElements.forEach(element => {
  revealObserver.observe(element);
});

/* =========================
   WHATSAPP FORM
========================= */
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  const whatsappNumber = "917871630119"; // change if needed

  const finalMessage =
`Hello, I visited your portfolio.

Name: ${name}
Phone: ${phone}
Email: ${email}
Subject: ${subject}
Message: ${message}`;

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(finalMessage)}`;
  window.open(whatsappURL, "_blank");
});

/* =========================
   THEME SWITCHER
========================= */
const themeToggle = document.getElementById("themeToggle");
const themePanel = document.getElementById("themePanel");
const themeDots = document.querySelectorAll("[data-theme]");

themeToggle.addEventListener("click", () => {
  themePanel.classList.toggle("show");
});

themeDots.forEach(dot => {
  dot.addEventListener("click", () => {
    const theme = dot.getAttribute("data-theme");
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  });
});

document.addEventListener("click", (event) => {
  const clickedInsidePanel = themePanel.contains(event.target);
  const clickedToggle = themeToggle.contains(event.target);

  if (!clickedInsidePanel && !clickedToggle) {
    themePanel.classList.remove("show");
  }
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.body.className = savedTheme;
}

/* =========================
   PARTICLES
========================= */
const particlesContainer = document.getElementById("particles");

function createParticles() {
  if (!particlesContainer) return;

  const particleCount = 18;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("span");
    particle.classList.add("particle");

    const size = Math.random() * 4 + 2;
    const left = Math.random() * 100;
    const duration = Math.random() * 12 + 14;
    const delay = Math.random() * 8;
    const opacity = Math.random() * 0.18 + 0.08;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${left}%`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.opacity = opacity.toString();

    particlesContainer.appendChild(particle);
  }
}

createParticles();