import Multiline from "./multiline";

export default ({ children }) => {
  return (
    <section className="lyrics">
      {React.Children.map(children, (verse) => (
        <Multiline>{verse}</Multiline>
      ))}
    </section>
  );
};
