gsap.registerPlugin(ScrollTrigger);

// Menu Toggle
const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.nav-overlay');
hamburger.addEventListener('click', () => overlay.classList.toggle('active'));

// GSAP Fade-in
gsap.utils.toArray(".fade-in").forEach((el) => {
    gsap.fromTo(el, { opacity: 0, y: 50 }, { 
        opacity: 1, y: 0, duration: 1.5, ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 80%" }
    });
});

// Sticky Navbar
window.addEventListener('scroll', () => {
    document.querySelector('.navbar').style.background = window.scrollY > 50 ? 'rgba(0,0,0,0.9)' : 'transparent';
});

