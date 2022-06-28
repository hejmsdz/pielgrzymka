export default ({ className, children }) => (
  <p className={className}>
    {React.Children.toArray(children.props.children)
      .join("")
      .split("\n")
      .map((line) => (
        <>
          {line}
          <br />
        </>
      ))}
  </p>
);
