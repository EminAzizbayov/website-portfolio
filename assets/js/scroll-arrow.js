/**
 * Scroll arrow functionality
 * Makes the scroll indicator arrow clickable to navigate to projects section
 */
document.addEventListener('DOMContentLoaded', function() {
  const scrollArrow = document.querySelector('.scroll-arrow');
  
  if (scrollArrow) {
    scrollArrow.addEventListener('click', function() {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        scrollToElement(projectsSection, 5);
      }
    });
  }
});

