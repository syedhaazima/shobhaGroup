import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

// Scroll to top on route change
const RouteScrollReset = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const MainLayout = () => {
  return (
    <>
      <RouteScrollReset />
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default MainLayout;
