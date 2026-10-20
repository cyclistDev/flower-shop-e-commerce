// Forms module - handles form validation and submission
export function initForms() {
  // Contact form validation
  const contactForm = document.querySelector('form[action="#"]');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactSubmit);
  }

  // Payment form validation
  const paymentForm = document.querySelector('#payment-form');
  if (paymentForm) {
    paymentForm.addEventListener('submit', handlePaymentSubmit);
  }
}

async function handleContactSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  // Validate
  if (!validateContactForm(data)) {
    return;
  }

  // Submit to API (when backend is ready)
  try {
    // Uncomment when API is ready:
    // await api.post('/contact', data);
    console.log('Contact form submitted:', data);
    alert('Message sent successfully!');
    e.target.reset();
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('Failed to send message. Please try again.');
  }
}

async function handlePaymentSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  // Validate
  if (!validatePaymentForm(data)) {
    return;
  }

  // Process payment (when backend is ready)
  try {
    console.log('Payment form submitted:', data);
    alert('Payment processing...');
    // Redirect to success page
    window.location.href = '/src/pages/PaymentSuccess.html';
  } catch (error) {
    console.error('Error processing payment:', error);
    alert('Payment failed. Please try again.');
  }
}

function validateContactForm(data) {
  if (!data.name || data.name.length < 2) {
    alert('Please enter a valid name');
    return false;
  }
  if (!data.email || !isValidEmail(data.email)) {
    alert('Please enter a valid email');
    return false;
  }
  if (!data.message || data.message.length < 10) {
    alert('Please enter a message (at least 10 characters)');
    return false;
  }
  return true;
}

function validatePaymentForm(data) {
  if (!data.name || data.name.length < 2) {
    alert('Please enter a valid name');
    return false;
  }
  if (!data.email || !isValidEmail(data.email)) {
    alert('Please enter a valid email');
    return false;
  }
  if (!data['Card Number'] || data['Card Number'].length < 16) {
    alert('Please enter a valid card number');
    return false;
  }
  if (!data.CVV || data.CVV.length < 3) {
    alert('Please enter a valid CVV');
    return false;
  }
  return true;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
