import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Youtube from './components/Youtube';
import Footer from './components/Footer';

const navLinks = [
  { label: 'Home',     href: '/',        targetId: 'hero'     },
  { label: 'About',    href: '/about',   targetId: 'about'    },
  { label: 'Projects', href: '/projects',targetId: 'projects' },
  { label: 'YouTube',  href: '/youtube', targetId: 'youtube'  },
  { label: 'Contact',  href: '/contact', targetId: 'contact'  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Custom click handler to smooth scroll and update URL without #
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    
    if (targetId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState({}, '', '/');
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        // Scroll with 64px offset for the fixed navbar
        const offsetTop = element.getBoundingClientRect().top + window.scrollY - 64;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        window.history.pushState({}, '', `/${targetId}`);
      }
    }
    closeMenu();
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300">

      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800/60 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo — scrolls to true page top */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, 'hero')}
            className="text-lg font-extrabold text-gray-900 dark:text-white transition-colors duration-300"
          >
            chiranrandika.me
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.targetId)}
                className="text-gray-600 hover:text-cyan-600 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>

            {/* Hamburger button — mobile only */}
            <button
              id="hamburger-btn"
              className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-gray-600 dark:bg-gray-300 rounded-full transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-600 dark:bg-gray-300 rounded-full transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-600 dark:bg-gray-300 rounded-full transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white dark:bg-gray-950 ${
            menuOpen ? 'max-h-96 opacity-100 border-b border-gray-200 dark:border-gray-800' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col border-t border-gray-200 dark:border-gray-800/60">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.targetId)}
                className={`text-center py-3.5 text-sm font-medium text-gray-600 hover:text-cyan-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-cyan-400 dark:hover:bg-cyan-500/5 transition-all duration-200 ${
                  index !== navLinks.length - 1 ? 'border-b border-gray-200 dark:border-gray-800/60' : ''
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Page Sections */}
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Youtube />
      </main>

      <Footer />
    </div>
  );
}

export default App;
