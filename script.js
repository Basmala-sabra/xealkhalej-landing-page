// const menuButton = document.querySelector(".menu-button");
// const navTabs = document.querySelector(".nav-tabs");
// const contactButton = document.querySelector(".phone-button-header");

// menuButton.addEventListener("click", function toggleMenu() {
//   navTabs.classList.toggle("active");
//   if (navTabs.classList.contains('active')) {
//       contactButton.style.marginRight = '30px';
//     } else {
//       contactButton.style.marginRight = '0px';
//     }
// });


// Smooth scrolling for anchor links

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

