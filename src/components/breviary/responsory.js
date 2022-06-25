import React from 'react';

export default ({ a, b, c }) => (
    <section>
        <h2>Responsorium krótkie</h2>
        <div class="k">{a} * {b}</div>
        <div class="w">{a} / {b}</div>
        <div class="k">{c}</div>
        <div class="w">{b}</div>
        <div class="k">Chwała Ojcu i Synowi, i Duchowi Świętemu</div>
        <div class="w">{a} / {b}</div>
    </section>
);
