import React from 'react';

import ReactDOM from 'react-dom';

// Style imports
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/icecoder.css';
import './style/style.css';

// Component imports
import Outline from './components/Outline';

ReactDOM.render(
  <React.StrictMode>
    <Outline />
  </React.StrictMode>,
  document.getElementById('root'),
);
