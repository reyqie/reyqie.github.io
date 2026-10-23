/* Performance Optimization Script */

// Throttle scroll events
let scrollTicking = false;

function throttleScroll(callback) {
    if (!scrollTicking) {
        window.requestAnimationFrame(() => {
            callback();
            scrollTicking = false;
        });
        scrollTicking = true;
    }
}

// Detect mobile/tablet
window.isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 1024;

// Particles enabled on mobile with reduced count from script.js

// Lazy load non-critical CSS
const styleSheets = document.querySelectorAll('link[rel="stylesheet"]');
styleSheets.forEach(sheet => {
    sheet.media = 'all';
});

console.log('Performance optimizations loaded');
