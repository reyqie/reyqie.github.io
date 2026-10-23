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

// Disable heavy effects on mobile
if (window.isMobileDevice) {
    // Disable particles on mobile
    const sakuraContainer = document.querySelector('.sakura-container');
    const snowContainer = document.querySelector('.snow-container');
    if (sakuraContainer) sakuraContainer.style.display = 'none';
    if (snowContainer) snowContainer.style.display = 'none';

    console.log('Mobile mode: Particles disabled for performance');
}

// Lazy load non-critical CSS
const styleSheets = document.querySelectorAll('link[rel="stylesheet"]');
styleSheets.forEach(sheet => {
    sheet.media = 'all';
});

console.log('Performance optimizations loaded');
