const btn = document.getElementById('animateBtn');
const darkToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Animate button on click
btn.addEventListener('click', () => {
    btn.classList.remove('animated'); // reset animation
    void btn.offsetWidth; // trigger reflow
    btn.classList.add('animated');
});

// Store/retrieve dark mode preference
function setDarkMode(enabled) {
    if (enabled) {
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
    }
    localStorage.setItem('darkMode', enabled ? '1' : '0');
}

darkToggle.addEventListener('change', (e) => {
    setDarkMode(e.target.checked);
});

// On load, restore preference
window.addEventListener('DOMContentLoaded', () => {
    const darkPref = localStorage.getItem('darkMode') === '1';
    setDarkMode(darkPref);
    darkToggle.checked = darkPref;
});