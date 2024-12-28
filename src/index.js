import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: 'https://app-7opfi0wtc3th.frontegg.com',
  clientId: '61e663d8-b06c-4f79-bff6-afa00be1a449',
  appId: 'a6b94369-840e-4e70-aa38-d9177b8b4680'
};

console.log("index");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true}>
      <App />
    </FronteggProvider>
  </React.StrictMode>
);