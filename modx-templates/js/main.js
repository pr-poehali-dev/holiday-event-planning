document.addEventListener('DOMContentLoaded', function() {
  
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('show');
    });
  }

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth < 992) {
        mobileMenu.classList.remove('show');
      }
    });
  });

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());
      
      console.log('Form submitted:', data);
      
      alert('Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.');
      contactForm.reset();
    });
  }

  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(bookingForm);
      const data = Object.fromEntries(formData.entries());
      
      console.log('Booking submitted:', data);
      
      alert('Спасибо за бронирование! Мы свяжемся с вами в течение 15 минут.');
      
      const modal = bootstrap.Modal.getInstance(document.getElementById('bookingModal'));
      if (modal) {
        modal.hide();
      }
      bookingForm.reset();
    });
  }
});

function openBookingModal(programName) {
  const modal = new bootstrap.Modal(document.getElementById('bookingModal'));
  document.getElementById('programName').textContent = programName;
  document.getElementById('programInput').value = programName;
  modal.show();
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

window.addEventListener('scroll', function() {
  const header = document.querySelector('.sticky-header');
  if (window.scrollY > 100) {
    header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
  } else {
    header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
  }
});

const currentPath = window.location.pathname;
document.querySelectorAll('.nav-link').forEach(link => {
  const linkPath = new URL(link.href).pathname;
  if (currentPath === linkPath || (currentPath === '/' && linkPath.includes('index'))) {
    link.classList.add('active');
  }
});
