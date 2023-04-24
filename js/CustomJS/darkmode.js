function toggleDarkMode() {
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// Set initial state of dark mode based on user preference
const isDarkMode = localStorage.getItem('darkMode') === 'true';
const body = document.querySelector('body');
body.classList.toggle('dark-mode', isDarkMode);
