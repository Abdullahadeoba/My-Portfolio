/**
 * Nuruddeen Abdullah Adeoba - Portfolio Script Configuration
 * Production-optimized version (Removed bloated animations, fixed runtime block errors)
 */

document.addEventListener('DOMContentLoaded', () => {

    /*========== Menu Icon & Navbar Toggle Control ==========*/
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    if (menuIcon && navbar) {
        menuIcon.onclick = () => {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        };
    }

    /*========== High-Performance Scroll Handling ==========*/
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');
    const header = document.querySelector('.header');

    // Executing the scroll routine with passive event telemetry to maximize hardware performance
    window.addEventListener('scroll', () => {
        const top = window.scrollY;

        // 1. Sticky Navbar State Control
        if (header) {
            header.classList.toggle('sticky', top > 100);
        }

        // 2. Active Section Navigation Tracking
        sections.forEach(sec => {
            const offset = sec.offsetTop - 150;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');

            if (top >= offset && top < offset + height && id) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    const targetLink = document.querySelector(`header nav a[href*="${id}"]`);
                    if (targetLink) {
                        targetLink.classList.add('active');
                    }
                });
            }
        });

        // 3. Auto-Collapse Mobile Navbar Context on Scroll Active States
        if (menuIcon && navbar) {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        }
    }, { passive: true });


    /*========== Theme Switcher Module (Dark / Light Mode Toggle) ==========*/
    const darkModeIcon = document.querySelector('#darkMode-icon');

    if (darkModeIcon) {
        darkModeIcon.onclick = () => {
            darkModeIcon.classList.toggle('bx-sun');
            document.body.classList.toggle('dark-mode');
            
            // Production Tip: Persist preferences across window instances
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
        };

        // Automatically restore user's last chosen theme state on initial document lifecycle pass
        if (localStorage.getItem('portfolio-theme') === 'dark') {
            darkModeIcon.classList.add('bx-sun');
            document.body.classList.add('dark-mode');
        }
    }

});