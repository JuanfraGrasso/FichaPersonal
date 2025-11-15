const STORAGE_KEY = 'theme-preference';
const btn = document.getElementById('themeToggle');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

function getStoredPreference() {
    try {
        return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
        return null;
    }
}

function storePreference(value) {
    try {
        localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {
        return null;
    }
}

function applyTheme(theme) {
    const isDark = theme === 'dark';
    document.body.classList.toggle('dark-theme', isDark);
    if (btn) {
        const icon = btn.querySelector('.theme-toggle__icon');
        const text = btn.querySelector('.theme-toggle__text');
        if (isDark) {
            if (icon) icon.textContent = '☀️';
        } else {
            if (icon) icon.textContent = '🌙';
        }
    }
}

function init() {
    const stored = getStoredPreference();
    const initial = stored || (prefersDark ? 'dark' : 'light');
    applyTheme(initial);
    if (btn) {
        btn.addEventListener('click', () => {
            const isDark = document.body.classList.contains('dark-theme');
            const next = isDark ? 'light' : 'dark';
            applyTheme(next);
            storePreference(next);
        });
    }
}

init();

