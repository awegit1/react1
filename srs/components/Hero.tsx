import { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Twitter, Download } from 'lucide-react';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    setTimeout(() => {
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 100);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
            Available for work
          </div>

          <h1 ref={titleRef} className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
              Awekegn Yohannes
            </span>
          </h1>

          <p className="text-xl text-slate-400 mb-4 font-medium">
            Full-Stack Developer &amp; UI/UX Enthusiast
          </p>

          <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-xl lg:max-w-none">
            I craft elegant, performant web applications with modern technologies.
            Passionate about clean code, intuitive interfaces, and scalable architecture.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="px-8 py-3.5 bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-teal-500/30 hover:-translate-y-0.5"
            >
              View My Work
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-slate-700 hover:border-teal-500/50 text-slate-300 hover:text-white font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>

          <div className="flex items-center gap-5 justify-center lg:justify-start">
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Twitter, href: '#', label: 'Twitter' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-800 text-slate-500 hover:text-teal-400 hover:border-teal-500/40 transition-all duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex-shrink-0">
          <div className="relative w-72 h-72 lg:w-80 lg:h-80">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/10 border border-teal-500/20" />
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=640"
              alt="Alex Morgan"
              className="relative z-10 w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-slate-900 border border-slate-700 rounded-xl p-4 z-20 shadow-xl">
              <p className="text-2xl font-bold text-white">0+</p>
              <p className="text-xs text-slate-400">Years Exp.</p>
            </div>
            <div className="absolute -top-4 -left-4 bg-slate-900 border border-slate-700 rounded-xl p-4 z-20 shadow-xl">
              <p className="text-2xl font-bold text-teal-400">2+</p>
              <p className="text-xs text-slate-400">Projects</p>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-teal-400 transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
}
