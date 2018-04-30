import * as React from 'react';
import button from 'antd/lib/button';
import 'antd/lib/button/style/css';
import Wow from './Wow';

interface AppProps {
  message: string;
}

export default function ({ message }: AppProps) {
  return (
    <div>
      <h1>Hello ABCD {message}</h1>
      <button type="primary"> Test Xiaomixing</button>
      <Wow/>
    </div>
  );
}
