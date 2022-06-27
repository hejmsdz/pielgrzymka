export default ({ children }) => React.Children.toArray(children.props.children)
    .join('')
    .split('\n').map(line => <div>{line}</div>);
