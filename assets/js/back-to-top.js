document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('mkdf-back-to-top');
    
    if (backToTopButton) {
        // Add initial styles for smooth transition
        backToTopButton.style.transition = 'opacity 0.3s ease-in-out';
        backToTopButton.style.opacity = '0';
        backToTopButton.style.visibility = 'hidden';
        
        let ticking = false;
        
        // Throttle scroll event for better performance
        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    if (window.pageYOffset > 300) {
                        backToTopButton.style.visibility = 'visible';
                        backToTopButton.style.opacity = '1';
                    } else {
                        backToTopButton.style.opacity = '0';
                        // Hide after transition completes
                        setTimeout(() => {
                            if (window.pageYOffset <= 300) {
                                backToTopButton.style.visibility = 'hidden';
                            }
                        }, 300);
                    }
                    ticking = false;
                });
                ticking = true;
            }
        });

        // Smooth scroll to top when clicked
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
