import { useEffect, useRef, useState } from 'react';
import { Briefcase, ExternalLink, Github } from 'lucide-react';

const categories = ['All', 'Web App', 'Mobile', 'Open Source'];

const projects = [
  {
    title: 'TaskFlow Pro',
    desc: 'A collaborative project management tool with real-time updates, Kanban boards, and team analytics. Built for remote teams.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
    category: 'Web App',
    demo: '#',
    code: '#',
  },
  {
    title: 'ShopCart E-Commerce',
    desc: 'Full-featured e-commerce platform with inventory management, Stripe payments, and an admin dashboard.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'PHP', 'MySQL', 'Stripe'],
    category: 'Web App',
    demo: '#',
    code: '#',
  },
  {
    title: 'FitTrack Mobile',
    desc: 'Cross-platform fitness tracking app with workout logging, progress charts, and social challenges.',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React Native', 'Supabase', 'TypeScript'],
    category: 'Mobile',
    demo: '#',
    code: '#',
  },
  {
    title: 'DevUtils CLI',
    desc: 'Open-source developer utility library with 40+ tools for string manipulation, date handling, and API mocking.',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['TypeScript', 'Node.js', 'CLI', 'npm'],
    category: 'Open Source',
    demo: '#',
    code: '#',
  },
  {
    title: 'MediBook',
    desc: 'Healthcare appointment booking system with doctor profiles, availability scheduling, and patient records.',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Vue.js', 'Laravel', 'MySQL', 'Tailwind'],
    category: 'Web App',
    demo: '#',
    code: '#',
  },
  {
    title: 'OpenChart',
    desc: 'Lightweight, composable charting library for React with 12 chart types and full accessibility support.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'D3.js', 'TypeScript', 'npm'],
    category: 'Open Source',
    demo: '#',
    code: '#',
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const sectionRef = useRef<HTMLDivElement>(null);

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('animate-in');
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 bg-slate-900" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 reveal opacity-0 translate-y-8 transition-all duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm font-medium mb-4">
            <Briefcase size={14} />
            Portfolio
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A selection of projects I've built — ranging from production SaaS apps to open-source libraries.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-10 reveal opacity-0 translate-y-8 transition-all duration-700 delay-100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? 'bg-teal-500 text-slate-900'
                  : 'bg-slate-800 text-slate-400 hover:text-white border border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className="reveal opacity-0 translate-y-8 transition-all duration-700 group bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-teal-500/30 hover:shadow-xl hover:shadow-teal-500/5"
              style={{ transitionDelay: `${(i % 3) * 100}ms` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <a
                    href={project.demo}
                    className="w-8 h-8 bg-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-lg flex items-center justify-center text-slate-300 hover:text-teal-400 transition-colors"
                  >
                    <ExternalLink size={14} />
                  </a>
                  <a
                    href={project.code}
                    className="w-8 h-8 bg-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-lg flex items-center justify-center text-slate-300 hover:text-teal-400 transition-colors"
                  >
                    <Github size={14} />
                  </a>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-slate-800 text-slate-400 text-xs rounded-md border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal opacity-0 translate-y-8 transition-all duration-700">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-slate-700 hover:border-teal-500/50 text-slate-300 hover:text-white font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            <Github size={16} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
