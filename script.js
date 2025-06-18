// Simple contact form handler (demo only)
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // Fake sending - in real deployment, integrate with email service or backend
  document.getElementById('formMsg').textContent = "Thank you for reaching out! I'll get back to you soon.";
  this.reset();
});