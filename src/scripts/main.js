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
    const html = document.querySelector('html');
    const htmlData = html.dataset;
    const button = document.getElementById('themeSwitch');

    if (localStorage.theme) {
        htmlData.theme = localStorage.theme;
    }

    setTimeout(() => html.classList.add('loaded'));

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

    const setFontSize = (diff = 0) => {
        fontSize += diff;
        localStorage.fontSize = fontSize;
        docStyle.setProperty('--font-size', `${fontSize}px`)
    };

    setFontSize();

    zoomInButton.addEventListener('click', () => {
        if (fontSize < 32) {
            setFontSize(+1);
        }
    });

    zoomOutButton.addEventListener('click', () => {
        if (fontSize > 10) {
            setFontSize(-1);
        }
    });

}

registerServiceWorker();
setupThemeSwitch();
setupZoom();
