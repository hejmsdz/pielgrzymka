import React from 'react';

export default ({ response, children }) => (
    <section>
        <h2>Prośby</h2>
        {React.Children.map(children, intercession => (
            <p className='intercession'>
                {intercession.props.children}
                <div className='response'>{response}</div>
            </p>
        ))}
        Ojcze nasz&hellip;
    </section>
);
