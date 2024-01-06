// Get the navbar element
const navbar = document.querySelector('.header');

// Get the initial offset position of the navbar
const offsetTop = navbar.offsetTop;

// Function to update the navbar position
function updateNavbarPosition() {
  if (window.pageYOffset >= offsetTop) {
    // Add the "fixed-navbar" class when scrolled past the initial position
    navbar.classList.add('fixed-navbar');
  } else {
    // Remove the "fixed-navbar" class when scrolled back to the initial position
    navbar.classList.remove('fixed-navbar');
  }
}

// Add an event listener to the "scroll" event
window.addEventListener('scroll', updateNavbarPosition);