/**
 * Shared utility functions for the website
 */

/**
 * Get the navbar height based on screen size
 * @returns {number} Navbar height in pixels
 */
function getNavbarHeight() {
  return window.innerWidth <= 768 ? 60 : 70;
}

/**
 * Calculate the scroll offset position accounting for navbar
 * @param {HTMLElement} targetElement - The target element to scroll to
 * @param {number} additionalSpacing - Additional spacing in pixels (default: 5)
 * @returns {number} The calculated scroll position
 */
function calculateScrollOffset(targetElement, additionalSpacing = 5) {
  const navbarHeight = getNavbarHeight();
  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
  return targetPosition - navbarHeight - additionalSpacing;
}

/**
 * Smoothly scroll to an element with navbar offset
 * @param {HTMLElement|string} target - Element or selector string
 * @param {number} additionalSpacing - Additional spacing in pixels (default: 5)
 */
function scrollToElement(target, additionalSpacing = 5) {
  const element = typeof target === 'string' ? document.querySelector(target) : target;
  if (element) {
    const offsetPosition = calculateScrollOffset(element, additionalSpacing);
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

