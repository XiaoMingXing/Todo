import * as React from 'react';
import { hot } from 'react-hot-loader';


class Button extends React.Component<{}, {}> {
  render() {
    return <div>
      <button>submit xiaomingxing</button>
    </div>;
  }
}

export default hot(module)(Button);
