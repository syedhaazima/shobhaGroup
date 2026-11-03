import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Sectors from './pages/Sectors';
import SectorDetail from './pages/SectorDetail';
import Leadership from './pages/Leadership';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './styles/global.css';
import './styles/pages.css';
import './styles/sectors.css';

// Loading fallback
const PageLoader = () => (
  <div style={{
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--dark)',
    flexDirection: 'column',
    gap: '1.25rem'
  }}>
    <div style={{
      width: '48px',
      height: '48px',
      border: '3px solid rgba(212,175,106,0.15)',
      borderTop: '3px solid var(--gold)',
      borderRadius: '50%',
      animation: 'spin 0.9s linear infinite'
    }} />
    <p style={{ color: 'var(--grey)', fontSize: '0.88rem', letterSpacing: '0.15em' }}>
      SHOBHA GROUP
    </p>
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/sectors" element={<Sectors />} />
              <Route path="/sectors/:slug" element={<SectorDetail />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
