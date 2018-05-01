import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/App';
import { sum } from './foo';

ReactDOM.render(
  <App message="World"/>,
  document.getElementById('root'),
);

console.log(sum(1, 2).toString());

