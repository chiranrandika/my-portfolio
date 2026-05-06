import lankaSkillImg from '../assets/lankaskill.png';
import restaurantImg  from '../assets/restaurant.png';

const projects = [
  {
    title: 'LankaSkill',
    description:
      'A dedicated web platform connecting Sri Lankan freelancers with clients across the island. Built to empower local talent with a seamless marketplace experience — featuring profile listings, skill-based search, and service categorisation.',
    image: lankaSkillImg,
    tags: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
    accent: 'from-cyan-400 to-blue-500',
    glow: 'hover:shadow-cyan-900/20 dark:hover:shadow-cyan-900/40',
    border: 'hover:border-cyan-500/50',
    badge: 'bg-cyan-50 dark:bg-cyan-500/10 border-cyan-200 dark:border-cyan-500/20 text-cyan-700 dark:text-cyan-300',
  },
  {
    title: 'Restaurant Website',
    description:
      'A professional website built for a local restaurant, featuring a digital menu with dish details and pricing, an about section, restaurant information, and a clean contact page — all in one elegant, mobile-friendly design.',
    image: restaurantImg,
    tags: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL'],
    accent: 'from-yellow-400 to-amber-500',
    glow: 'hover:shadow-yellow-900/20 dark:hover:shadow-yellow-900/40',
    border: 'hover:border-yellow-500/50',
    badge: 'bg-yellow-50 dark:bg-amber-500/10 border-yellow-200 dark:border-amber-500/20 text-yellow-700 dark:text-amber-300',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 sm:py-24 px-6 bg-gray-100 dark:bg-gray-900/40 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-cyan-600 dark:text-cyan-400 font-medium tracking-widest uppercase text-sm mb-2">
            What I&apos;ve built
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Projects
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto" />
        </div>

        {/* Grid — 1 col mobile, 2 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group relative flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl shadow-sm ${project.glow} ${project.border}`}
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-t ${project.accent} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
              </div>

              {/* Top gradient bar */}
              <div className={`h-0.5 bg-gradient-to-r ${project.accent}`} />

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 gap-4">
                <h3 className="text-gray-900 dark:text-white font-bold text-xl">{project.title}</h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1 text-justify">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-0.5 text-xs border rounded-full font-medium ${project.badge}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
