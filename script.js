// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scroll({
        top: targetSection.offsetTop - 50,
        behavior: 'smooth'
      });
    }
  });
});

// Dynamic Skills Section
const skills = [
  { name: 'HTML', level: 'Advanced' },
  { name: 'CSS', level: 'Advanced' },
  { name: 'JavaScript', level: 'Intermediate' },
  { name: 'React', level: 'Intermediate' },
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'Python', level: 'Intermediate' },
  { name: 'SQL', level: 'Advanced' },
  { name: 'Git', level: 'Advanced' }
];

function displaySkills() {
  const skillGrid = document.querySelector('.skill-grid');
  if (skillGrid) {
    skills.forEach(skill => {
      const skillDiv = document.createElement('div');
      skillDiv.classList.add('skill');
      skillDiv.innerHTML = `
        <h3>${skill.name}</h3>
        <p>Proficiency: ${skill.level}</p>
      `;
      skillGrid.appendChild(skillDiv);
    });
  }
}

// Load Skills on Page Load
document.addEventListener('DOMContentLoaded', displaySkills);

// Form Validation for Contact Section
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = form.querySelector('input[name="name"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();
    
    let errorMessage = '';

    if (!name) {
      errorMessage += 'Name is required. ';
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      errorMessage += 'Valid email is required. ';
    }

    if (!message) {
      errorMessage += 'Message cannot be empty. ';
    }

    if (errorMessage) {
      alert(errorMessage);
    } else {
      alert('Message sent successfully!');
      form.reset();
    }
  });
}

// Scroll Animation (reveal elements on scroll)
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
  backToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Mobile Menu Toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
  var navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
});
