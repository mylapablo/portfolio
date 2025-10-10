// Loading Animation
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  
  setTimeout(() => {
    loader.classList.add('fade-out');
    document.body.classList.add('loaded');
    
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }, 2000); // Show loader for 2 seconds
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Navbar scroll effect
let lastScrollTop = 0;
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > 100) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
  
  lastScrollTop = scrollTop;
});

// Fade in elements on scroll
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe sections (but NOT the home section to avoid animation conflicts)
document.querySelectorAll('section:not(#home)').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(50px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});

// Observe project items
document.querySelectorAll('.project-item').forEach(project => {
  project.style.opacity = '0';
  project.style.transform = 'translateY(50px)';
  project.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(project);
});

// Add purple glow effect on mouse move (optional cool effect)
document.addEventListener('mousemove', (e) => {
  const glow = document.createElement('div');
  glow.style.position = 'fixed';
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
  glow.style.width = '200px';
  glow.style.height = '200px';
  glow.style.background = 'radial-gradient(circle, rgba(157, 78, 221, 0.1) 0%, transparent 70%)';
  glow.style.pointerEvents = 'none';
  glow.style.transform = 'translate(-50%, -50%)';
  glow.style.zIndex = '0';
  glow.style.transition = 'opacity 0.5s ease';
  
  document.body.appendChild(glow);
  
  setTimeout(() => {
    glow.style.opacity = '0';
    setTimeout(() => glow.remove(), 500);
  }, 100);
});

// See More Button Functionality for Other Projects
document.addEventListener('DOMContentLoaded', () => {
  const seeMoreBtn = document.querySelector('.see-more-btn');
  const projectCards = document.querySelectorAll('.other-project-card');
  const initialDisplay = 6; // Show 6 projects initially (2 rows of 3)
  
  if (seeMoreBtn && projectCards.length > 0) {
    // Hide projects beyond the initial display count
    projectCards.forEach((card, index) => {
      if (index >= initialDisplay) {
        card.classList.add('hidden');
      }
    });
    
    // If there are 6 or fewer projects, hide the See More button
    if (projectCards.length <= initialDisplay) {
      seeMoreBtn.classList.add('hidden');
    }
    
    // Toggle visibility when button is clicked
    seeMoreBtn.addEventListener('click', () => {
      const hiddenCards = document.querySelectorAll('.other-project-card.hidden');
      
      if (hiddenCards.length > 0) {
        // Show all hidden cards
        hiddenCards.forEach(card => {
          card.classList.remove('hidden');
        });
        seeMoreBtn.textContent = 'Show Less';
      } else {
        // Hide cards beyond initial display
        projectCards.forEach((card, index) => {
          if (index >= initialDisplay) {
            card.classList.add('hidden');
          }
        });
        seeMoreBtn.textContent = 'See More';
        
        // Smooth scroll to the "Other Projects" section
        document.querySelector('#other-projects h2').scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }
    });
  }
});
// Typing animation
window.addEventListener('load', () => {
  setTimeout(() => {
    const subtitle = document.querySelector('.big-subheading');
    const text = subtitle.textContent;
    subtitle.textContent = '';
    
    let index = 0;
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
  
    subtitle.appendChild(cursor);
    
    function type() {
      if (index < text.length) {
        subtitle.insertBefore(document.createTextNode(text.charAt(index)), cursor);
        index++;
        setTimeout(type, 50); // Speed of typing
      }
    }
    
    type();
  }, 2500);
});
