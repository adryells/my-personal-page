import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n';
import { registerSW } from 'virtual:pwa-register';

// register service worker for PWA
registerSW({
  onNeedRefresh() {},
  onOfflineReady() {}
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
