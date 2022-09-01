import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider domain='dev-fhi-bnh5.us.auth0.com' clientId='XUj8jG1eLAdtG78bT2AwVdmAcYmztiXx' redirectUri={ window.location.origin }>
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

