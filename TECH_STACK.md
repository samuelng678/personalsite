# 🚀 Modern Portfolio - Technology Stack

## Cutting-Edge Frontend Technologies (2025)

This portfolio showcases the **latest and most advanced** web technologies available as of October 2025.

---

## 🎨 CSS Technologies

### 1. **CSS Cascade Layers (@layer)**
```css
@layer reset, base, components, utilities, animations;
```
- **What it is**: Organize CSS by priority layers
- **Why it's impressive**: Better control over CSS cascade without specificity wars
- **Browser Support**: Chrome 99+, Safari 15.4+, Firefox 97+

### 2. **Container Queries**
```css
container-type: inline-size;
@container (max-width: 600px) { ... }
```
- **What it is**: Style elements based on their container size, not viewport
- **Why it's impressive**: Revolutionary responsive design - components respond to their container
- **Browser Support**: Chrome 105+, Safari 16+, Firefox 110+

### 3. **CSS Nesting**
```css
header {
    & nav { ... }
    & h1 { ... }
}
```
- **What it is**: Write nested CSS like SASS, natively
- **Why it's impressive**: Cleaner, more maintainable CSS without preprocessors
- **Browser Support**: Chrome 112+, Safari 16.5+, Firefox 117+

### 4. **:has() Pseudo-Class (Parent Selector)**
```css
section:has(.skill-tag) { ... }
body:has(.loading-screen:not(.hidden)) { ... }
```
- **What it is**: Select parent elements based on child content
- **Why it's impressive**: The "holy grail" of CSS - true parent selector
- **Browser Support**: Chrome 105+, Safari 15.4+, Firefox 121+

### 5. **Scroll-Driven Animations**
```css
animation-timeline: scroll();
animation-range: entry 0% cover 40%;
```
- **What it is**: Animate elements based on scroll position, natively
- **Why it's impressive**: No JavaScript needed for scroll-based animations
- **Browser Support**: Chrome 115+

### 6. **View Transitions API**
```css
@view-transition { navigation: auto; }
::view-transition-old(root) { ... }
```
- **What it is**: Smooth, animated transitions between pages
- **Why it's impressive**: SPA-like transitions with zero JavaScript
- **Browser Support**: Chrome 111+

### 7. **Modern Viewport Units**
```css
height: 100svh; /* Small Viewport Height */
width: 100dvw;  /* Dynamic Viewport Width */
```
- **What it is**: Viewport units that account for mobile browser UI
- **Why it's impressive**: Solves the mobile 100vh problem
- **Browser Support**: Chrome 108+, Safari 15.4+, Firefox 101+

### 8. **CSS Custom Properties (Variables)**
```css
:root { --primary-gradient: linear-gradient(...); }
```
- **Used throughout**: Dynamic theming and maintainable code

### 9. **Glassmorphism**
```css
backdrop-filter: blur(20px);
background: rgba(255, 255, 255, 0.1);
```
- **What it is**: Frosted glass effect
- **Why it's impressive**: Modern, premium aesthetic

---

## ⚡ JavaScript APIs

### 1. **Web Animations API (WAAPI)**
```javascript
element.animate([...keyframes], {
    duration: 800,
    easing: 'cubic-bezier(...)',
    fill: 'forwards'
});
```
- **What it is**: Programmatic control of CSS animations
- **Why it's impressive**: Better performance than CSS transitions, more control
- **Browser Support**: All modern browsers

### 2. **Intersection Observer API v2**
```javascript
const observer = new IntersectionObserver(callback, options);
observer.observe(element);
```
- **What it is**: Detect when elements enter/exit viewport
- **Why it's impressive**: Efficient scroll-based triggers, no scroll listeners
- **Browser Support**: All modern browsers

### 3. **Canvas API (Particle System)**
```javascript
const ctx = canvas.getContext('2d');
// 100 animated particles with connecting lines
```
- **What it is**: Hardware-accelerated 2D graphics
- **Why it's impressive**: Smooth 60fps particle effects

### 4. **View Transitions API (JavaScript)**
```javascript
document.startViewTransition(() => {
    // DOM updates here
});
```
- **What it is**: Programmatic page transitions
- **Why it's impressive**: Smooth morphing between states
- **Browser Support**: Chrome 111+

### 5. **Performance Observer API**
```javascript
const observer = new PerformanceObserver((list) => { ... });
observer.observe({ entryTypes: ['largest-contentful-paint'] });
```
- **What it is**: Monitor Core Web Vitals (LCP, CLS, FID)
- **Why it's impressive**: Track real user performance metrics

### 6. **RequestAnimationFrame**
```javascript
function animate() {
    // Smooth 60fps animations
    requestAnimationFrame(animate);
}
```
- **What it is**: Browser-optimized animation loop
- **Why it's impressive**: Syncs with display refresh rate

### 7. **Navigation API**
```javascript
window.navigation?.addEventListener('navigate', (event) => { ... });
```
- **What it is**: Modern replacement for History API
- **Why it's impressive**: Intercept and customize navigation
- **Browser Support**: Chrome 102+ (Experimental)

---

## 🎯 Design Patterns & Best Practices

### 1. **Glassmorphism Design**
- Frosted glass effects with backdrop-filter
- Semi-transparent layers
- Modern, premium aesthetic

### 2. **Progressive Enhancement**
- Feature detection with fallbacks
- Graceful degradation for older browsers

### 3. **Performance Optimization**
- Debounced scroll/resize handlers
- Hardware-accelerated transforms
- RequestAnimationFrame for animations
- Lazy loading with Intersection Observer

### 4. **Accessibility**
- Semantic HTML5
- ARIA labels (can be added)
- Keyboard navigation support
- Reduced motion preferences (can be added)

### 5. **Mobile-First Responsive**
- Container Queries for component-level responsiveness
- Touch-friendly interfaces
- Modern viewport units

---

## 🔧 Advanced Features

### Custom Cursor
- Smooth following cursor with lerp interpolation
- Hover state changes
- Desktop-only (hidden on mobile)

### Particle System
- 100 animated particles
- Dynamic connection lines
- Canvas-based for performance

### Scroll Animations
- Native scroll-driven animations
- Intersection Observer fallback
- Parallax effects

### 3D Transforms
- Perspective-based hover effects
- Transform-style: preserve-3d
- Smooth transitions

### Loading Screen
- Animated entrance
- Fade out with Web Animations API

---

## 📊 Why This Impresses Recruiters

✅ **Using 2025's latest CSS features**  
✅ **Native browser APIs (not relying on heavy frameworks)**  
✅ **Performance-focused implementation**  
✅ **Progressive enhancement mindset**  
✅ **Clean, maintainable code architecture**  
✅ **Demonstrates deep understanding of web platform**  
✅ **Showcases both design and technical skills**  
✅ **Production-ready code patterns**  

---

## 🌐 Browser Support

This portfolio uses progressive enhancement:
- **Full experience**: Chrome 115+, Edge 115+
- **Good experience**: Safari 16+, Firefox 117+
- **Basic experience**: All modern browsers

Features gracefully degrade with polyfills and fallbacks.

---

## 🚀 Performance Metrics Target

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **Time to Interactive**: < 3s

All animations use `transform` and `opacity` for 60fps performance.

---

## 📚 Learn More

- [CSS @layer](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)
- [Container Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries)
- [CSS Nesting](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting)
- [:has() Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:has)
- [Scroll-Driven Animations](https://developer.chrome.com/articles/scroll-driven-animations/)
- [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API)
- [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)

---

**Built by Sam Ng | 2025**
