import { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle, XCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(236, 72, 153, 0.15) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(236, 72, 153, 0.15) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <div className="inline-block px-4 py-1 mb-4 border border-cyan-400 rounded-full">
            <span className="text-cyan-400 text-sm font-mono tracking-wider">CONTACT INTERFACE</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-4" style={{
            textShadow: '0 0 20px rgba(139, 92, 246, 0.6)',
          }}>
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-black/40 border-2 border-purple-500/30 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <h3 className="text-xl font-bold text-cyan-400 font-mono">CONNECT.sys</h3>
              </div>
              <p className="text-purple-200 leading-relaxed mb-6">
                Interested in collaborating on AI projects or discussing opportunities? Feel free to reach out through any of these channels.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:zoyaqureshi28103@gmail.com"
                  className="flex items-center gap-4 p-4 bg-purple-900/30 border border-purple-500/30 rounded-lg hover:border-pink-500 hover:bg-purple-900/50 transition-all duration-300 group"
                >
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg group-hover:scale-110 transition-transform"
                    style={{ boxShadow: '0 0 15px rgba(139, 92, 246, 0.5)' }}
                  >
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-pink-400 font-semibold">Email</p>
                    <p className="text-purple-200 text-sm">zoyaqureshi28103@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/zoya28/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-purple-900/30 border border-purple-500/30 rounded-lg hover:border-cyan-400 hover:bg-purple-900/50 transition-all duration-300 group"
                >
                  <div className="p-3 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg group-hover:scale-110 transition-transform"
                    style={{ boxShadow: '0 0 15px rgba(6, 182, 212, 0.5)' }}
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-cyan-400 font-semibold">LinkedIn</p>
                    <p className="text-purple-200 text-sm">linkedin.com/in/zoya28</p>
                  </div>
                </a>

                <a
                  href="https://github.com/Zoya28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-purple-900/30 border border-purple-500/30 rounded-lg hover:border-purple-500 hover:bg-purple-900/50 transition-all duration-300 group"
                >
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg group-hover:scale-110 transition-transform"
                    style={{ boxShadow: '0 0 15px rgba(139, 92, 246, 0.5)' }}
                  >
                    <Github className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-purple-400 font-semibold">GitHub</p>
                    <p className="text-purple-200 text-sm">github.com/Zoya28</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-black/40 border-2 border-purple-500/30 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <h3 className="text-xl font-bold text-cyan-400 font-mono">MESSAGE.form</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-purple-300 font-mono text-sm mb-2">
                  {'> NAME'}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-purple-950/50 border-2 border-purple-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"
                  style={{
                    boxShadow: 'inset 0 0 10px rgba(139, 92, 246, 0.2)',
                  }}
                />
              </div>

              <div>
                <label className="block text-purple-300 font-mono text-sm mb-2">
                  {'> EMAIL'}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-purple-950/50 border-2 border-purple-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"
                  style={{
                    boxShadow: 'inset 0 0 10px rgba(139, 92, 246, 0.2)',
                  }}
                />
              </div>

              <div>
                <label className="block text-purple-300 font-mono text-sm mb-2">
                  {'> MESSAGE'}
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-purple-950/50 border-2 border-purple-500/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  style={{
                    boxShadow: 'inset 0 0 10px rgba(139, 92, 246, 0.2)',
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'success'}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-white hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{
                  boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)',
                }}
              >
                {status === 'idle' && (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
                {status === 'success' && (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                )}
                {status === 'error' && (
                  <>
                    <XCircle className="w-5 h-5" />
                    Failed to Send
                  </>
                )}
              </button>
            </form>

            {status === 'success' && (
              <div className="mt-4 p-3 bg-green-900/30 border border-green-500 rounded-lg">
                <p className="text-green-400 text-sm font-mono text-center">
                  {'> Message transmitted successfully!'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}