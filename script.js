// FAQ Functionality
document.addEventListener("DOMContentLoaded", () => {
    // Initialize Lucide icons
    if (typeof lucide !== "undefined") {
      window.lucide = lucide // Declare lucide in the global scope
      lucide.createIcons()
    }
  
    const faqItems = document.querySelectorAll(".faq-item")
  
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question")
  
      question.addEventListener("click", () => {
        const isActive = item.classList.contains("active")
  
        // Close all other FAQ items
        faqItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("active")
            otherItem.querySelector(".faq-question").setAttribute("aria-expanded", "false")
          }
        })
  
        // Toggle current item
        if (isActive) {
          item.classList.remove("active")
          question.setAttribute("aria-expanded", "false")
        } else {
          item.classList.add("active")
          question.setAttribute("aria-expanded", "true")
        }
      })
  
      // Handle keyboard navigation
      question.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          question.click()
        }
      })
    })
  
    // Smooth scrolling for CTA button
    const ctaButton = document.querySelector(".cta-button")
    if (ctaButton) {
      ctaButton.addEventListener("click", (e) => {
        // Add your consultation booking logic here
        console.log("Free consultation requested")
  
        // Example: You could open a modal, redirect to a form, etc.
        // For now, we'll just show an alert
        alert("Thank you for your interest! We'll contact you soon to schedule your free consultation.")
      })
    }
  
    // Add scroll animations (optional enhancement)
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }
      })
    }, observerOptions)
  
    // Observe sections for scroll animations
    const sections = document.querySelectorAll(".faq-section, .process-section, .cta-hero")
    sections.forEach((section) => {
      section.style.opacity = "0"
      section.style.transform = "translateY(20px)"
      section.style.transition = "opacity 0.6s ease, transform 0.6s ease"
      observer.observe(section)
    })
  })

  document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const nav = document.querySelector('.nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('nav-menu-open');
        nav.classList.toggle('nav-open');
        mobileMenuBtn.classList.toggle('mobile-menu-open');
    });
    
    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('nav-menu-open');
            nav.classList.remove('nav-open');
            mobileMenuBtn.classList.remove('mobile-menu-open');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target)) {
            navMenu.classList.remove('nav-menu-open');
            nav.classList.remove('nav-open');
            mobileMenuBtn.classList.remove('mobile-menu-open');
        }
    });
});


        // Initialize Lucide icons
        lucide.createIcons();
        
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Clear previous errors
            clearErrors();
            
            // Get form data
            const formData = {
                firstName: document.getElementById('firstName').value.trim(),
                lastName: document.getElementById('lastName').value.trim(),
                email: document.getElementById('email').value.trim(),
                subject: document.getElementById('subject').value.trim(),
                message: document.getElementById('message').value.trim()
            };
            
            // Validate form
            let isValid = true;
            
            if (!formData.firstName) {
                showError('firstName', 'Please enter your first name');
                isValid = false;
            }
            
            if (!formData.lastName) {
                showError('lastName', 'Please enter your last name');
                isValid = false;
            }
            
            if (!formData.email) {
                showError('email', 'Please enter your email address');
                isValid = false;
            } else if (!isValidEmail(formData.email)) {
                showError('email', 'Please enter a valid email address');
                isValid = false;
            }
            
            if (!formData.subject) {
                showError('subject', 'Please enter a subject');
                isValid = false;
            }
            
            if (!formData.message) {
                showError('message', 'Please enter your message');
                isValid = false;
            }
            
            if (isValid) {
                // Simulate form submission
                const submitButton = document.querySelector('.submit-button');
                submitButton.disabled = true;
                submitButton.textContent = 'Sending...';
                
                setTimeout(() => {
                    // Show success message
                    document.getElementById('successMessage').style.display = 'block';
                    
                    // Reset form
                    document.getElementById('contactForm').reset();
                    
                    // Reset button
                    submitButton.disabled = false;
                    submitButton.textContent = 'Send Message';
                    
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        document.getElementById('successMessage').style.display = 'none';
                    }, 5000);
                }, 1500);
            }
        });
        
        function showError(fieldName, message) {
            const field = document.getElementById(fieldName);
            const errorElement = document.getElementById(fieldName + 'Error');
            
            field.classList.add('error');
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
        
        function clearErrors() {
            const errorElements = document.querySelectorAll('.error-message');
            const inputElements = document.querySelectorAll('.form-input, .form-textarea');
            
            errorElements.forEach(element => {
                element.style.display = 'none';
            });
            
            inputElements.forEach(element => {
                element.classList.remove('error');
            });
        }
        
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
        
        // Clear errors when user starts typing
        document.querySelectorAll('.form-input, .form-textarea').forEach(input => {
            input.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    this.classList.remove('error');
                    const errorElement = document.getElementById(this.id + 'Error');
                    errorElement.style.display = 'none';
                }
            });
        });