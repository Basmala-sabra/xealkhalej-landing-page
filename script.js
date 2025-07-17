const menuButton = document.querySelector(".menu-button");
const navTabs = document.querySelector(".nav-tabs");

menuButton.addEventListener("click", function toggleMenu(){
 navTabs.classList.toggle('active');
})




const contactButton = document.querySelectorAll(".contact-button");

  contactButton.forEach(function (button){

  button.addEventListener("click", function dialCompany(){
  
    button.removeAttribute("href");
    const phoneNumber = button.textContent.trim();
    button.href = `tel:${phoneNumber.replace(/\s+/g, "")}`;
    button.classList.add("active");
  })
})

// Smooth scrolling for anchor links

const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(link => {
link.addEventListener("click", function smoothScroll (e){ 
e.preventDefault()
const targetId = this.getAttribute('href');    
const targetSection = document.querySelector(targetId);          

  window.scrollTo({
    top: targetSection.offsetTop,
    behavior: "smooth",
  });

});
});




    
        
        
        
  






       
  

