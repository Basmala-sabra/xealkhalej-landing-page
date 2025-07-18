const menuButton = document.querySelector(".menu-button");
const navTabs = document.querySelector(".nav-tabs");

menuButton.addEventListener("click", function toggleMenu() {
  navTabs.classList.toggle("active");
});




// Smooth scrolling for anchor links
/*
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach((link) => {
  link.addEventListener("click", function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth",
    });
  });
});
*/
