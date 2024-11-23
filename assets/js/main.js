/*--------------------------------------------------------------
# Set Current Year in Footer
--------------------------------------------------------------*/
document.getElementById("currentYear").textContent = new Date().getFullYear();

/*--------------------------------------------------------------
# Form Validation Initialization
--------------------------------------------------------------*/
(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
})();


/*--------------------------------------------------------------
# Counter Animation
--------------------------------------------------------------*/
const counters = document.querySelectorAll('.purecounter');

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-end');
        const count = +counter.innerText;

        const increment = target / 200;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});

/*--------------------------------------------------------------
# AOS (Animate On Scroll) Initialization
--------------------------------------------------------------*/
function aosInit() {
    AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
}
window.addEventListener('load', aosInit);

/*--------------------------------------------------------------
# Highlight Navbar Link on Scroll
--------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const sections = document.querySelectorAll('section');

    function highlightNavLink() {
        let currentSection = '';

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 50;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove('active');
        });

        if (currentSection) {
            const activeLink = document.querySelector(`.navbar-nav .nav-link[href="#${currentSection}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    }

    window.addEventListener('scroll', highlightNavLink);

    highlightNavLink();
});
