document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    let isMenuOpen = false;
    
    // Make sure the mobile menu has the spans required
    if (mobileMenu && mobileMenu.children.length === 0) {
        for (let i = 0; i < 4; i++) {
            const span = document.createElement('span');
            mobileMenu.appendChild(span);
        }
    }
    
    // Add social icons to nav if missing
    if (navLinks && !navLinks.querySelector('.nav-social-links')) {
        const socialLinks = document.createElement('div');
        socialLinks.className = 'nav-social-links';
        socialLinks.innerHTML = `
            <a href="https://www.youtube.com"><i class="fab fa-facebook-f"></i></a>
            <a href="https://x.com/home"><i class="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/mentneo/"><i class="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/feed/"><i class="fab fa-linkedin-in"></i></a>
        `;
        navLinks.appendChild(socialLinks);
    }
    
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            mobileMenu.classList.add('open');
            navLinks.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        } else {
            mobileMenu.classList.remove('open');
            navLinks.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        }
    }
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', toggleMenu);
    }
    
    // Close menu when clicking on links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (isMenuOpen) {
                toggleMenu();
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (isMenuOpen && 
            !e.target.closest('.nav-links') && 
            !e.target.closest('.mobile-menu')) {
            toggleMenu();
        }
    });
    
    // Resize handler to reset menu state on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && isMenuOpen) {
            mobileMenu.classList.remove('open');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
            isMenuOpen = false;
        }
    });
});
