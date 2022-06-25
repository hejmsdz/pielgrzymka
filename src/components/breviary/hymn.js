import React from 'react';

export default ({ children }) => (
    <section>
        <h2>Hymn</h2>
        {React.Children.map(children, verse => (
            <p className='verse'>{verse.props.children.split('\n').map(line => (
                <>{line}<br /></>
            ))}</p>
        ))}
    </section>
);
