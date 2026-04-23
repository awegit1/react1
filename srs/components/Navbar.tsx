import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => handleNav('#home')}
          className="flex items-center gap-2 text-teal-400 font-bold text-xl tracking-tight"
        >
          <Code2 size={24} />
          <span>Awekegn</span>
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <button
                onClick={() => handleNav(href)}
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  active === href.slice(1) ? 'text-teal-400' : 'text-slate-300 hover:text-white'
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-teal-400 transition-all duration-200 ${
                    active === href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
          className="hidden md:inline-flex items-center px-5 py-2 bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold text-sm rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-teal-500/25"
        >
          Hire Me
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-slate-300 hover:text-white transition-colors"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-sm border-t border-slate-800 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <button
                  onClick={() => handleNav(href)}
                  className={`text-sm font-medium ${
                    active === href.slice(1) ? 'text-teal-400' : 'text-slate-300'
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleNav('#contact')}
                className="w-full text-center px-5 py-2 bg-teal-500 text-slate-900 font-semibold text-sm rounded-lg"
              >
                Hire Me
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
