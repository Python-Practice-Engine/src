import React from 'react';
import ReactDOM from 'react-dom';

// Style imports
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/mdn-like.css';
import './style/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

// Personal component import
import Outline from './components/Outline';

ReactDOM.render(
  <React.StrictMode>
    <Outline />
  </React.StrictMode>,
  document.getElementById('root'),
);
