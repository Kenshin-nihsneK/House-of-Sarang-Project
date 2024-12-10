// Validate password function
function validatePassword() {
    const passwordInput = document.getElementById("password").value;
  
    // Example validation (replace with your actual password logic)
    const validPassword = "admin123";
  
    if (passwordInput === validPassword) {
      alert("Access granted");
      // Redirect or take appropriate actions here
      window.location.href = "/dashboard";
    } else {
      alert("Invalid password, try again!");
    }
  }

  
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


// Example placeholder for additional functionality (expand or replace as needed)

// Donations data
const donations = [
    "Donation from John - $100",
    "Donation from Mary - $200",
    "Donation from Alice - $150",
  ];
  
  // User inquiries data
  const inquiries = [
    "Inquiry: How to donate?",
    "Inquiry: Request for assistance",
    "Inquiry: Partnership proposal",
  ];
  
  // Dynamically populate donations and inquiries
  document.addEventListener("DOMContentLoaded", () => {
    const donationList = document.querySelector(".donation-list");
    const inquiryList = document.querySelector(".inquiry-list");
  
    // Populate donations
    donations.forEach((donation) => {
      const donationItem = document.createElement("div");
      donationItem.className = "donation-item";
      donationItem.textContent = donation;
      donationList.appendChild(donationItem);
    });
  
    // Populate inquiries
    inquiries.forEach((inquiry) => {
      const inquiryItem = document.createElement("div");
      inquiryItem.className = "inquiry-item";
      inquiryItem.textContent = inquiry;
      inquiryList.appendChild(inquiryItem);
    });
  });
  