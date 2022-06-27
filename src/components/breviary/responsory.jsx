import K from '../k';
import W from '../w';

export default ({ a, b, c }) => (
    <section>
        <h2>Responsorium krótkie</h2>
        <K>{a}{b && ` * ${b}`}</K>
        <W>{a}{b && ` / ${b}`}</W>
        <K>{c}</K>
        <W>{b || a}</W>
        <K>Chwała Ojcu i Synowi, i Duchowi Świętemu.</K>
        <W>{a}{b && ` / ${b}`}</W>
    </section>
);
