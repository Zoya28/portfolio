import { ExternalLink, Github, Play, ArrowRight } from 'lucide-react'; // <-- Changed 'Github' to 'GitHub'
import { useNavigate } from 'react-router-dom';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string; // Note: 'githubUrl' is not used in the provided JSX, but is fine in the interface.
  status: 'live' | 'in-development' | 'archived';
}

export function Projects() {
  const navigate = useNavigate();
  const projects: (Project & { id: string; tags?: string[] })[] = [
    {
      id: 'youtube-script-writer',
      tags: ['Groq API', 'NLP', 'Content Generation'],
      title: 'YouTube Script Writer',
      description: 'AI-powered tool that generates complete YouTube video scripts from topics using Groq API with customizable length and creativity levels.',
      techStack: ['Python', 'Groq API', 'LangChain', 'Streamlit', 'NLP'],
      liveUrl: 'https://youtube-script-writer.onrender.com',
      status: 'live',
    },
    {
      id: 'ai-email-generator',
      tags: ['LLM', 'Prompt Engineering', 'Email'],
      title: 'AI Email Generator',
      description: 'Context-aware email generator with tone adjustment and purpose-specific drafts. Automatically enhances grammar and structure for professional outputs.',
      techStack: ['Python', 'LLM', 'Prompt Engineering', 'FastAPI', 'React'],
      liveUrl: 'https://email-generator-rqms.onrender.com',
      status: 'live',
    },
    {
      id: 'ai-chatbot',
      tags: ['LangChain', 'FAISS', 'Chatbot'],
      title: 'AI Chatbot',
      description: 'Intelligent chatbot with contextual conversations and memory retention using LangChain. Features intent recognition and dynamic response flow.',
      techStack: ['LangChain', 'FAISS', 'Streamlit', 'OpenAI API', 'Python'],
      liveUrl: 'https://chatgpt-clone-lmu3.onrender.com',
      status: 'live',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live':
        return 'text-green-400 border-green-400';
      case 'in-development':
        return 'text-yellow-400 border-yellow-400';
      default:
        return 'text-gray-400 border-gray-400';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'live':
        return 'ONLINE';
      case 'in-development':
        return 'IN DEVELOPMENT';
      default:
        return 'ARCHIVED';
    }
  };

  return (
    <section id="projects" className="min-h-screen py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-pink-950/10 to-black"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(236, 72, 153, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(236, 72, 153, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <div className="inline-block px-4 py-1 mb-4 border border-cyan-400 rounded-full">
            <span className="text-cyan-400 text-sm font-mono tracking-wider">PROJECT DATABASE</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-4" style={{
            textShadow: '0 0 20px rgba(236, 72, 153, 0.6)',
          }}>
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-black/40 border-2 border-purple-500/30 rounded-lg p-6 backdrop-blur-sm hover:border-pink-500 transition-all duration-300"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-lg transition-all duration-300"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-20 blur transition-all duration-300"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold mb-2 text-pink-400" style={{textShadow: '0 0 10px rgba(236, 72, 153, 0.5)'}}>{project.title}</h3>
                <p className="text-purple-200 text-base mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags?.map((tag) => (
                    <span key={tag} className="text-xs font-mono px-2 py-1 bg-purple-900/50 text-pink-400 rounded border border-purple-500/30">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => navigate(`/projects/${project.id}`)}
                    className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded text-white text-base font-semibold shadow-lg hover:scale-105 transition-transform"
                  >
                    <ArrowRight className="w-4 h-4" /> View Details
                  </button>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2 border border-blue-400 rounded text-blue-400 text-base font-semibold hover:bg-blue-400/10 transition-colors"
                    >
                      <Play className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/Zoya28"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-cyan-400 rounded-lg text-cyan-400 font-mono hover:bg-cyan-400/10 transition-all duration-300"
            style={{
              textShadow: '0 0 10px rgba(6, 182, 212, 0.6)',
            }}
          >
            <ExternalLink className="w-5 h-5" />
            View More on GitHub
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}