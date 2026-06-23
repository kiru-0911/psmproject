import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import PrivacyPolicy from './PrivacyPolicy.tsx';
import TermsAndConditions from './TermsAndConditions.tsx';
import './index.css';

function Router() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  if (path === '/privacy-policy') return <PrivacyPolicy />;
  if (path === '/terms-and-conditions') return <TermsAndConditions />;
  return <App />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
