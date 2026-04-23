import { useEffect, useRef } from 'react';
import { Layers } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Vue.js', level: 78 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js / Express', level: 88 },
      { name: 'PHP / Laravel', level: 82 },
      { name: 'Python / Django', level: 75 },
      { name: 'REST & GraphQL APIs', level: 90 },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'PostgreSQL / MySQL', level: 87 },
      { name: 'Supabase', level: 88 },
      { name: 'MongoDB', level: 80 },
      { name: 'Redis', level: 72 },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git / GitHub', level: 95 },
      { name: 'Docker', level: 78 },
      { name: 'AWS / Vercel', level: 82 },
      { name: 'CI/CD Pipelines', level: 76 },
    ],
  },
];

const techBadges = [
  'React', 'TypeScript', 'Node.js', 'PHP', 'PostgreSQL', 'MySQL',
  'Next.js', 'Laravel', 'Docker', 'AWS', 'Supabase', 'Tailwind CSS',
  'Git', 'GraphQL', 'MongoDB', 'Redis', 'Python', 'Figma',
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            const bars = entry.target.querySelectorAll<HTMLElement>('.skill-bar');
            bars.forEach((bar) => {
              bar.style.width = bar.dataset.level + '%';
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 bg-slate-950" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm font-medium mb-4">
            <Layers size={14} />
            Skills
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Technical Expertise</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A curated toolkit I've refined over years of professional development across the full stack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className={`reveal opacity-0 translate-y-8 transition-all duration-700 bg-slate-900 border border-slate-800 rounded-2xl p-6`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <h3 className="text-white font-semibold text-lg mb-6 pb-3 border-b border-slate-800">
                {cat.title}
              </h3>
              <div className="space-y-5">
                {cat.skills.map(({ name, level }) => (
                  <div key={name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300 text-sm font-medium">{name}</span>
                      <span className="text-teal-400 text-xs font-semibold">{level}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="skill-bar h-full bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: '0%' }}
                        data-level={level}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center">
          <p className="text-slate-500 text-sm mb-6">Technologies I work with</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-slate-900 border border-slate-800 hover:border-teal-500/40 hover:text-teal-400 text-slate-400 text-sm rounded-lg transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
