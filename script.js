const menuButton = document.querySelector(".menu-button");
const navTabs = document.querySelector(".nav-tabs");

menuButton.addEventListener("click", function toggleMenu() {
  navTabs.classList.toggle("active");
});

const contactButtons = document.querySelectorAll(".contact-button");

contactButtons.forEach(function (button) {
  button.addEventListener("click", function preventDefault(e) {
    e.preventDefault();

    const phoneNumber = button.getAttribute("data-number").trim();
    const cleanNumber = phoneNumber.replace(/\s+/g, "");

    // Update the href attribute properly
    button.setAttribute("href", `tel:${cleanNumber}`);
    button.classList.add("active");
  });

  // Programmatically "click" the updated link
  button.click(); // This will trigger the phone call prompt
});

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
