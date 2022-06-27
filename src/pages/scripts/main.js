function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').then((registration) => {
            console.log('sw register', registration);
        });
    } else {
        console.log('service workers not supported');
    }
}

function setupThemeSwitch() {
    const htmlData = document.querySelector('html').dataset;
    const button = document.getElementById('themeSwitch');

    if (localStorage.theme) {
        htmlData.theme = localStorage.theme;
    }

    button.addEventListener('click', () => {
        const isDark = htmlData.theme === 'dark';
        const newTheme = isDark ? 'light' : 'dark';
        htmlData.theme = newTheme;
        localStorage.theme = newTheme;
    });
}

function setupZoom() {
    const docStyle = document.documentElement.style;
    const zoomInButton = document.getElementById('zoomIn');
    const zoomOutButton = document.getElementById('zoomOut');
    let fontSize = Number(localStorage.fontSize) || 18;

    const setFontSize = () => docStyle.setProperty('--font-size', `${fontSize}px`);

    setFontSize();

    zoomInButton.addEventListener('click', () => {
        if (fontSize < 32) {
            fontSize++;
            setFontSize();
        }
    });

    zoomOutButton.addEventListener('click', () => {
        if (fontSize > 10) {
            fontSize--;
            setFontSize();
        }
    });

}

registerServiceWorker();
setupThemeSwitch();
setupZoom();
