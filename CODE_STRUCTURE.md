# Code Structure Documentation

This document outlines the modular structure and organization of the website codebase.

## 📁 File Organization

### CSS Files
- **`assets/css/variables.css`** - CSS custom properties (variables) for colors, spacing, breakpoints, and z-index layers
- **`assets/style.css`** - Main stylesheet with all component styles, organized by sections

### JavaScript Files
- **`assets/js/utils.js`** - Shared utility functions (navbar height calculation, scroll offset calculation)
- **`assets/js/smooth-scroll.js`** - Handles smooth scrolling for anchor links with navbar offset
- **`assets/js/scroll-arrow.js`** - Makes the scroll indicator arrow clickable
- **`assets/js/background-fade.js`** - Controls the scroll-based fade overlay on homepage

### Layout Files
- **`_layouts/default.html`** - Main layout template that includes navbar, footer, and conditionally loads homepage-specific scripts
- **`_includes/navbar.html`** - Navigation bar component
- **`_includes/footer.html`** - Footer component

### Content Files
- **`index.md`** - Homepage content (all sections: hero, projects, about, contact)
- **`about.md`** - About page (currently unused, site uses single-page design)
- **`projects.md`** - Projects page (currently unused, site uses single-page design)

## 🎨 CSS Organization

The main stylesheet (`assets/style.css`) is organized into the following sections:

1. **Fonts** - `@font-face` declarations for custom fonts
2. **Base Styles** - Global styles for `body`, `html`, `main`
3. **Homepage Background Effects** - Background GIF, overlays, and scroll-based fade
4. **Navigation** - Navbar, nav links, logo styling
5. **Layout** - Main content area and footer
6. **Hero Section** - Name, intro text, divider
7. **Social Links** - GitHub and Codecademy logos with tooltips
8. **Scroll Indicator** - Animated scroll arrow
9. **Profile Picture** - Profile image styling
10. **General Section Styles** - Base styles for all sections
11. **About Section** - About content and programming languages image
12. **Contact Section** - Contact form and email link
13. **Projects Section** - Project grid and project boxes

## 🔧 JavaScript Modularity

### Shared Utilities (`utils.js`)
- `getNavbarHeight()` - Returns navbar height based on screen size
- `calculateScrollOffset()` - Calculates scroll position accounting for navbar
- `scrollToElement()` - Smoothly scrolls to an element with proper offset

### Benefits
- **DRY Principle**: Eliminates code duplication (navbar height calculation was repeated 3 times)
- **Maintainability**: Single source of truth for navbar height and scroll calculations
- **Reusability**: Utility functions can be used across multiple scripts

## 📝 Code Quality Features

### ✅ Modularity
- CSS variables for consistent theming
- Separate JavaScript files for different functionalities
- Shared utility functions to avoid duplication

### ✅ Organization
- Clear section comments in CSS (`/* ===== SECTION NAME ===== */`)
- JSDoc-style comments in JavaScript
- Logical file structure

### ✅ Maintainability
- CSS variables make it easy to update colors/spacing globally
- Utility functions centralize common calculations
- Clear separation of concerns

### ✅ Responsive Design
- Mobile-first approach with media queries
- Consistent breakpoint (`768px`) defined in CSS variables
- Responsive navbar height handled in utilities

## 🚀 Best Practices Implemented

1. **Separation of Concerns**: HTML (Jekyll), CSS, and JavaScript are clearly separated
2. **Reusability**: Shared utilities and CSS variables promote code reuse
3. **Documentation**: Code comments explain purpose and functionality
4. **Consistency**: Standardized naming conventions and structure
5. **Performance**: Throttled scroll events, optimized animations

## 📊 Code Metrics

- **CSS Files**: 2 (variables.css + style.css)
- **JavaScript Files**: 4 (utils.js + 3 feature-specific files)
- **Total Lines of CSS**: ~850 lines (organized into clear sections)
- **Code Duplication**: Eliminated through shared utilities

