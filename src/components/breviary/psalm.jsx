import Antiphon from "./antiphon";
import Tone from "./tone";
import Multiline from "../multiline";

export default ({ no, antiphon, tone, children }) => (
  <section className="psalm">
    {tone && <Tone no={tone} />}
    <h2>Psalm {no}</h2>
    <Antiphon>{antiphon}</Antiphon>
    {React.Children.map(children, (verse) => (
      <Multiline className="verse">{verse}</Multiline>
    ))}
    <Antiphon>{antiphon}</Antiphon>
  </section>
);
