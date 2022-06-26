import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ThemeContext = createContext();

const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState((typeof 'localstorage' !== 'undefined' && localStorage[key]) || defaultValue);

    useEffect(() => {
        localStorage[key] = value;
    }, [key, value]);

    return [value, setValue];
};

const useTheme = () => {
    const [theme, setTheme] = useLocalStorage('theme', 'light');

    useEffect(() => {
        document.querySelector('html').dataset.theme = theme;
    }, [theme]);

    return [theme, setTheme];
};

const useFontSize = () => {
    const [fontSize, setFontSize] = useLocalStorage('fontSize', '18');

    useEffect(() => {
        document.documentElement.style.setProperty('--font-size', `${fontSize}px`);
    }, [fontSize]);

    const zoomIn = useCallback(() => setFontSize(size => Number(size) + 1));
    const zoomOut = useCallback(() => setFontSize(size => Number(size) - 1));

    return [Number(fontSize), zoomIn, zoomOut];
};

export default ({ children }) => {
    const [theme, setTheme] = useTheme();
    const [fontSize, zoomIn, zoomOut] = useFontSize('fontSize');

    return (
        <ThemeContext.Provider value={{ theme, setTheme, fontSize, zoomIn, zoomOut }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => useContext(ThemeContext);
