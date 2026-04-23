import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { submitContactMessage } from '../lib/supabase';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'awekegnjohn@gmail.com',
    href: 'mailto:awekegnjohn@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+251961538789',
    href: 'tel:+251961538789',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'welayta sodo , Ethiopia',
    href: '#',
  },
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('loading');
    try {
      await submitContactMessage(form);
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm font-medium mb-4">
            <MessageSquare size={14} />
            Contact
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Have a project in mind or want to chat? I'd love to hear from you. Send me a message and I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 reveal opacity-0 translate-y-8 transition-all duration-700 delay-100">
            <div className="space-y-6 mb-10">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-teal-500/30 transition-all duration-200 group"
                >
                  <div className="w-11 h-11 bg-teal-500/10 border border-teal-500/20 rounded-lg flex items-center justify-center text-teal-400 flex-shrink-0 group-hover:bg-teal-500/20 transition-colors">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs">{label}</p>
                    <p className="text-white text-sm font-medium">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-2">Open to opportunities</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                I'm currently available for freelance projects, full-time roles, and consulting engagements. Let's build something great together.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm font-medium">Available now</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 reveal opacity-0 translate-y-8 transition-all duration-700 delay-200">
            <form
              onSubmit={handleSubmit}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8"
            >
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-slate-400 text-sm mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-slate-800 border border-slate-700 focus:border-teal-500/60 text-white placeholder-slate-600 rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-sm mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="examplen@gmail.com"
                    className="w-full bg-slate-800 border border-slate-700 focus:border-teal-500/60 text-white placeholder-slate-600 rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-slate-400 text-sm mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry, collaboration..."
                  className="w-full bg-slate-800 border border-slate-700 focus:border-teal-500/60 text-white placeholder-slate-600 rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                />
              </div>

              <div className="mb-6">
                <label className="block text-slate-400 text-sm mb-2">Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project, goals, or just say hello..."
                  className="w-full bg-slate-800 border border-slate-700 focus:border-teal-500/60 text-white placeholder-slate-600 rounded-lg px-4 py-3 text-sm outline-none transition-colors resize-none"
                />
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm mb-5">
                  <CheckCircle size={16} />
                  Message sent! I'll get back to you within 24 hours.
                </div>
              )}

              {status === 'error' && (
       <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm mb-5">
                  <AlertCircle size={16} />
                  Something went wrong. Please try again or email me directly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-teal-500 hover:bg-teal-400 disabled:bg-teal-500/50 text-slate-900 font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-teal-500/25"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-slate-900/30 border-t-slate-900 rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
