// Mobile Navigation
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// Aktiven Menüpunkt markieren
const currentPage = decodeURIComponent(window.location.pathname.split("/").pop()) || "index.html";
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(link => {
  const linkPage = decodeURIComponent(link.getAttribute("href"));

  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});

// Aktuelles Jahr im Footer
const jahr = document.getElementById("jahr");

if (jahr) {
  jahr.textContent = new Date().getFullYear();
}

// Nach-oben-Button
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (!topBtn) return;

  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

if (topBtn) {
  topBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// Bild-Popup
const clickableImages = document.querySelectorAll(".clickable-img");

clickableImages.forEach(image => {
  image.addEventListener("click", () => {
    const modal = document.createElement("div");
    modal.classList.add("image-modal");

    modal.innerHTML = `
      <span>&times;</span>
      <img src="${image.src}" alt="${image.alt}">
    `;

    document.body.appendChild(modal);

    modal.addEventListener("click", () => {
      modal.remove();
    });
  });
});

// Scroll-Animationen
const revealElements = document.querySelectorAll(".card, .topic-card, .skill-card, .project-card, .timeline-entry");

revealElements.forEach(element => {
  element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.15
});

revealElements.forEach(element => {
  revealObserver.observe(element);
});