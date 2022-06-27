import React, { useEffect, useState } from 'react';
import { useThemeContext } from '../components/theme-provider';
import IconDark from '../images/dark.svg';
import IconLight from '../images/light.svg';
import IconZoomIn from '../images/zoom_in.svg';
import IconZoomOut from '../images/zoom_out.svg';
import IconDone from '../images/done.svg';
import IconLoading from '../images/loading.svg';

const useServiceWorker = () => {
    const [state, setState] = useState('none');

    useEffect(() => {
        if (typeof navigator === 'undefined' || !navigator.serviceWorker) {
            return;
        }

        if (!navigator.serviceWorker.controller) {
            setState('loading');
        }

        navigator.serviceWorker.ready.then(() => {
            console.log('controller ready!');
            setState('ready');
        });
    }, []);

    return state;
};

export default () => {
    const { theme, setTheme, fontSize, zoomIn, zoomOut } = useThemeContext();
    const serviceWorkerState = useServiceWorker();

    return (
        <div className='toolbar'>
            {theme === 'dark' ?
                <button type="button" onClick={() => setTheme('light')}><IconDark /></button>
                :
                <button type="button" onClick={() => setTheme('dark')}><IconLight /></button>}
            <button type="button" onClick={zoomIn} disabled={fontSize >= 32}><IconZoomIn /></button>
            <button type="button" onClick={zoomOut} disabled={fontSize <= 10}><IconZoomOut /></button>
            {serviceWorkerState === 'ready' && <button type="button"><IconDone /></button>}
            {serviceWorkerState === 'loading' && <button type="button"><IconLoading className="spin" /></button>}
        </div>
    );
};
