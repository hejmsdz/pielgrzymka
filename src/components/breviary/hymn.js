import React from 'react';
import Multiline from '../multiline';

export default ({ children }) => (
    <section>
        <h2>Hymn</h2>
        {React.Children.map(children, verse => (
            <p className='verse'>
                <Multiline>{verse}</Multiline>
            </p>
        ))}
    </section>
);
