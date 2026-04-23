import { Code2, Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const footerLinks = {
  Navigation: ['Home', 'About', 'Skills', 'Projects', 'Contact'],
  Services: ['Web Development', 'Mobile Apps', 'UI/UX Design', 'Consulting', 'Code Review'],
};

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-teal-400 font-bold text-xl mb-4">
              <Code2 size={22} />
              Awekegn
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Full-stack developer crafting performant, accessible web experiences. Based in San Francisco, working globally.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Github, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-700 text-slate-500 hover:text-teal-400 hover:border-teal-500/40 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm mb-4">{section}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-slate-500 hover:text-teal-400 text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-slate-800 gap-4">
          <p className="text-slate-600 text-sm">
            &copy; {new Date().getFullYear()} Awekegn John. All rights reserved.
          </p>
          <button
            onClick={scrollTop}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-700 text-slate-500 hover:text-teal-400 hover:border-teal-500/40 transition-all duration-200"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
