// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: 'ease-in-out'
  });
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('show');
      
      // Change icon based on menu state
      const icon = mobileMenuBtn.querySelector('i');
      if (mobileMenu.classList.contains('show')) {
        icon.className = 'fas fa-times text-xl';
      } else {
        icon.className = 'fas fa-bars text-xl';
      }
    });
    
    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('show');
        const icon = mobileMenuBtn.querySelector('i');
        icon.className = 'fas fa-bars text-xl';
      });
    });
  }
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});

// Navbar background change on scroll
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.style.background = 'rgba(15, 23, 42, 0.95)';
      navbar.style.backdropFilter = 'blur(20px)';
    } else {
      navbar.style.background = 'rgba(0, 0, 0, 0.2)';
      navbar.style.backdropFilter = 'blur(12px)';
    }
  });
});

// Active navigation link highlighting
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('text-cyan-400');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-cyan-400');
      }
    });
  });
});

// Animated background using tsparticles
window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, initializing particles...');

  // Try different ways to access tsParticles
  const tsParticles = window.tsParticles || window.pJSDom?.[0]?.pJS || window.pJSDom?.[0];

  if (tsParticles) {
    console.log('tsParticles found, initializing background...');

    // Configuration for the particles
    const config = {
      particles: {
        number: {
          value: 150,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: ["#00ffff", "#38bdf8", "#ffffff", "#60a5fa"]
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: 0.8,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 5,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#00ffff",
          opacity: 0.6,
          width: 1.5
        },
        move: {
          enable: true,
          speed: 3,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    };

    // Initialize particles
    try {
      if (typeof tsParticles.load === 'function') {
        tsParticles.load('animated-bg', config);
        console.log('Particles loaded successfully!');
      } else {
        console.error('tsParticles.load function not found');
      }
    } catch (error) {
      console.error('Error loading particles:', error);
    }
  } else {
    console.warn('tsParticles library not found. Trying alternative initialization...');

    // Fallback: try to initialize with vanilla JS
    setTimeout(() => {
      const animatedBg = document.getElementById('animated-bg');
      if (animatedBg) {
        animatedBg.style.background = 'radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)';
        console.log('Applied fallback background');
      }
    }, 1000);
  }
});

// Skill card hover effects enhancement
document.addEventListener('DOMContentLoaded', () => {
  const skillCards = document.querySelectorAll('.skill-card');
  
  skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-15px) scale(1.05)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });
});

// Project card click effects
document.addEventListener('DOMContentLoaded', () => {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      // Add a ripple effect
      const ripple = document.createElement('div');
      ripple.style.position = 'absolute';
      ripple.style.borderRadius = '50%';
      ripple.style.background = 'rgba(0, 255, 255, 0.3)';
      ripple.style.transform = 'scale(0)';
      ripple.style.animation = 'ripple 0.6s linear';
      ripple.style.left = '50%';
      ripple.style.top = '50%';
      ripple.style.width = '100px';
      ripple.style.height = '100px';
      ripple.style.marginLeft = '-50px';
      ripple.style.marginTop = '-50px';
      
      card.style.position = 'relative';
      card.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
});

// Add ripple animation to CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Scroll to top functionality
document.addEventListener('DOMContentLoaded', () => {
  const scrollToTopBtn = document.createElement('button');
  scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  scrollToTopBtn.className = 'fixed bottom-8 right-8 w-12 h-12 bg-cyan-500 hover:bg-cyan-400 text-white rounded-full shadow-lg transition-all duration-300 z-50 opacity-0 pointer-events-none';
  scrollToTopBtn.style.transform = 'translateY(100px)';
  
  document.body.appendChild(scrollToTopBtn);
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      scrollToTopBtn.style.opacity = '1';
      scrollToTopBtn.style.pointerEvents = 'auto';
      scrollToTopBtn.style.transform = 'translateY(0)';
    } else {
      scrollToTopBtn.style.opacity = '0';
      scrollToTopBtn.style.pointerEvents = 'none';
      scrollToTopBtn.style.transform = 'translateY(100px)';
    }
  });
  
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}); 