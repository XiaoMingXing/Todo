import * as React from 'react';
import { hot } from 'react-hot-loader';


interface HelloProps {
  name: string;
}

class Title extends React.Component<HelloProps, {}> {
  render() {
    return <div>Hello aaa, {this.props.name}</div>;
  }
}

export default hot(module)(Title);

