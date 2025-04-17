// language.js

function setLanguage(lang) {
    localStorage.setItem('langPreference', lang);
}

// Highlight the current language
document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;
    const langIt = document.getElementById('lang-it');
    const langEn = document.getElementById('lang-en');

    if (langIt && langEn) {
        if (currentPath.includes('index-en')) {
            langEn.classList.add('active');
        } else {
            langIt.classList.add('active');
        }
    }

    // Redirect only on first visit if no preference is set
    const langPref = localStorage.getItem('langPreference');
    if (!langPref) {
        const userLang = navigator.language || navigator.userLanguage;
        if (userLang.startsWith('en') && !currentPath.includes('index-en')) {
            window.location.href = 'index-en.html';
        }
    }
});