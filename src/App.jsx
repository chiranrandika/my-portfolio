import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Youtube from './components/Youtube';
import Footer from './components/Footer';

const navLinks = [
  { label: 'Home',     href: '#hero'     },
  { label: 'About',    href: '#about'    },
  { label: 'Projects', href: '#projects' },
  { label: 'YouTube',  href: '#youtube'  },
  { label: 'Contact',  href: '#contact'  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">

      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800/60">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo — scrolls to true page top */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              closeMenu();
            }}
            className="text-lg font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
          >
            chiranrandika.me
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-indigo-400 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Hamburger button — mobile only */}
          <button
            id="hamburger-btn"
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-gray-300 rounded-full transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-300 rounded-full transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-300 rounded-full transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile dropdown menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col border-t border-gray-800/60">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className={`text-center py-3.5 text-sm font-medium text-gray-400 hover:text-indigo-400 hover:bg-indigo-500/5 transition-all duration-200 ${
                  index !== navLinks.length - 1 ? 'border-b border-gray-800/60' : ''
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
