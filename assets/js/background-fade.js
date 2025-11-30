// Fade out background GIF as user scrolls toward projects section
document.addEventListener('DOMContentLoaded', function() {
  const projectsSection = document.getElementById('projects');
  const body = document.body;
  
  if (!projectsSection || !body.classList.contains('Home')) {
    return; // Only run on homepage
  }
  
  // Get the initial position of the projects section
  function updateBackgroundOpacity() {
    const scrollPosition = window.scrollY;
    const projectsOffset = projectsSection.offsetTop;
    const windowHeight = window.innerHeight;
    
    // Start fading when user scrolls past 30% of the way to projects section
    // Complete fade when reaching projects section
    const fadeStart = projectsOffset * 0.3;
    const fadeEnd = projectsOffset;
    
    let opacity = 0.3; // Initial opacity
    
    if (scrollPosition >= fadeStart) {
      // Calculate fade progress (0 to 1)
      const fadeProgress = Math.min(1, (scrollPosition - fadeStart) / (fadeEnd - fadeStart));
      // Fade from 0.3 to 0
      opacity = 0.3 * (1 - fadeProgress);
    }
    
    // Update CSS variable
    document.documentElement.style.setProperty('--bg-opacity', opacity);
  }
  
  // Throttle scroll events for better performance
  let ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        updateBackgroundOpacity();
        ticking = false;
      });
      ticking = true;
    }
  });
  
  // Initial call
  updateBackgroundOpacity();
});

