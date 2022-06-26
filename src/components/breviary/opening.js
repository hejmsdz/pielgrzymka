import React from 'react';
import K from '../k'
import W from '../w'

export default ({ alleluja = true }) => (
    <p>
        <K>† Boże, wejrzyj ku wspomożeniu memu.</K>
        <W>Panie, pośpiesz ku ratunkowi memu.</W>
        Chwała Ojcu i Synowi, i Duchowi Świętemu.
        <br />
        Jak była na początku, teraz i zawsze,
        <br />i na wieki wieków. Amen. {alleluja && 'Alleluja.'}
    </p>
);
