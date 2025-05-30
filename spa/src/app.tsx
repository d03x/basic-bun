import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './Root';
const root = ReactDOM.createRoot(document.getElementById('app') as any);

root.render(
  <React.StrictMode>
    <Root/>
  </React.StrictMode>
);