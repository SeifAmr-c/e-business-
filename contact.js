const contactForm = document.getElementById('contactForm');

function sendMessage(e) {
  e.preventDefault();
  const successMessage = document.getElementById('success-message');
  successMessage.classList.remove('hidden');
}

contactForm.addEventListener('submit', sendMessage);