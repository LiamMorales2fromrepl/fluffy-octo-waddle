// Initialize EmailJS with your Public Key (replace with your actual key)
emailjs.init("3CD0IBkiv7B0iso0M");

// Signup form email sending
const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const fullName = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim();

  if (!fullName || !email) {
    alert('Please fill in all required fields.');
    return;
  }

  const templateParams = {
    to_name: fullName,
    to_email: email,
  };

  emailjs.send('service_c2238fb', 'template_iw7zc99', templateParams)
    .then(() => {
      alert('Signup successful! Confirmation email sent.');
      signupForm.reset();
    })
    .catch((error) => {
      alert('Oops, something went wrong. Please try again later.');
      console.error('EmailJS error:', error);
    });
});
