import { useEffect, useState } from 'react';
import { Terminal, Cpu, Database, Zap } from 'lucide-react';

interface Skill {
  category: string;
  skills: { name: string; level: number }[];
  icon: React.ReactNode;
}

export function About() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [animatedLevels, setAnimatedLevels] = useState<{ [key: string]: number }>({});

  const skillCategories: Skill[] = [
    {
      category: 'Core',
      icon: <Cpu className="w-5 h-5" />,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Machine Learning', level: 83 },
        { name: 'Deep Learning', level: 82 },
        { name: 'Generative AI', level: 85 },
        { name: 'SQL', level: 80 },
      ],
    },
    {
      category: 'Frameworks',
      icon: <Terminal className="w-5 h-5" />,
      skills: [
        { name: 'PyTorch', level: 83 },
        { name: 'TensorFlow', level: 82 },
        { name: 'HuggingFace', level: 90 },
        { name: 'LangChain', level: 92 },
        { name: 'FastAPI', level: 87 },
      ],
    },
    {
      category: 'MLOps & Cloud',
      icon: <Database className="w-5 h-5" />,
      skills: [
        { name: 'AWS', level: 60 },
        { name: 'Docker', level: 62 },
        { name: 'Redis', level: 52 },
        { name: 'Streamlit', level: 88 },
      ],
    },
    {
      category: 'Specialized',
      icon: <Zap className="w-5 h-5" />,
      skills: [
        { name: 'FAISS', level: 80 },
        { name: 'RAG', level: 90 },
        { name: 'Prompt Engineering', level: 93 },
        { name: 'Fine-tuning', level: 86 },
      ],
    },
  ];

  useEffect(() => {
    const currentSkills = skillCategories[activeCategory].skills;
    const newLevels: { [key: string]: number } = {};

    currentSkills.forEach((skill) => {
      let current = 0;
      const interval = setInterval(() => {
        if (current <= skill.level) {
          newLevels[skill.name] = current;
          setAnimatedLevels({ ...newLevels });
          current += 2;
        } else {
          clearInterval(interval);
        }
      }, 20);
    });
  }, [activeCategory]);

  return (
    <section id="about" className="min-h-screen py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <div className="inline-block px-4 py-1 mb-4 border border-cyan-400 rounded-full">
            <span className="text-cyan-400 text-sm font-mono tracking-wider">ACCESS GRANTED</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-4" style={{
            textShadow: '0 0 20px rgba(139, 92, 246, 0.6)',
          }}>
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-black/40 border-2 border-purple-500/30 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
              <h3 className="text-xl font-bold text-cyan-400 font-mono">PROFILE.txt</h3>
            </div>
            <div className="space-y-3 text-purple-200 leading-relaxed">

                <p className="font-mono text-md font-bold" >Hey there! I’m Zoya Qureshi</p>
              <p className="font-mono text-md">
                I’m an AI Engineer who loves designing intelligent systems that solve real problems with elegance and precision. From building models to fine-tuning algorithms, I enjoy the challenge of making machines a little smarter every day.
              </p>
              <p className="font-mono text-md">
                When I’m not experimenting with new architectures or arguing with code that “should’ve worked,” you’ll find me exploring new recipes, diving into anime, playing volleyball, or losing track of time in a good novel. I bring curiosity, creativity, and just the right amount of sass to everything I build.
              </p>
            </div>
          </div>

          <div className="bg-black/40 border-2 border-purple-500/30 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <h3 className="text-xl font-bold text-cyan-400 font-mono">EDUCATION.log</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-2 border-pink-500 pl-4">
                <p className="text-pink-400 font-semibold">B.Tech in AI & Data Science</p>
                <p className="text-purple-300 text-sm">Chameli Devi Group of Institutions</p>
                <p className="text-cyan-400 text-sm font-mono">2021 - 2025</p>
              </div>
                <div className="border-l-2 border-pink-500 pl-4">
                <p className="text-pink-400 font-semibold">Higher Secondary School</p>
                <p className="text-purple-300 text-sm">Bright Star Public Higher Secondary Scchool</p>
                <p className="text-cyan-400 text-sm font-mono">85%</p>
              </div>
                <div className="border-l-2 border-pink-500 pl-4">
                <p className="text-pink-400 font-semibold">Secondary School</p>
                <p className="text-purple-300 text-sm">Bright Star Public Higher Secondary Scchool</p>
                <p className="text-cyan-400 text-sm font-mono">84.6%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black/40 border-2 border-purple-500/30 rounded-lg p-6 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            <h3 className="text-2xl font-bold text-cyan-400 font-mono">SKILLS.db</h3>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {skillCategories.map((category, index) => (
              <button
                key={category.category}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
                  activeCategory === index
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]'
                    : 'bg-purple-900/30 text-purple-300 border border-purple-500/30 hover:border-purple-500'
                }`}
              >
                {category.icon}
                {category.category}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {skillCategories[activeCategory].skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-purple-200 font-mono">{skill.name}</span>
                  <span className="text-cyan-400 font-mono text-sm">
                    {animatedLevels[skill.name] || 0}%
                  </span>
                </div>
                <div className="h-2 bg-purple-950/50 rounded-full overflow-hidden border border-purple-500/30">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${animatedLevels[skill.name] || 0}%`,
                      boxShadow: '0 0 10px rgba(139, 92, 246, 0.6)',
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}