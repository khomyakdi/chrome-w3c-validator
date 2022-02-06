import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AppBehavior} from './AppBehavior';

ReactDOM.render(
  <React.StrictMode>
    <AppBehavior>
      <App />
    </AppBehavior>
  </React.StrictMode>,
  document.getElementById('root')
);
