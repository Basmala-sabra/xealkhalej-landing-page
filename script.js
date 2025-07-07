const contactButton = document.querySelector(".phone-button-header");
console.log(contactButton);
const whatsappContact = document.querySelector(".whatsapp");
const whatsappNumber = "+966507681272";

contactButton.addEventListener("click", function dialCompany() {
  contactButton.removeAttribute(
    "href"
  ); 
  const phoneNumber = contactButton.textContent.trim(); 
  contactButton.href = `tel:${phoneNumber.replace(
    /\s+/g,
    ""
  )}`;
  contactButton.classList.add(
    "active"
  ); 
  console.log("BRAVOOOOOOOOOOO");
});

whatsappContact.addEventListener("click", function whatsappCompany() {
  const defaultMessage = "مرحبا، أنا مهتمة بتفاصيل أكثر.";
  const encodeMessage =
    encodeURIComponent(defaultMessage); 
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeMessage}`;
  window.open(whatsappUrl, "_blank");
});
