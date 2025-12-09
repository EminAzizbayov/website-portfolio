/**
 * Smooth scrolling functionality with navbar offset
 * Handles anchor link clicks and hash navigation
 */
document.addEventListener('DOMContentLoaded', function() {
  // Scroll to top on page load/refresh
  window.scrollTo(0, 0);
  
  // Handle anchor link clicks with proper offset for fixed navbar
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '#home') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        scrollToElement(target, 5);
      }
    });
  });
  
  // Handle hash in URL on page load
  if (window.location.hash) {
    setTimeout(function() {
      scrollToElement(window.location.hash, 5);
    }, 100);
  }
});

