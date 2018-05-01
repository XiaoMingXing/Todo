import * as React from 'react';
import { hot } from 'react-hot-loader';


interface HelloProps {
  name: string;
}

class Title extends React.Component<HelloProps, {}> {
  render() {
    return <div>Hello, {this.props.name}</div>;
  }
}

// the hot function is to do the hot load
export default hot(module)(Title);

