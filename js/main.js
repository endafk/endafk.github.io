// ====== JavaScript for Portfolio ======

// Navigation toggle
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Auto-hide nav after clicking (on mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('active');
  });
});

// Typing effect for text
document.addEventListener('DOMContentLoaded', () => {
  const text = "Web Application Penetration Tester | Offensive Security Specialist";
  const typingElement = document.getElementById('typing-effect');
  let index = 0;

  function typeCharacter() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeCharacter, 100); // Adjust typing speed (100ms per character)
    }
  }

  typeCharacter();
});