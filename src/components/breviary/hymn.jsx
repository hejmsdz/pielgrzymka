import Multiline from "../multiline";

export default ({ children }) => (
  <section>
    <h2>Hymn</h2>
    {React.Children.map(children, (verse) => (
      <Multiline className="verse">{verse}</Multiline>
    ))}
  </section>
);
