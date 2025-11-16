const btn = document.getElementById('themeToggle');

function getStoredPreference() {
    try {
        return localStorage.getItem('theme-preference');
    } catch (e) {
        return null;
    }
}

function storePreference(value) {
    try {
        localStorage.setItem('theme-preference', value);
    } catch (e) {
        return null;
    }
}

function applyTheme(theme) {
    const isDark = theme === 'dark';
    document.body.classList.toggle('dark-theme', isDark);
    if (btn) {
        const icon = btn.querySelector('.theme-toggle_icon');
        if (isDark) {
            if (icon) icon.textContent = '☀️';
        } else {
            if (icon) icon.textContent = '🌙';
        }
    }
}

function init() {
    const stored = getStoredPreference();
    const initial = stored || 'light';
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

