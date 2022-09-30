export default ({ className, children }) =>
  (children.props.mdxType === "p" || !children.props.mdxType) ? (
    <p className={className}>
      {React.Children.toArray(children.props.children)
        .filter((child) => child)
        .join("")
        .split("\n")
        .map((line) => (
          <>
            {line}
            <br />
          </>
        ))}
    </p>
  ) : (
    <p className={className}>
      {children}
    </p>
  );
