
import { useEffect, useState } from 'react';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ProductPage } from './pages/product';
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';

type Page = 'home' | 'services' | 'contact' | 'about' | 'product';

const getPageFromPath = (path: string): Page => {
  switch (path) {
    case '/services':
      return 'services';
    case '/product':
      return 'product';
    case '/contact':
      return 'contact';
    case '/about':
      return 'about';
    default:
      return 'home';
  }
};

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(() =>
    getPageFromPath(window.location.pathname)
  );

  useEffect(() => {
    const handleRouteChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ href: string }>;
      const href = customEvent.detail.href;

      window.history.pushState({}, '', href);
      setCurrentPage(getPageFromPath(href));

      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handlePopState = () => {
      setCurrentPage(getPageFromPath(window.location.pathname));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('routechange', handleRouteChange);
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

      case 'product':
        return <ProductPage />;

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
