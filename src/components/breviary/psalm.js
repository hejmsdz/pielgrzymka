import React from 'react';
import Antiphon from './antiphon';

export default ({ no, antiphon, children }) => (
    <section className='psalm'>
        <h2>Psalm {no}</h2>
        <Antiphon>{antiphon}</Antiphon>

        {React.Children.map(children, (verse) => (
            <p className='verse'>{React.Children.map(verse.props.children, node => (
                <span>{node}{(node === '*' || node.endsWith('†')) && <br />}</span>
            ))}</p>
        ))}

        <Antiphon>{antiphon}</Antiphon>
    </section>
);
