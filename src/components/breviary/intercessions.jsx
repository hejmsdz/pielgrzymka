export default ({ response, children }) => (
  <section>
    <h2>Prośby</h2>
    {React.Children.map(children, (intercession) => (
      <p className="intercession">
        {intercession.props.children}
        <br />
        <span className="response">{response}</span>
      </p>
    ))}
    Ojcze nasz&hellip;
  </section>
);
