import React from 'react';
import ReactDOM from 'react-dom';
import { AlertContextProvider } from './contexts/AlertContext';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <AlertContextProvider>
      <App />
    </AlertContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();