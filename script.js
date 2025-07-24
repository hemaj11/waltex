let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 3000);

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

// 🛠️ Close mobile menu when any link is clicked
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-links a");
  const navMenu = document.getElementById("navLinks");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      // Only collapse if in mobile view (when .menu-toggle is visible)
      if (window.innerWidth <= 768) {
        navMenu.classList.remove("active");
      }
    });
  });
});
