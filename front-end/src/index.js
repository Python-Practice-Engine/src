import React from 'react';
import ReactDOM from 'react-dom';
import GNavbar from './components/GNavbar';
import './style/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "antd/dist/antd.css";


ReactDOM.render(
  <React.StrictMode>
    <GNavbar />
  </React.StrictMode>,
  document.getElementById('root')
);
