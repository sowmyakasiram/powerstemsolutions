import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';

type Page = 'home' | 'services' | 'contact' | 'about';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    // Set initial page based on URL
    const path = window.location.pathname;
    if (path === '/services') {
      setCurrentPage('services');
    } else if (path === '/contact') {
      setCurrentPage('contact');
    } else if (path === '/about') {
      setCurrentPage('about');
    } else {
      setCurrentPage('home');
    }

    // Listen for custom route change events
    const handleRouteChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ href: string }>;
      const href = customEvent.detail.href;

      if (href === '/') {
        setCurrentPage('home');
      } else if (href === '/services') {
        setCurrentPage('services');
      } else if (href === '/contact') {
        setCurrentPage('contact');
      } else if (href === '/about') {
        setCurrentPage('about');
      }

      // Scroll to top on page change
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('routechange', handleRouteChange);

    // Handle browser back/forward buttons
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/services') {
        setCurrentPage('services');
      } else if (path === '/contact') {
        setCurrentPage('contact');
      } else if (path === '/about') {
        setCurrentPage('about');
      } else {
        setCurrentPage('home');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('routechange', handleRouteChange);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'services':
        return <ServicesPage />;
      case 'contact':
        return <ContactPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;