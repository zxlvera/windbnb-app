import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StaysProvider } from './context';

ReactDOM.render(
<StaysProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
</StaysProvider>,
  document.getElementById('root')
);

