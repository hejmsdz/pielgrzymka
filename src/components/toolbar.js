import React, { useState, useEffect, useCallback } from 'react';
import IconDark from '../images/dark.svg';
import IconLight from '../images/light.svg';
import IconZoomIn from '../images/zoom_in.svg';
import IconZoomOut from '../images/zoom_out.svg';

const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState((typeof 'localstorage' === 'undefined' && localStorage[key]) || defaultValue);

    useEffect(() => {
        localStorage[key] = value;
    }, [value]);

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
    const [fontSize, setFontSize] = useLocalStorage('fontSize', 18);

    useEffect(() => {
        document.documentElement.style.setProperty('--font-size', `${fontSize}px`);
    }, [fontSize]);

    const zoomIn = useCallback(() => setFontSize(size => Number(size) + 1));
    const zoomOut = useCallback(() => setFontSize(size => Number(size) - 1));

    return [Number(fontSize), zoomIn, zoomOut];
};

export default () => {
    const [theme, setTheme] = useTheme();
    const [fontSize, zoomIn, zoomOut] = useFontSize();

    return (
        <div className='toolbar'>
            {theme === 'dark' ?
                <button type="button" className='outline' onClick={() => setTheme('light')}><IconDark /></button>
                :
                <button type="button" className='outline' onClick={() => setTheme('dark')}><IconLight /></button>}
            <button type="button" className='outline' onClick={zoomIn} disabled={fontSize >= 32}><IconZoomIn /></button>
            <button type="button" className='outline' onClick={zoomOut} disabled={fontSize <= 10}><IconZoomOut /></button>
        </div>
    );
};
