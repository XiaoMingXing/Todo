import * as React from 'react';

interface HelloProps {
  name: string;
}

class Title extends React.Component<HelloProps, {}> {
  render() {
    return <div>Hello aaaa, {this.props.name}</div>;
  }
}

export default Title;
