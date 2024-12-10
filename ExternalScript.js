// Get all radio buttons
const paymentMethods = document.querySelectorAll('input[name="payment-method"]');
        
// Function to handle the change in selected method
paymentMethods.forEach((method) => {
    method.addEventListener('change', function () {
        const gcashDetails = document.querySelector('.gcash-details');
        const creditDebitForm = document.querySelector('.credit-debit-form');

        // Show the relevant details based on selected option
        if (document.getElementById('gcash').checked) {
            gcashDetails.style.display = 'block';
            creditDebitForm.style.display = 'none';
        } else if (document.getElementById('credit-debit').checked) {
            gcashDetails.style.display = 'none';
            creditDebitForm.style.display = 'block';
        }
    });
});



// Dynamic Header script 
const header = document.getElementById('header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    // Scrolling down effect para lumiit
    header.classList.add('small');
  } else if (window.scrollY < lastScrollY) {
    // Scrolling up effect para big 
    header.classList.remove('small');
  }
  lastScrollY = window.scrollY;
});

// Detect mouse near 
document.addEventListener('mousemove', (e) => {
  if (e.clientY < 100) {
    header.classList.remove('small');
  }
});



// Get elements
const submitBtn = document.getElementById('submitBtn');
const popupModal = document.getElementById('popupModal');
const closePopupBtn = document.getElementById('closePopupBtn');

// Show the pop-up when "Submit" is clicked
submitBtn.addEventListener('click', () => {
    popupModal.style.display = 'flex'; // Show the modal
});

// Close the pop-up when "Done" is clicked
closePopupBtn.addEventListener('click', () => {
    popupModal.style.display = 'none'; // Hide the modal
});

// Close the pop-up when clicking outside the content
window.addEventListener('click', (event) => {
    if (event.target === popupModal) {
        popupModal.style.display = 'none';
    }
});

// Function to show the pop-up
function showPopup(event) {
  event.preventDefault(); // Prevent form submission
  document.getElementById('popup').classList.remove('hidden');
  document.getElementById('contactForm').reset();
}

// Function to hide the pop-up
function hidePopup() {
  document.getElementById('popup').classList.add('hidden');
}