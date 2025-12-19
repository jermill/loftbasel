// Smooth scroll for navigation
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

// Ticket button interactions
const ticketButtons = document.querySelectorAll('.ticket-btn');
ticketButtons.forEach(button => {
    button.addEventListener('click', function() {
        const ticket = this.closest('.ticket');
        const ticketName = ticket.querySelector('.ticket-name').textContent.trim();
        const ticketPrice = ticket.querySelector('.ticket-price').textContent.trim();
        
        // Handle different ticket types
        if (this.classList.contains('btn-rsvp')) {
            // VIP RSVP - open email or contact form
            window.location.href = 'mailto:info@theloftbasel.com?subject=VIP Inquiry RSVP&body=I would like to RSVP for VIP access to The Loft Basel.';
        } else if (ticketPrice === 'FREE') {
            // Free admission
            alert(`${ticketName}\n\nFREE Entry!\n\nJust show up during event hours.\nSee you there!`);
        } else {
            // Paid ticket - would integrate with payment system
            alert(`Selected: ${ticketName}\nPrice: ${ticketPrice}\n\nTicketing system coming soon!`);
        }
        
        // Visual feedback
        const originalText = this.textContent;
        this.textContent = ticketPrice === 'RSVP' ? 'SENT ✓' : 'SELECTED ✓';
        
        setTimeout(() => {
            this.textContent = originalText;
        }, 2000);
    });
});

// Scroll-based navigation styling
let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        nav.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.artist-card, .schedule-day, .ticket, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeInObserver.observe(el);
});

// Page load animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.4s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Active nav link based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

function highlightNavigation() {
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.style.fontWeight = '500';
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.style.fontWeight = '700';
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// Hover effects for artist cards
document.querySelectorAll('.artist-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Gallery strip hover effect
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
        this.style.zIndex = '10';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.zIndex = '1';
    });
});

console.log('The Loft Basel — Site loaded successfully');
