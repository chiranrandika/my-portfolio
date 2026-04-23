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
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-medium tracking-widest uppercase text-sm mb-2">
            Get to know me
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            About Me
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Avatar + quick stats */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative">
              <div className="w-48 h-48 rounded-3xl p-[3px] bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 shadow-xl shadow-indigo-900/40">
                <img
                  src={chiranImg}
                  alt="Chiran Randika"
                  className="w-full h-full rounded-3xl object-cover"
                />
              </div>
              {/* Online badge */}
              <span className="absolute -bottom-2 -right-2 px-3 py-1 bg-green-500/20 border border-green-500/40 text-green-300 text-xs rounded-full font-medium">
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
                  className="bg-gray-900 border border-gray-800 rounded-xl p-3 text-center"
                >
                  <p className="text-2xl font-extrabold text-indigo-400">{stat.value}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bio + skills */}
          <div className="space-y-6">
            <div className="space-y-4 text-gray-400 text-base leading-relaxed text-justify">
              <p>
                I&apos;m <span className="text-white font-semibold">Chiran Randika</span>, a
                passionate tech enthusiast pursuing two academic programs simultaneously.
                I am currently reading for a{' '}
                <span className="text-white font-medium">Diploma in Software Engineering</span>{' '}
                at{' '}
                <span className="text-indigo-400 font-medium">Sabaragamuwa University of Sri Lanka (SUSL)</span>,
                while concurrently pursuing a{' '}
                <span className="text-white font-medium">Degree in Cyber Security</span>{' '}
                at{' '}
                <span className="text-purple-400 font-medium">ICBT Campus</span>.
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
              <p className="text-gray-500 text-sm uppercase tracking-widest mb-3 font-medium">
                Skills &amp; Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill.label}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-sm border rounded-full font-medium transition-transform duration-200 hover:scale-105 ${skill.color}`}
                  >
                    <span>{skill.icon}</span>
                    {skill.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
