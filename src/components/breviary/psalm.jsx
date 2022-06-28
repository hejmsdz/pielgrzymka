import Antiphon from "./antiphon";
import Multiline from "../multiline";

export default ({ no, antiphon, children }) => (
  <section className="psalm">
    <h2>Psalm {no}</h2>
    <Antiphon>{antiphon}</Antiphon>

    {React.Children.map(children, (verse) => (
      <Multiline className="verse">{verse}</Multiline>
    ))}

    <Antiphon>{antiphon}</Antiphon>
  </section>
);
