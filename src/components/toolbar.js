import React from 'react';
import { useThemeContext } from '../components/theme-provider';
import IconDark from '../images/dark.svg';
import IconLight from '../images/light.svg';
import IconZoomIn from '../images/zoom_in.svg';
import IconZoomOut from '../images/zoom_out.svg';
import { usePreloadingContext } from './preloading-provider';


export default () => {
    const { theme, setTheme, fontSize, zoomIn, zoomOut } = useThemeContext();
    const { total, fetched } = usePreloadingContext();

    return (
        <div className='toolbar'>
            {theme === 'dark' ?
                <button type="button" onClick={() => setTheme('light')}><IconDark /></button>
                :
                <button type="button" onClick={() => setTheme('dark')}><IconLight /></button>}
            <button type="button" onClick={zoomIn} disabled={fontSize >= 32}><IconZoomIn /></button>
            <button type="button" onClick={zoomOut} disabled={fontSize <= 10}><IconZoomOut /></button>
            <div class="pie" style={{ '--angle': `${(fetched / total) * 360}deg` }} />
        </div>
    );
};
