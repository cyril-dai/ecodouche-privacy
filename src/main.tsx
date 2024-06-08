import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import '@i18n/i18n';

import App from './app/App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
