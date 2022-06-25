import React from 'react';
import Antiphon from './antiphon';

export default ({ title, src, antiphon, noGloria, children }) => (
    <section className='canticle'>
        {title ? <h2>{title}</h2> : <h2>Pieśń ({src})</h2>}
        <Antiphon>{antiphon}</Antiphon>

        {React.Children.map(children, (verse) => (
            <p className='verse'>{typeof verse.props.children === 'string' ? (
                verse.props.children.split('\n').map(line => <>{line}<br /></>)
            ) : React.Children.map(verse.props.children, node => (
                <span>{node}{node === '*' && <br />}</span>
            ))}</p>
        ))}

        {noGloria && (<p className='comment'>Na końcu tej pieśni nie mówi się Chwała Ojcu.</p>)}

        <Antiphon>{antiphon}</Antiphon>
    </section>
);
