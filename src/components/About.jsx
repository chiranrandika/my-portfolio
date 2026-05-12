import chiranImg from '../assets/Chiran.jpg';

const skills = [
  { label: 'React',              icon: '⚛️',  color: 'text-cyan-300    border-cyan-500/30    bg-cyan-500/10'    },
  { label: 'PHP',                icon: '🐘',  color: 'text-violet-300  border-violet-500/30  bg-violet-500/10'  },
  { label: 'HTML / CSS',         icon: '🎨',  color: 'text-orange-300  border-orange-500/30  bg-orange-500/10'  },
  { label: 'MySQL',              icon: '🗄️',  color: 'text-blue-300    border-blue-500/30    bg-blue-500/10'    },
  { label: 'Linux (Kali/Tails)', icon: '🐧',  color: 'text-green-300   border-green-500/30   bg-green-500/10'   },
  { label: 'Penetration Testing',icon: '🔐',  color: 'text-red-300     border-red-500/30     bg-red-500/10'     },
  { label: 'Video Editing',      icon: '🎬',  color: 'text-pink-300    border-pink-500/30    bg-pink-500/10'    },
  { label: 'UI Design',          icon: '✏️',  color: 'text-yellow-300  border-yellow-500/30  bg-yellow-500/10'  },
];

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 px-6">
      <div className="max-w-6xl xl:max-w-7xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-cyan-600 dark:text-cyan-400 font-medium tracking-widest uppercase text-sm mb-2">
            Get to know me
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Avatar + quick stats */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative">
              <div className="w-48 h-48 rounded-3xl p-[3px] bg-gradient-to-br from-cyan-400 via-blue-500 to-cyan-600 shadow-xl shadow-cyan-900/20 dark:shadow-cyan-900/40">
                <img
                  src={chiranImg}
                  alt="Chiran Randika"
                  className="w-full h-full rounded-3xl object-cover"
                />
              </div>
              {/* Online badge */}
              <span className="absolute -bottom-2 -right-2 px-3 py-1 bg-green-100 dark:bg-green-500/20 border border-green-300 dark:border-green-500/40 text-green-700 dark:text-green-300 text-xs rounded-full font-medium shadow-sm">
                🟢 Open to work
              </span>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-3 w-full">
              {[
                { label: 'SE Diploma', value: 'SUSL' },
                { label: 'Skills', value: '8+' },
                { label: 'CS Degree', value: 'ICBT' },
                { label: 'Role', value: 'Dev' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-3 text-center shadow-sm"
                >
                  <p className="text-2xl font-extrabold text-cyan-600 dark:text-cyan-400">{stat.value}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bio + skills */}
          <div className="space-y-6">
            <div className="space-y-4 text-gray-600 dark:text-gray-400 text-base leading-relaxed text-justify">
              <p>
                I&apos;m <span className="text-gray-900 dark:text-white font-semibold">Chiran Randika</span>, a
                passionate tech enthusiast pursuing two academic programs simultaneously.
                I am currently reading for a{' '}
                <span className="text-gray-900 dark:text-white font-medium">Diploma in Software Engineering</span>{' '}
                at{' '}
                <span className="text-cyan-600 dark:text-cyan-400 font-medium">Sabaragamuwa University of Sri Lanka (SUSL)</span>,
                while concurrently pursuing a{' '}
                <span className="text-gray-900 dark:text-white font-medium">Degree in Cyber Security</span>{' '}
                at{' '}
                <span className="text-blue-600 dark:text-blue-400 font-medium">ICBT Campus</span>.
                This dual academic path gives me a unique perspective that bridges
                creative software development with a security-first mindset.
              </p>
              <p>
                Beyond academics, I build full-stack web applications, explore offensive
                security techniques, and create content for my audience online. I thrive
                at the intersection of code, creativity, and curiosity — always learning,
                always building.
              </p>
            </div>

            {/* Skills */}
            <div>
              <p className="text-gray-500 dark:text-gray-500 text-sm uppercase tracking-widest mb-3 font-medium">
                Skills &amp; Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill.label}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-sm border rounded-full font-medium transition-transform duration-200 hover:scale-105 ${skill.color} bg-opacity-30 dark:bg-opacity-10 shadow-sm`}
                  >
                    <span>{skill.icon}</span>
                    {skill.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Hometown map */}
        <div className="mt-16 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          
          {/* Label side */}
          <div className="flex-shrink-0 md:w-56 flex flex-col items-center md:items-start gap-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 text-sm font-medium">
              <span>📍</span> Hometown
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">Ratnapura</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              City of Gems — Sabaragamuwa Province, Sri Lanka 🇱🇰
            </p>
          </div>

          {/* Map side */}
          <div className="w-full flex-1 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg shadow-black/5 dark:shadow-black/40">
            <iframe
              title="Ratnapura, Sri Lanka"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63371.37753844963!2d80.35291!3d6.68233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3887f46f7af17%3A0x36af5e0b7e534e4d!2sRatnapura!5e0!3m2!1sen!2slk!4v1715000000000!5m2!1sen!2slk"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-64 sm:h-80"
            />
          </div>

        </div>

      </div>
    </section>

  );
};

export default About;
