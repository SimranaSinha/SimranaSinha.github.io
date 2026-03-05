// script.js

document.addEventListener("DOMContentLoaded", () => {
  // 1) Mobile nav toggle
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      const clickedInside =
        navLinks.contains(e.target) || navToggle.contains(e.target);

      if (!clickedInside) {
        navLinks.classList.remove("open");
      }
    });
  }

  // 2) Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
