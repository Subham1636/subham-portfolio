
/* =====================================
   MOBILE NAVIGATION
===================================== */

const hamburger = document.querySelector('.hamburger');

const navLinks = document.querySelector('.nav-links');

const navItems = document.querySelectorAll('.nav-link');


if (hamburger && navLinks) {

    // Open and close mobile menu

    hamburger.addEventListener('click', () => {

        navLinks.classList.toggle('active');

        hamburger.classList.toggle('active');

    });


    // Close mobile menu after clicking a link

    navItems.forEach(link => {

        link.addEventListener('click', () => {

            navLinks.classList.remove('active');

            hamburger.classList.remove('active');

        });

    });

}



/* =====================================
   ACTIVE NAVIGATION ON SCROLL
===================================== */

const sections = document.querySelectorAll('section');


function updateActiveNavigation() {

    let current = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 200) {

            current = section.getAttribute('id');

        }

    });


    navItems.forEach(item => {

        item.classList.remove('active');

        if (item.getAttribute('href') === `#${current}`) {

            item.classList.add('active');

        }

    });

}


window.addEventListener('scroll', updateActiveNavigation);


/* =====================================
   CONTACT FORM VALIDATION
===================================== */

const contactForm = document.getElementById('contactForm');


if (contactForm) {

    contactForm.addEventListener('submit', function(e) {

        e.preventDefault();

        let isValid = true;


        // Name validation

        const name = document.getElementById('name');

        const nameError = name.nextElementSibling;


        if (name.value.trim().length < 2) {

            name.classList.add('error');

            nameError.textContent =
                'Name must be at least 2 characters';

            isValid = false;

        } else {

            name.classList.remove('error');

            nameError.textContent = '';

        }



        // Email validation

        const email = document.getElementById('email');

        const emailError = email.nextElementSibling;

        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailRegex.test(email.value.trim())) {

            email.classList.add('error');

            emailError.textContent =
                'Please enter a valid email';

            isValid = false;

        } else {

            email.classList.remove('error');

            emailError.textContent = '';

        }



        // Subject validation

        const subject = document.getElementById('subject');

        const subjectError = subject.nextElementSibling;


        if (subject.value.trim().length < 3) {

            subject.classList.add('error');

            subjectError.textContent =
                'Subject must be at least 3 characters';

            isValid = false;

        } else {

            subject.classList.remove('error');

            subjectError.textContent = '';

        }



        // Message validation

        const message = document.getElementById('message');

        const messageError = message.nextElementSibling;


        if (message.value.trim().length < 10) {

            message.classList.add('error');

            messageError.textContent =
                'Message must be at least 10 characters';

            isValid = false;

        } else {

            message.classList.remove('error');

            messageError.textContent = '';

        }



        // Successful validation

        if (isValid) {

            alert(
                'Thank you! Your message has been validated. ' +
                'The form is not connected to email yet.'
            );

            contactForm.reset();

        }

    });

}



/* =====================================
   SKILL PROGRESS ANIMATION
===================================== */

const skillCards = document.querySelectorAll('.skill-card');


if ('IntersectionObserver' in window) {

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const progress =
                        entry.target.querySelector('.progress');

                    if (progress) {

                        progress.style.width =
                            progress.style.width;

                    }

                }

            });

        },

        {
            threshold: 0.5
        }

    );


    skillCards.forEach(card => {

        observer.observe(card);

    });

}


/* =====================================
   INITIAL NAVIGATION STATE
===================================== */

updateActiveNavigation();
