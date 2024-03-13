/*Levi Coc
Script
*/
//Select all buttons within elements having the class 'card-button'
const buttons = document.querySelectorAll('.card-buttons button');
// Select all sections sections within elements having the class 
const sections = document.querySelectorAll('.card-section');
//Select the elements eith the class 'card'
const card = document.querySelector('.card');

//Define a function to handle button clicks
const handleButtonClick = (e) => { 
  //Get the value of the 'data-sections' attribute from the clicked button 
  const targetSection = e.target.getAttribute("data-section")
  //Select the section correstponding to the target section
  const section = document.querySelector(targetSection);
  // Check if the target section is not '#about'cons
  targetSection !== "#about" 
    ? card.classList.add("is-active")
    : card.classList.remove("is-active");
    // Set the 'data-state' attribute of the card to the target section
  card.setAttribute("data-state", targetSection);

  sections.forEach((s) => s.classList.remove("is-active"));
  buttons.forEach((b) => b.classList.remove("is-active"));

  e.target.classList.add("is-active");
  section.classList.add("is-active");
}
// Add event listener to each button to call the handleButtonClick function when clicked
buttons.forEach((btn) => { 
  btn.addEventListener('click', handleButtonClick);
})
document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('.contact-me');
  button.addEventListener('click', function() {
      const recipientEmail = "levicoc35@gmail.com";
      // Replace Your Subject
      const subject = "Your Subject";
      // Replace Your Message
      const body = "Your Message";
      
      // Generate the mailto link
      const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Open the mailto link in a new tab/window
      window.open(mailtoLink, '_blank');
  });
});