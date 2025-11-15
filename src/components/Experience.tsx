import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  description: string[];
}

export function Experience() {
  const experiences: ExperienceItem[] = [
    {
      company: 'Codebyte Solutions',
      role: 'AI Development Intern',
      duration: 'May 2025 – Present',
      description: [
        'Improved model training pipeline, reducing preprocessing time by 20%',
        'Implemented LRU, LFU, and TTL caching strategies, boosting sensor data fetch speed',
        'Deployed modular AI agents with FAISS + LangChain + DeepSeek LLM, improving chatbot accuracy by 30% and cutting response latency by 15%',
      ],
    },
    {
      company: 'VKAPS IT Solutions Pvt Ltd',
      role: 'AI Automation Intern',
      duration: 'April 2025 – May 2025',
      description: [
        'Engineered automation tools using LangChain + LLMs to streamline workflows',
        'Designed modular agents that boosted client response accuracy by 30%',
        'Developed reusable NLP components, accelerating future deployment cycles',
      ],
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.15) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(139, 92, 246, 0.15) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <div className="inline-block px-4 py-1 mb-4 border border-cyan-400 rounded-full">
            <span className="text-cyan-400 text-sm font-mono tracking-wider">EXPERIENCE LOG</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-4" style={{
            textShadow: '0 0 20px rgba(6, 182, 212, 0.6)',
          }}>
            Professional Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"></div>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-400"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className="relative pl-20"
                style={{
                  animation: `slideInRight 0.6s ease-out ${index * 0.2}s both`,
                }}
              >
                <div className="absolute left-6 top-6 w-5 h-5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-4 border-black animate-pulse"
                  style={{
                    boxShadow: '0 0 20px rgba(139, 92, 246, 0.8)',
                    animationDelay: `${index * 0.2}s`,
                  }}
                ></div>

                <div className="bg-black/40 border-2 border-purple-500/30 rounded-lg p-6 backdrop-blur-sm hover:border-cyan-400 transition-all duration-300 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/5 group-hover:to-cyan-500/5 rounded-lg transition-all duration-300"></div>

                  <div className="relative">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors" style={{
                          textShadow: '0 0 10px rgba(6, 182, 212, 0.3)',
                        }}>
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-pink-400 font-semibold">
                          <Briefcase className="w-4 h-4" />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 bg-purple-900/50 rounded border border-purple-500/30">
                        <Calendar className="w-4 h-4 text-cyan-400" />
                        <span className="text-cyan-400 font-mono text-sm">{exp.duration}</span>
                      </div>
                    </div>

                    <div className="space-y-2 mt-4">
                      {exp.description.map((item, i) => (
                        <div key={i} className="flex gap-3 items-start">
                          <div className="mt-2 w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"></div>
                          <p className="text-purple-200 leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 h-px bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative pl-20 mt-8">
            <div className="absolute left-6 top-6 w-5 h-5 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full border-4 border-black animate-pulse"
              style={{
                boxShadow: '0 0 20px rgba(6, 182, 212, 0.8)',
              }}
            ></div>
            <div className="bg-black/40 border-2 border-cyan-400/50 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="text-cyan-400 font-mono text-lg">{'>'}</div>
                <p className="text-cyan-400 font-mono">Building the future of AI...</p>
                <div className="w-2 h-4 bg-cyan-400 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}