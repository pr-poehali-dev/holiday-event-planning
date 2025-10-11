/**
 * MODX Template JavaScript - Дед Мороз Деткам
 * Минимальный JS код для интерактивности
 */

(function() {
  'use strict';

  // Mobile Menu Toggle
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('show');
      this.setAttribute('aria-expanded', mobileMenu.classList.contains('show'));
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!mobileMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
        mobileMenu.classList.remove('show');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close mobile menu when clicking on a link
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('show');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Form Validation
  const contactForms = document.querySelectorAll('.contact-form form');
  contactForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = form.querySelector('[name="name"]');
      const phone = form.querySelector('[name="phone"]');
      const email = form.querySelector('[name="email"]');
      
      let isValid = true;

      // Simple validation
      if (name && !name.value.trim()) {
        showError(name, 'Пожалуйста, укажите ваше имя');
        isValid = false;
      } else if (name) {
        clearError(name);
      }

      if (phone && !phone.value.trim()) {
        showError(phone, 'Пожалуйста, укажите телефон');
        isValid = false;
      } else if (phone) {
        clearError(phone);
      }

      if (email && email.value.trim() && !isValidEmail(email.value)) {
        showError(email, 'Пожалуйста, укажите корректный email');
        isValid = false;
      } else if (email) {
        clearError(email);
      }

      if (isValid) {
        // Show success message
        showSuccessMessage(form);
        // Here you would normally submit the form via AJAX or allow normal submission
        // For MODX, you can uncomment the next line to allow form submission
        // form.submit();
      }
    });
  });

  // Helper Functions
  function showError(input, message) {
    const formGroup = input.closest('.form-group');
    let errorDiv = formGroup.querySelector('.error-message');
    
    if (!errorDiv) {
      errorDiv = document.createElement('div');
      errorDiv.className = 'error-message text-danger small mt-1';
      formGroup.appendChild(errorDiv);
    }
    
    errorDiv.textContent = message;
    input.classList.add('is-invalid');
  }

  function clearError(input) {
    const formGroup = input.closest('.form-group');
    const errorDiv = formGroup.querySelector('.error-message');
    
    if (errorDiv) {
      errorDiv.remove();
    }
    
    input.classList.remove('is-invalid');
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showSuccessMessage(form) {
    const successDiv = document.createElement('div');
    successDiv.className = 'alert alert-success mt-3';
    successDiv.innerHTML = '<strong>Заявка отправлена!</strong> Мы свяжемся с вами в ближайшее время.';
    
    form.appendChild(successDiv);
    
    // Reset form
    form.reset();
    
    // Remove success message after 5 seconds
    setTimeout(() => {
      successDiv.remove();
    }, 5000);
  }

  // Active Navigation Link
  function updateActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
      const linkPath = new URL(link.href).pathname;
      if (linkPath === currentPath) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  updateActiveNavLink();

  // Sticky Header Shadow on Scroll
  const header = document.querySelector('.sticky-header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 10) {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
      } else {
        header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
      }
    });
  }

  // Initialize Bootstrap tooltips if available
  if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }

  // Gallery Modal (simple lightbox)
  const galleryItems = document.querySelectorAll('.gallery-item img');
  galleryItems.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function() {
      showImageModal(this.src, this.alt);
    });
  });

  function showImageModal(src, alt) {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
      <div class="image-modal-overlay">
        <div class="image-modal-content">
          <button class="image-modal-close">&times;</button>
          <img src="${src}" alt="${alt}">
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Close modal on click
    modal.addEventListener('click', function(e) {
      if (e.target.classList.contains('image-modal-overlay') || 
          e.target.classList.contains('image-modal-close')) {
        closeImageModal(modal);
      }
    });
    
    // Close on ESC key
    document.addEventListener('keydown', function escHandler(e) {
      if (e.key === 'Escape') {
        closeImageModal(modal);
        document.removeEventListener('keydown', escHandler);
      }
    });
  }

  function closeImageModal(modal) {
    modal.remove();
    document.body.style.overflow = '';
  }

  // Add simple modal styles dynamically
  const modalStyles = document.createElement('style');
  modalStyles.textContent = `
    .image-modal {
      position: fixed;
      inset: 0;
      z-index: 9999;
    }
    .image-modal-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .image-modal-content {
      position: relative;
      max-width: 90%;
      max-height: 90%;
    }
    .image-modal-content img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 8px;
    }
    .image-modal-close {
      position: absolute;
      top: -40px;
      right: 0;
      background: transparent;
      border: none;
      color: white;
      font-size: 40px;
      cursor: pointer;
      padding: 0;
      width: 40px;
      height: 40px;
      line-height: 1;
    }
    .image-modal-close:hover {
      opacity: 0.7;
    }
  `;
  document.head.appendChild(modalStyles);

})();
