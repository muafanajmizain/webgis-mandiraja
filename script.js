// ==================== LANDING PAGE FUNCTIONALITY ====================
document.addEventListener('DOMContentLoaded', () => {
    const landingPage = document.getElementById('landing-page');
    const mainPage = document.getElementById('main-page');
    const btnExplore = document.querySelector('.btn-explore');

    // Button Lihat Selengkapnya - Pindah ke halaman utama
    if (btnExplore) {
        btnExplore.addEventListener('click', () => {
            // Fade out landing page
            landingPage.style.transition = 'opacity 0.6s ease';
            landingPage.style.opacity = '0';
            
            setTimeout(() => {
                landingPage.style.display = 'none';
                mainPage.classList.add('active');
                
                // Fade in main page
                mainPage.style.opacity = '0';
                setTimeout(() => {
                    mainPage.style.transition = 'opacity 0.6s ease';
                    mainPage.style.opacity = '1';
                }, 50);
            }, 600);
        });
    }
});

// ==================== MAIN PAGE FUNCTIONALITY ====================
const navbar = document.querySelector(".navbar-container");
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

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
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Hapus semua class active
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Tambahkan class active sesuai halaman
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        
        // Cek jika href sesuai dengan halaman saat ini
        if (href === currentPage || 
            (currentPage === '' && href === 'index.html') ||
            (currentPage === 'index.html' && href === '#beranda') ||
            (currentPage === 'tentang.html' && href === 'tentang.html')) {
            link.classList.add('active');
        }
    });
});

// Mobile menu toggle
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
            if (mobileMenu) {
                mobileMenu.classList.add("hidden");
            }
        }
    });
});