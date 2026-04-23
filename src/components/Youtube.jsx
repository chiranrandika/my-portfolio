import helaLogo from '../assets/hela_tuber_logo.png';
import techLogo  from '../assets/tech_roots_logo.png';

const channels = [
  {
    name: 'Hela Tuber SL',
    handle: '@HelatuberSL',
    href: 'https://youtube.com/@HelatuberSL',
    logo: helaLogo,
    accent: 'from-red-600 to-rose-500',
    border: 'hover:border-red-500/50',
    glow: 'hover:shadow-red-900/30',
    badgeColor: 'bg-red-500/10 border-red-500/20 text-red-300',
    description:
      'Sinhala-medium tech channel covering cyber security deep-dives, comprehensive guides on Tails OS, Dark Web safety, and ethical hacking — making advanced topics accessible to Sri Lankan learners.',
    topics: ['Tails OS Guide', 'Dark Web Safety', 'Cyber Security', 'Sinhala Tutorials'],
    stats: { videos: '20+', lang: 'සිංහල' },
  },
  {
    name: 'Tech Roots',
    handle: '@techrootsHTSL',
    href: 'https://www.youtube.com/@techrootsHTSL',
    logo: techLogo,
    accent: 'from-indigo-600 to-purple-500',
    border: 'hover:border-indigo-500/50',
    glow: 'hover:shadow-indigo-900/30',
    badgeColor: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-300',
    description:
      'Sinhala-medium channel focused on full-stack development tutorials, coding projects, UI/UX design walkthroughs, and software engineering concepts — built for aspiring Sri Lankan developers.',
    topics: ['Coding Tutorials', 'Full-Stack Dev', 'UI/UX Design', 'Project Builds'],
    stats: { videos: '15+', lang: 'සිංහල' },
  },
];

// ──────────────────────────────────────────────
// 🎬 Featured videos — replace videoId values
//    with your real YouTube video IDs
// ──────────────────────────────────────────────
const featuredVideos = [
  {
    videoId: 'K1abhQkpUss',
    channel: 'Hela Tuber SL',
    channelColor: 'text-red-400',
    title: 'How to Safely Access the Dark Web | Tails OS Guide - Part 1',
    description: 'Dark Web safely access කරන්නා හැටි Tails OS use කරලා — educational purpose සඳහා step-by-step guide එකක්.',
  },
  {
    videoId: 'gF80U5_0oZM',
    channel: 'Hela Tuber SL',
    channelColor: 'text-red-400',
    title: 'The Rise and Fall of Silk Road | Dark Web | Silk Road එකට ඇත්තටම මොකද වුණේ?',
    description: 'Dark Web හි කුප්‍රකට Silk Road marketplace එකේ කතාව — rise, fall සහ FBI operation සිංහලෙන්.',
  },
  {
    videoId: 'JIt6jZ31bMI',
    channel: 'Hela Tuber SL',
    channelColor: 'text-red-400',
    title: 'අභ්‍යවකාශයේ Internet වැඩ කරන හැටි | Artemis 2 Laser Communication',
    description: 'NASA Artemis 2 mission එකේ laser communication technology use කරලා space සිට 4K live footage යවන හැටි.',
  },
];

const Youtube = () => {
  return (
    <section id="youtube" className="py-16 sm:py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-red-400 font-medium tracking-widest uppercase text-sm mb-2">
            On YouTube
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            My Channels
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-red-500 to-rose-400 rounded-full mx-auto" />
          <p className="mt-6 text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            I run two YouTube channels focused on educational tech content — from beginner
            coding tutorials to advanced cyber security series, all in Sinhala.
          </p>
        </div>

        {/* Channel cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {channels.map((ch) => (
            <div
              key={ch.name}
              className={`group relative bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${ch.glow} ${ch.border}`}
            >
              <div className={`h-1 bg-gradient-to-r ${ch.accent}`} />

              <div className="p-7 flex flex-col gap-5">
                {/* Channel identity */}
                <div className="flex items-center gap-4">
                  {/* Channel Logo */}
                  <img
                    src={ch.logo}
                    alt={`${ch.name} logo`}
                    className="w-16 h-16 rounded-2xl object-cover flex-shrink-0 shadow-lg"
                  />
                  <div>
                    <h3 className="text-white font-bold text-xl leading-tight">{ch.name}</h3>
                    <p className="text-gray-500 text-sm">{ch.handle}</p>
                  </div>
                  {/* YouTube icon */}
                  <div className="ml-auto">
                    <svg className="w-8 h-8 text-red-500 opacity-80 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex gap-3">
                  <span className={`px-3 py-1 text-xs border rounded-full font-medium ${ch.badgeColor}`}>
                    🎬 {ch.stats.videos} Videos
                  </span>
                  <span className={`px-3 py-1 text-xs border rounded-full font-medium ${ch.badgeColor}`}>
                    🌐 {ch.stats.lang}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed text-justify">{ch.description}</p>

                {/* Topic tags */}
                <div className="flex flex-wrap gap-2">
                  {ch.topics.map((topic) => (
                    <span key={topic} className="px-2.5 py-0.5 text-xs bg-gray-800 border border-gray-700 text-gray-300 rounded-full">
                      {topic}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={ch.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r ${ch.accent} hover:opacity-90 transition-all duration-200 shadow-lg hover:scale-105`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Visit Channel
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ── Featured Videos ── */}
        <div>
          <h3 className="text-white font-bold text-2xl mb-6 text-center">
            🎬 Featured Videos
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {featuredVideos.map((video, i) => (
              <a
                key={i}
                href={`https://www.youtube.com/watch?v=${video.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
              >
                {/* Thumbnail */}
                <div className="relative overflow-hidden aspect-video bg-gray-800">
                  <img
                    src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 flex flex-col gap-2 flex-1">
                  <span className={`text-xs font-semibold ${video.channelColor}`}>
                    {video.channel}
                  </span>
                  <h4 className="text-white text-sm font-semibold leading-snug group-hover:text-indigo-300 transition-colors line-clamp-2">
                    {video.title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Youtube;
