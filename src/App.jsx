import { useState, useEffect, useRef } from 'react';
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

// Searchable items — sections + keywords
const searchItems = [
  { label: 'Home',             targetId: 'hero',     keywords: ['home', 'hero', 'top', 'start'] },
  { label: 'About Me',         targetId: 'about',    keywords: ['about', 'bio', 'me', 'who', 'chiran', 'ratnapura', 'susl', 'icbt', 'skills'] },
  { label: 'Projects',         targetId: 'projects', keywords: ['projects', 'work', 'lankaskill', 'restaurant', 'php', 'react'] },
  { label: 'YouTube Channels', targetId: 'youtube',  keywords: ['youtube', 'video', 'channel', 'hela', 'tech', 'roots', 'sinhala'] },
  { label: 'Contact Me',       targetId: 'contact',  keywords: ['contact', 'email', 'message', 'reach', 'hire', 'footer'] },
];

function App() {
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [theme,      setTheme]      = useState('light');
  const [searchOpen, setSearchOpen] = useState(false);
  const [query,      setQuery]      = useState('');
  const searchInputRef     = useRef(null);
  const searchContainerRef = useRef(null);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Focus input when search opens
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Close search on Escape or click outside
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') closeSearch(); };
    const handleClickOutside = (e) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        closeSearch();
      }
    };
    document.addEventListener('keydown', handleKey);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const toggleTheme  = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
  const closeSearch  = () => { setSearchOpen(false); setQuery(''); };
  const openSearch   = () => setSearchOpen(true);

  // Filter results
  const results = query.trim().length > 0
    ? searchItems.filter(item =>
        item.label.toLowerCase().includes(query.toLowerCase()) ||
        item.keywords.some(k => k.includes(query.toLowerCase()))
      )
    : [];

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (targetId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState({}, '', '/');
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.scrollY - 64;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        window.history.pushState({}, '', `/${targetId}`);
      }
    }
    closeMenu();
  };

  const handleSearchSelect = (targetId) => {
    closeSearch();
    if (targetId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState({}, '', '/');
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.scrollY - 64;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        window.history.pushState({}, '', `/${targetId}`);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300">

      {/* ── Sticky Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800/60 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">

          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, 'hero')}
            className="text-lg font-extrabold text-gray-900 dark:text-white transition-colors duration-300 flex-shrink-0"
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
          <div className="flex items-center gap-2 sm:gap-3">

            {/* ── Search ── */}
            <div ref={searchContainerRef} className="relative flex items-center">

              {/* Expanding input */}
              <div
                className={`flex items-center overflow-hidden rounded-full border transition-all duration-300 ease-in-out bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 ${
                  searchOpen
                    ? 'w-40 sm:w-52 md:w-64 pl-4 pr-2 opacity-100'
                    : 'w-0 opacity-0 border-transparent'
                }`}
              >
                <input
                  ref={searchInputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search sections..."
                  className="w-full bg-transparent text-sm text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none py-1.5"
                />
                {query && (
                  <button
                    onClick={() => setQuery('')}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 flex-shrink-0 ml-1"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Search / Close icon */}
              <button
                onClick={searchOpen ? closeSearch : openSearch}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-cyan-100 hover:text-cyan-600 dark:hover:bg-cyan-900/40 dark:hover:text-cyan-400 transition-colors duration-200 focus:outline-none flex-shrink-0"
                aria-label={searchOpen ? 'Close search' : 'Open search'}
              >
                {searchOpen ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                  </svg>
                )}
              </button>

              {/* Results dropdown */}
              {searchOpen && query.trim().length > 0 && (
                <div className="absolute top-12 right-0 w-56 sm:w-64 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl overflow-hidden z-50">
                  {results.length > 0 ? (
                    results.map((item) => (
                      <button
                        key={item.targetId}
                        onClick={() => handleSearchSelect(item.targetId)}
                        className="w-full text-left px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-cyan-50 dark:hover:bg-cyan-900/30 hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors duration-150 flex items-center gap-2 border-b border-gray-100 dark:border-gray-800 last:border-0"
                      >
                        <svg className="w-4 h-4 text-cyan-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        {item.label}
                      </button>
                    ))
                  ) : (
                    <div className="px-4 py-4 text-sm text-gray-400 dark:text-gray-500 text-center">
                      No results found
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none flex-shrink-0"
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

            {/* Hamburger — mobile only */}
            <button
              id="hamburger-btn"
              className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 focus:outline-none flex-shrink-0"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <span className={`block h-0.5 w-6 bg-gray-600 dark:bg-gray-300 rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 w-6 bg-gray-600 dark:bg-gray-300 rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-gray-600 dark:bg-gray-300 rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
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
