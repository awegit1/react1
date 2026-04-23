import { useEffect, useRef } from 'react';
import { User, MapPin, Briefcase, GraduationCap, Award } from 'lucide-react';

const stats = [
  { value: '0+', label: 'Years Experience' },
  { value: '2+', label: 'Projects Completed' },
  { value: '0+', label: 'Happy Clients' },
  { value: '5+', label: 'Awards Won' },
];

const timeline = [
  {
    icon: Briefcase,
    year: '2022 – Present',
    title: 'Senior Full-Stack Developer',
    place: 'TechNova Inc.',
    desc: 'Leading development of scalable SaaS products, mentoring junior developers, and architecting cloud-native solutions.',
  },
  {
    icon: Briefcase,
    year: '2020 – 2022',
    title: 'Frontend Developer',
    place: 'Digital Spark Agency',
    desc: 'Built high-performance React applications and design systems for enterprise clients across multiple industries.',
  },
  {
    icon: GraduationCap,
    year: '2016 – 2020',
    title: 'B.Sc. Computer Science',
    place: 'State University',
    desc: 'Graduated with honors. Focused on algorithms, software engineering principles, and distributed systems.',
  },
  {
    icon: Award,
    year: '2019',
    title: 'Hackathon Winner',
    place: 'HackForGood 2019',
    desc: 'First place for building an AI-powered accessibility tool used by 10,000+ users post-event.',
  },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-slate-900" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm font-medium mb-4">
            <User size={14} />
            About Me
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Crafting Digital Experiences
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            I'm a passionate full-stack developer with a love for building beautiful, functional products that make a real difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100">
            <img
              src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Working at desk"
              className="w-full h-80 object-cover rounded-2xl"
            />
            <div className="mt-6 flex items-center gap-2 text-slate-400">
              <MapPin size={16} className="text-teal-400" />
              <span>welayta sodo , Ethiopia — Open to remote</span>
            </div>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200">
            <h3 className="text-2xl font-semibold text-white mb-4">
              A developer who cares about the details
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              With over 5 years of professional experience, I specialize in building full-stack web applications using modern JavaScript frameworks, cloud platforms, and relational databases. I thrive in collaborative environments and value clean, maintainable code.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              When I'm not coding, you'll find me contributing to open-source projects, writing technical blog posts, or exploring new technologies. I believe that great software is built by curious people who never stop learning.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label }) => (
                <div key={label} className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-5">
                  <p className="text-3xl font-bold text-teal-400 mb-1">{value}</p>
                  <p className="text-slate-400 text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-300">
          <h3 className="text-xl font-semibold text-white mb-8 text-center">Experience &amp; Education</h3>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-700" />
            <div className="space-y-8">
              {timeline.map(({ icon: Icon, year, title, place, desc }, i) => (
                <div key={i} className="flex gap-6 pl-16 relative">
                  <div className="absolute left-0 w-12 h-12 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center text-teal-400 flex-shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-teal-400 text-xs font-medium mb-1">{year}</p>
                    <h4 className="text-white font-semibold">{title}</h4>
                    <p className="text-slate-500 text-sm mb-2">{place}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
