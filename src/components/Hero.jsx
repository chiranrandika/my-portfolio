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
        className="flex flex-col items-center justify-start sm:justify-center text-center px-6 pt-8 pb-10 sm:pt-12 sm:pb-36 relative overflow-hidden"
      >
        {/* Background ambient glows & Decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Main central glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-indigo-700/20 blur-3xl" />
          
          {/* Subtle floating shapes (Desktop Only) */}
          {/* Left side */}
          <div className="hidden lg:block absolute top-[20%] left-[2%] w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] mix-blend-screen animate-pulse" style={{ animationDuration: '6s' }} />
          <div className="hidden lg:block absolute bottom-[25%] left-[8%] w-56 h-56 bg-cyan-600/10 rounded-full blur-[80px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
          
          {/* Right side */}
          <div className="hidden lg:block absolute top-[30%] right-[3%] w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '7s' }} />
          <div className="hidden lg:block absolute bottom-[15%] right-[10%] w-64 h-64 bg-fuchsia-600/10 rounded-full blur-[90px] mix-blend-screen animate-pulse" style={{ animationDuration: '9s' }} />

          {/* Subtle geometric glass pattern fading from edges */}
          <div className="hidden xl:block absolute top-0 bottom-0 left-0 w-[20vw] opacity-[0.02] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_right,black,transparent)]" />
          <div className="hidden xl:block absolute top-0 bottom-0 right-0 w-[20vw] opacity-[0.02] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_left,black,transparent)]" />
        </div>

        {/* Profile photo */}
        <div className="relative mb-8 sm:mb-10">
          <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full p-[3px] bg-gradient-to-br from-indigo-400 via-purple-400 to-cyan-400 shadow-2xl shadow-indigo-700/40">
            <img
              src={chiranImg}
              alt="Chiran Randika"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <span className="absolute bottom-1 right-1 w-4 h-4 sm:w-5 sm:h-5 bg-green-400 border-2 border-gray-950 rounded-full" />
        </div>

        {/* Greeting pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-8 sm:mb-10 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-indigo-400 inline-block" />
          Welcome to my portfolio
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-5 sm:mb-6 leading-tight tracking-tight">
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Chiran Randika
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-12 sm:mb-14">
          Software Engineering &amp; Cyber Security Student
          <span className="mx-2 text-indigo-500">|</span>
          Vibe Coder
          <span className="mx-2 text-indigo-500">|</span>
          Full-Stack Developer
          <span className="mx-2 text-indigo-500">|</span>
          Content Creator
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/projects"
            onClick={(e) => handleNavClick(e, 'projects')}
            id="cta-view-work"
            className="px-7 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-indigo-600/30"
          >
            View My Work
          </a>
          <a
            href="/about"
            onClick={(e) => handleNavClick(e, 'about')}
            className="px-7 py-3 border border-gray-700 hover:border-indigo-500 text-gray-300 hover:text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105"
          >
            About Me
          </a>
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
