// ==================== BERANDA PAGE FUNCTIONALITY ====================

const navbar = document.querySelector(".navbar-container");
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");

// Desktop Dropdown
const dropdownBtn = document.getElementById('dropdown-btn');
const dropdownMenu = document.getElementById('dropdown-menu');
const dropdownContainer = document.querySelector('.dropdown-container');

if (dropdownBtn && dropdownMenu && dropdownContainer) {
  dropdownBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownMenu.classList.toggle('hidden');
    const arrow = dropdownBtn.querySelector('svg');
    arrow.classList.toggle('rotate-180');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!dropdownContainer.contains(e.target)) {
      dropdownMenu.classList.add('hidden');
      const arrow = dropdownBtn.querySelector('svg');
      arrow.classList.remove('rotate-180');
    }
  });
}

// Mobile Menu Toggle
if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    if (hamburgerIcon && closeIcon) {
      hamburgerIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    }
  });
}

// Mobile Dropdown
const mobileDropdownBtn = document.getElementById('mobile-dropdown-btn');
const mobileDropdownMenu = document.getElementById('mobile-dropdown-menu');
const mobileDropdownArrow = document.getElementById('mobile-dropdown-arrow');

if (mobileDropdownBtn && mobileDropdownMenu) {
  mobileDropdownBtn.addEventListener('click', () => {
    mobileDropdownMenu.classList.toggle('hidden');
    if (mobileDropdownArrow) {
      mobileDropdownArrow.classList.toggle('rotate-180');
    }
  });
}

// Navbar scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  const sections = document.querySelectorAll("section[id]");
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (
      window.scrollY > sectionTop &&
      window.scrollY <= sectionTop + sectionHeight
    ) {
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

// Set active nav link based on current page
document.addEventListener('DOMContentLoaded', () => {
  // Dapatkan path halaman saat ini
  const currentPage = window.location.pathname.split('/').pop() || 'beranda.html';
  
  // Hapus semua class active
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  
  // Tambahkan class active sesuai halaman
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    
    // Cek jika href sesuai dengan halaman saat ini
    if (href === currentPage || 
        (currentPage === '' && href === 'beranda.html') ||
        (currentPage === 'beranda.html' && href === 'beranda.html') ||
        (currentPage === 'beranda.html' && href === '#beranda') ||
        (currentPage === 'tentang.html' && href === 'tentang.html')) {
      link.classList.add('active');
    }
  });
  
  // Set active untuk dropdown items (Peta Desa)
  const dropdownLinks = document.querySelectorAll('#dropdown-menu a, #mobile-dropdown-menu a');
  dropdownLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.includes(currentPage)) {
      link.classList.add('active');
      // Tambahkan indikator visual bahwa user ada di salah satu halaman Peta Desa
      if (dropdownBtn) {
        dropdownBtn.classList.add('active');
      }
      if (mobileDropdownBtn) {
        mobileDropdownBtn.classList.add('active');
      }
    }
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      if (mobileMenu) {
        mobileMenu.classList.add("hidden");
        if (hamburgerIcon && closeIcon) {
          hamburgerIcon.classList.remove('hidden');
          closeIcon.classList.add('hidden');
        }
      }
    }
  });
});

// Close mobile menu when clicking on a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    if (mobileMenu) {
      mobileMenu.classList.add('hidden');
      if (hamburgerIcon && closeIcon) {
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
    }
  });
});