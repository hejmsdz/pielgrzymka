import Antiphon from "./antiphon";
import Tone from "./tone";
import Multiline from "../multiline";

export default ({ title, src, antiphon, tone, noGloria, children }) => (
  <section className="psalm">
    {title ? <h2>{title}</h2> : <h2>Pieśń ({src})</h2>}
    {tone && <Tone no={tone} />}
    <Antiphon>{antiphon}</Antiphon>

    {React.Children.map(children, (verse) => (
      <Multiline className="verse">{verse}</Multiline>
    ))}

    {noGloria && (
      <p className="comment">Na końcu tej pieśni nie mówi się Chwała Ojcu.</p>
    )}

    <Antiphon>{antiphon}</Antiphon>
  </section>
);
