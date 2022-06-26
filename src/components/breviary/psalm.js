import React from 'react';
import Antiphon from './antiphon';
import Multiline from '../multiline';

export default ({ no, antiphon, children }) => console.log(children) || (
    <section className='psalm'>
        <h2>Psalm {no}</h2>
        <Antiphon>{antiphon}</Antiphon>

        {React.Children.map(children, (verse) => (
            <p className='verse'>
                <Multiline>{verse}</Multiline>
            </p>
        ))}

        <Antiphon>{antiphon}</Antiphon>
    </section>
);
