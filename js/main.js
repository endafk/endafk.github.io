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
  const text = "Web Application Penetration Tester & Offensive Security Specialist";
  const typingElement = document.getElementById('typing-effect');
  let index = 0;
  
  async function typeWithPause() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      
      // Add random delay between characters for realistic typing
      const delay = Math.random() * 50 + 30;
      await new Promise(resolve => setTimeout(resolve, delay));
      
      // Add longer pause at punctuation marks
      if ([',', '.', '&'].includes(text.charAt(index - 1))) {
        await new Promise(resolve => setTimeout(resolve, 400));
      }
      
      typeWithPause();
    }
  }
  
  typeWithPause();
});

// Intersection Observer for reveal animations
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px'
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  observer.observe(section);
});

// Add floating animation delays to contact cards
document.querySelectorAll('.contact-card').forEach((card, index) => {
  card.style.setProperty('--card-index', index);
});