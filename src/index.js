import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from "react-auth-kit";
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider
      domain="dev-pex3oxbxmwhhmn5o.us.auth0.com"
      clientId="dedFIFB7fl8c1pm38aLTQCxYqebYDfpJ"
      authType={"cookie"}
      authName={"_auth"}
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);


reportWebVitals();