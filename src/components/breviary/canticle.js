import React from 'react';
import Antiphon from './antiphon';
import Multiline from '../multiline';

export default ({ title, src, antiphon, noGloria, children }) => (
    <section className='canticle'>
        {title ? <h2>{title}</h2> : <h2>Pieśń ({src})</h2>}
        <Antiphon>{antiphon}</Antiphon>

        {React.Children.map(children, (verse) => (
            <p className='verse'>
                <Multiline>{verse}</Multiline>
            </p>
        ))}

        {noGloria && (<p className='comment'>Na końcu tej pieśni nie mówi się Chwała Ojcu.</p>)}

        <Antiphon>{antiphon}</Antiphon>
    </section>
);
