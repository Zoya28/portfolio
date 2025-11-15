import { useEffect, useState } from 'react';
import { RobotCursorTracker } from './RobotCursorTracker';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Zoya Qureshi';

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse"></div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="inline-block px-4 py-1 mb-4 border border-cyan-400 rounded-full">
            <span className="text-cyan-400 text-sm font-mono tracking-wider">SYSTEM ONLINE</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-5xl font-bold mb-5">
          <span className="text-white" style={{
            textShadow: '0 0 20px rgba(139, 92, 246, 0.8), 0 0 30px rgba(139, 92, 246, 0.5)',
          }}>
            {text}
            {showCursor && <span className="text-pink-500">|</span>}
          </span>
        </h1>

        <div className="mb-8">
          <p className="text-xl md:text-2xl text-cyan-400 font-mono mb-2" style={{
            textShadow: '0 0 10px rgba(6, 182, 212, 0.6)',
          }}>
            {'> AI Engineer'}
          </p>
          <p className="text-lg text-purple-300 max-w-2xl mx-auto leading-relaxed">
            Building intelligent systems with LLMs, RAG, and GenAI | Deploying scalable ML solutions
          </p>
        </div>

        <div className="my-12">
          <RobotCursorTracker />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="group relative px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:scale-105"
            style={{
              boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)',
            }}
          >
            <span className="relative z-10 text-white">View Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>

          <a
            href="#contact"
            className="px-8 py-3 border-2 border-purple-500 rounded-lg font-semibold text-purple-300 hover:bg-purple-500/10 transition-all duration-300"
            style={{
              textShadow: '0 0 10px rgba(139, 92, 246, 0.5)',
            }}
          >
            Get In Touch
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-purple-400" />
        </div>
      </div>

      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
}