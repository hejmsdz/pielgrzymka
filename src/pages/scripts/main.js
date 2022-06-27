if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then((registration) => {
        console.log('sw register', registration);
    });
} else {
    console.log('service workers not supported');
}
