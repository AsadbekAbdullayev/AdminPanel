import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './root/index';
import "antd/dist/antd.css";
import { ColorProvider } from './context/color';
import {BrowserRouter } from 'react-router-dom'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ColorProvider>
      <Root />
    </ColorProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


