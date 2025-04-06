// Loader
window.addEventListener('load', () => {
    document.querySelector('.loader-wrapper').style.opacity = '0';
    setTimeout(() => {
      document.querySelector('.loader-wrapper').style.display = 'none';
    }, 500);
  });
  //responsive
  $(document).ready(function(){
    if ($(window).width() <= 768) { 
      $(".hide").hide();
  }

  $(window).resize(function () {
      if ($(window).width() <= 768) {
          $(".hide").hide();
      } else {
          $(".hide").show();
      }
  });
    // edits for show-more-btn
    if ($(window).width() <= 768) { 
      $(".show-more-btn").addClass(' mobile-more-margin');
      let toggleState = true;
      
      $('.show-more-btn').click(function() {
        if (toggleState) {
          $(this).removeClass('mobile-more-margin');
        } else {
          $(this).addClass('mobile-more-margin');
        }
        toggleState = !toggleState;
      });
  }
  });
  // Scroll Animations
  const animateElements = document.querySelectorAll('[data-animate]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.1 });
  
  animateElements.forEach(element => {
    observer.observe(element);
  });
  
  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector('.subtitle').style.opacity = '1';
    }, 500);
});
  
  // Project Card Animation
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('visible');
    }, index * 200);
  });
  
  // Skill Item Animation
  const skillItems = document.querySelectorAll('.skill-item');
  skillItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('visible');
    }, index * 100);
  });
// Add this to your existing JS
document.querySelector('.hamburger').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.nav-links').classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
      document.querySelector('.hamburger').classList.remove('active');
      document.querySelector('.nav-links').classList.remove('active');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const showMoreBtn = document.querySelector('.show-more-btn');
  const hiddenSkills = document.querySelectorAll('.skill-item.hidden');
  let isExpanded = false;

  showMoreBtn.addEventListener('click', () => {
      isExpanded = !isExpanded;

      hiddenSkills.forEach(skill => {
          if (isExpanded) {
              skill.classList.add('revealing'); // Start transition
              skill.classList.remove('hidden'); // Remove hidden immediately
              setTimeout(() => {
                  skill.classList.add('visible'); // Apply full visibility
              }, 50); // Small delay ensures smooth transition
          } else {
              skill.classList.remove('visible'); // Trigger fade-out effect
              setTimeout(() => {
                  skill.classList.add('hidden'); // Hide after transition
              }, 100); // Matches CSS transition duration
          }
      });

      // Update button text
      showMoreBtn.textContent = isExpanded ? 'Show Less' : 'Show More';
  });
  
});
