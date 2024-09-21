import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ClerkProvider } from '@clerk/clerk-react';

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

console.log('Clerk Key:', clerkPubKey); // Add this line to check the key

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClerkProvider 
      publishableKey={clerkPubKey}
      onError={(error) => console.error('Clerk Error:', error)} // Add this line
    >
      <App />
    </ClerkProvider>
  </React.StrictMode>
);

reportWebVitals();