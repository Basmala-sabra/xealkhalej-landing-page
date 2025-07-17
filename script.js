const menuButton = document.querySelector(".menu-button");
const tabsMenu = document.querySelector(".tabs");

menuButton.addEventListener("click", function toggleMenu() {
tabsMenu.classList.toggle('active');
})







const contactButton = document.querySelector(".phone-button-header");

contactButton.addEventListener("click", function dialCompany() {
  contactButton.removeAttribute("href");
  const phoneNumber = contactButton.textContent.trim();
  contactButton.href = `tel:${phoneNumber.replace(/\s+/g, "")}`;
  contactButton.classList.add("active");
});

const mainContactButton = document.querySelector(".phone");

mainContactButton.addEventListener("click", function dialCompany() {
  mainContactButton.removeAttribute("href");
  const phoneNumber = mainContactButton.textContent.trim();
  mainContactButton.href = `tel:${phoneNumber.replace(/\s+/g, "")}`;
  mainContactButton.classList.add("active");
});




// Smooth scrolling for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});



       
  

