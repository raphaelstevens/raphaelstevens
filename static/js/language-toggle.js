document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.querySelector('.language-toggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', function() {
            const currentLang = document.documentElement.lang || 'fr'; // Default to French if not set
            const newLang = currentLang === 'fr' ? 'en' : 'fr';
            
            // Get the current path
            let path = window.location.pathname;
            
            // Handle language switch based on your URL structure
            if (currentLang === 'fr') {
                // Switching from French to English
                path = '/en' + path;
            } else {
                // Switching from English to French
                path = path.replace(/^\/en/, '');
            }
            
            // Navigate to the new URL
            window.location.href = path;
        });
    }
});