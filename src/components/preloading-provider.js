import React, { createContext, useContext, useEffect, useState } from 'react';
import { prefetchPathname } from 'gatsby';
import { days } from '../contents';

const PreloadingContext = createContext();

export default ({ children }) => {
    const [total, setTotal] = useState(0);
    const [fetched, setFetched] = useState(0);

    useEffect(() => {
        const links = days.flatMap(day => day.links);
        setTotal(links.length);
        const promises = links
            .map(link => console.log('fetching', link.path) || prefetchPathname(link.path)
                .then(() => {
                    setFetched(value => value + 1);
                    console.log('DONE', link.path);
                }));
        Promise.all(promises).then(() => console.log('all done!'));

        return () => console.log('unmounted');
    }, []);

    return (
        <PreloadingContext.Provider value={{ total, fetched }}>
            {children}
        </PreloadingContext.Provider>
    );
};

export const usePreloadingContext = () => useContext(PreloadingContext) || {};
