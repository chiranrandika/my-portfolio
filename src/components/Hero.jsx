import { useState, useEffect } from 'react';
import chiranImg from '../assets/Chiran.jpg';

const Hero = () => {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY < 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      // Offset for fixed navbar
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      window.history.pushState({}, '', `/${targetId}`);
    }
  };

  return (
    <>
      <section
        id="hero"
        style={{ minHeight: 'calc(100dvh - 4rem)' }}
        className="flex flex-col items-center justify-center px-6 pt-8 pb-10 sm:pt-12 sm:pb-36 relative overflow-hidden"
      >
        {/* Background ambient glows & Decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Main central glow - changed to cyan theme */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-cyan-500/10 dark:bg-cyan-700/20 blur-3xl" />
          
          {/* Subtle floating shapes (Desktop Only) */}
          {/* Left side */}
          <div className="hidden lg:block absolute top-[20%] left-[2%] w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse" style={{ animationDuration: '6s' }} />
          <div className="hidden lg:block absolute bottom-[25%] left-[8%] w-56 h-56 bg-cyan-400/10 rounded-full blur-[80px] mix-blend-multiply dark:mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
          
          {/* Right side */}
          <div className="hidden lg:block absolute top-[30%] right-[3%] w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse" style={{ animationDuration: '7s' }} />
          <div className="hidden lg:block absolute bottom-[15%] right-[10%] w-64 h-64 bg-cyan-500/10 rounded-full blur-[90px] mix-blend-multiply dark:mix-blend-screen animate-pulse" style={{ animationDuration: '9s' }} />

          {/* Subtle geometric glass pattern fading from edges */}
          <div className="hidden xl:block absolute top-0 bottom-0 left-0 w-[20vw] opacity-[0.03] dark:opacity-[0.02] bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_right,black,transparent)]" />
          <div className="hidden xl:block absolute top-0 bottom-0 right-0 w-[20vw] opacity-[0.03] dark:opacity-[0.02] bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_left,black,transparent)]" />
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-8 sm:gap-12 z-10">
          
          {/* Left: Text Content */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left mt-4 md:mt-0">


            {/* Main heading */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-2 leading-tight tracking-tight">
              Chiran Randika
            </h1>



            {/* Tagline */}
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed mb-8 font-medium">
              Software Engineering &amp; Cyber Security Student
              <span className="mx-2 text-cyan-500">|</span>
              Vibe Coder
              <span className="mx-2 text-cyan-500">|</span>
              Full-Stack Developer
              <span className="mx-2 text-cyan-500">|</span>
              Content Creator
            </p>

            {/* Social Icons (Hero) */}
            <div className="flex gap-4 mb-10">
              <a href="https://web.facebook.com/chiran.randika.31/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-cyan-500/50 flex items-center justify-center text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
              </a>
              <a href="https://lk.linkedin.com/in/chiran-randika-b02751367" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-cyan-500/50 flex items-center justify-center text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://github.com/chiranrandika" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-cyan-500/50 flex items-center justify-center text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="/projects"
                onClick={(e) => handleNavClick(e, 'projects')}
                id="cta-view-work"
                className="px-7 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/30"
              >
                View My Work
              </a>
              <a
                href="/about"
                onClick={(e) => handleNavClick(e, 'about')}
                className="px-7 py-3 border border-gray-300 dark:border-gray-700 hover:border-cyan-500 dark:hover:border-cyan-500 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 rounded-xl font-semibold transition-all duration-300"
              >
                About Me
              </a>
            </div>
          </div>

          {/* Right: Profile photo (Pop-out Hexagon) */}
          <div className="flex-1 flex justify-center md:justify-end relative group px-6 sm:px-0">
            {/* SVG Definition for Rounded Hexagon */}
            <svg width="0" height="0" className="absolute">
              <defs>
                <clipPath id="rounded-hex" clipPathUnits="objectBoundingBox">
                  <path d="M.5 0 c.04 0 .08.01.11.03 l.33.19c.04.02.06.06.06.1v.36c0 .04-.02.08-.06.1l-.33.19c-.03.02-.07.03-.11.03s-.08-.01-.11-.03l-.33-.19C.02.76 0 .72 0 .68v-.36c0-.04.02-.08.06-.1l.33-.19C.42.01.46 0 .5 0z" />
                </clipPath>
                {/* A mask that is open at the top but hexagon at the bottom so the head can pop out */}
                <clipPath id="pop-out-mask" clipPathUnits="objectBoundingBox">
                  <path d="M 0 -0.2 L 1 -0.2 L 1 0.68 c 0 .04 -.02 .08 -.06 .1 l -.33 .19 c -.03 .02 -.07 .03 -.11 .03 s -.08 -.01 -.11 -.03 l -.33 -.19 C .02 .76 0 .72 0 .68 Z" />
                </clipPath>
              </defs>
            </svg>

            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 z-10 transition-transform duration-500 hover:scale-[1.02] mt-8 md:mt-12">
              
              {/* Cyan Glow behind Hexagon */}
              <div 
                className="absolute inset-0 bg-cyan-400 opacity-60 dark:opacity-50 blur-2xl md:blur-3xl transition-opacity duration-500 group-hover:opacity-80 dark:group-hover:opacity-70" 
                style={{ clipPath: 'url(#rounded-hex)', transform: 'scale(1.15)' }} 
              />
              
              {/* Solid Cyan Hexagon Background */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 z-0"
                style={{ clipPath: 'url(#rounded-hex)' }}
              />

              {/* Pop-out Image container */}
              <div 
                className="absolute inset-0 z-10 -top-12 scale-110"
                style={{ clipPath: 'url(#pop-out-mask)' }}
              >
                <img
                  src="/chiran_hero.png"
                  alt="Chiran Randika"
                  className="w-full h-full object-cover drop-shadow-2xl"
                  onError={(e) => {
                    // Fallback to old image if the new one isn't added yet
                    e.target.src = chiranImg;
                    e.target.className = "w-full h-full object-cover mt-10";
                  }}
                />
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Scroll indicator — desktop only, fades when scrolled */}
      <div
        className={`hidden sm:flex fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex-col items-center gap-1 text-gray-500 text-xs pointer-events-none transition-all duration-500 ${
          showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <span className="tracking-widest uppercase text-[10px]">Scroll</span>
        <div className="w-px h-6 bg-gradient-to-b from-gray-500 to-transparent" />
      </div>
    </>
  );
};

export default Hero;
