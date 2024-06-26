// script.js

document.addEventListener('DOMContentLoaded', function() {
  const preLoader = document.querySelector('.pre-loader');
  const dayBtn = document.querySelector('.day');
  const nightBtn = document.querySelector('.night');
  const html = document.documentElement;
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav a');
  const hamBtn = document.querySelector('.ham-btn');
  const nav = document.querySelector('.nav');

  // Preloader
  window.onload = () => {
    preLoader.classList.add('hidden');
  };

  // Day/Night Mode Toggle
  dayBtn.addEventListener('click', () => {
    html.classList.toggle('dark-mode');
    dayBtn.style.display = 'none';
    nightBtn.style.display = 'block';
  });

  nightBtn.addEventListener('click', () => {
    html.classList.toggle('dark-mode');
    nightBtn.style.display = 'none';
    dayBtn.style.display = 'block';
  });

  // Smooth Scroll
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth',
      });

      navLinks.forEach(link => link.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Hamburger Menu Toggle
  hamBtn.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
});
