import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Correct relative path for App.tsx
import './index.css'; // Correct relative path for index.css

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

