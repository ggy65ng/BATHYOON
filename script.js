const cursor = document.getElementById('cursor');
let cursorVisible = true;

if (cursor) {
  window.addEventListener('mousemove', (e) => {
    cursorVisible = true;
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });

  window.addEventListener('mousedown', () => {
    cursor.style.width = '22px';
    cursor.style.height = '22px';
  });

  window.addEventListener('mouseup', () => {
    cursor.style.width = '18px';
    cursor.style.height = '18px';
  });

  window.addEventListener('scroll', () => {
    if (!cursorVisible) return;
    cursor.style.opacity = window.innerWidth <= 540 ? '0' : '1';
  });
}

const animateElements = document.querySelectorAll('[data-animate]');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

animateElements.forEach((el) => observer.observe(el));

const reviews = document.querySelectorAll('.review');
let activeReview = 0;

function cycleReviews() {
  reviews.forEach((item, index) => {
    item.classList.toggle('active', index === activeReview);
  });
  activeReview = (activeReview + 1) % reviews.length;
}

if (reviews.length) {
  cycleReviews();
  setInterval(cycleReviews, 2800);
}

const navLinks = document.querySelectorAll('.nav a, .footer__links a');
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
