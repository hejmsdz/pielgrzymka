import React from 'react';

export default ({ verses }) => {
    return (
        <section className='lyrics'>
            {verses.map(verse => (
                <p>
                    {verse.split('\n').map(line => <>{line}<br /></>)}
                </p>
            ))}
        </section>
    );
};
