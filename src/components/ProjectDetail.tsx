import { useParams } from 'react-router-dom';

const projects = [
  {
    id: 'youtube-script-writer',
    title: 'YouTube Script Writer',
    description: 'An advanced AI-powered content generation tool that transforms simple topics or keywords into comprehensive, production-ready YouTube video scripts. Built with cutting-edge language models through Groq API, this application streamlines the content creation process for video creators, marketers, and educators.',
    techStack: ['Python', 'Groq API', 'LangChain', 'Streamlit', 'FastAPI'],
    tags: ['Groq API', 'NLP', 'Content Generation'],
    liveUrl: 'https://youtube-script-writer.onrender.com',
    documentation: 'https://github.com/Zoya28/youtube-script-writer/blob/main/README.md',
    youtube: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    features: [
      'Instant script generation from simple topic input',
      'Customizable video length (short-form, medium, long-form)',
      'Adjustable creativity levels for tone and style',
      'Structured output with intro, body, and conclusion',
      'Natural language processing for engaging narratives',
      'Real-time preview and editing capabilities',
      'Export options in multiple formats',
    ],
    challenges: 'Creating scripts that feel natural and engaging rather than robotic, while maintaining coherent structure across varying video lengths.',
    solutions: 'Implemented sophisticated prompt engineering techniques with temperature controls and custom system prompts. Used few-shot learning examples to guide the model towards more conversational, YouTube-appropriate writing styles.',
    usage: [
      'Enter your video topic or main keyword',
      'Select desired video length (2-20 minutes)',
      'Adjust creativity slider (1-10)',
      "Click 'Generate Script'",
    ],
  },
  {
    id: 'ai-email-generator',
    title: 'AI Email Generator',
    description: 'Context-aware email generator with tone adjustment and purpose-specific drafts. Automatically enhances grammar and structure for professional outputs.',
    techStack: ['Python', 'LLM', 'Prompt Engineering', 'FastAPI'],
    tags: ['LLM', 'Prompt Engineering', 'Email'],
    liveUrl: 'https://email-generator-rqms.onrender.com',
    documentation: 'https://github.com/Zoya28/email_generator/blob/main/README.md',
    youtube: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    features: [
      'Tone adjustment for professional, casual, or friendly emails',
      'Purpose-specific draft generation',
      'Grammar and structure enhancement',
      'Quick preview and send options',
    ],
    challenges: 'Ensuring generated emails are contextually appropriate and maintain a professional tone.',
    solutions: 'Used prompt engineering and LLM fine-tuning to adapt responses to user-selected tone and purpose.',
    usage: [
      'Enter recipient and subject',
      'Select tone and purpose',
      'Review and edit draft',
      'Send or copy email',
    ],
  },
  {
    id: 'ai-chatbot',
    title: 'AI Chatbot',
    description: 'Intelligent chatbot with contextual conversations and memory retention using LangChain. Features intent recognition and dynamic response flow.',
    techStack: ['LangChain', 'FAISS', 'Streamlit', 'HuggingFace', 'Python'],
    tags: ['LangChain', 'FAISS', 'Chatbot'],
    liveUrl: 'https://chatgpt-clone-lmu3.onrender.com',
    documentation: 'https://github.com/Zoya28/ChatGPT-clone/blob/main/README.md',
    youtube: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    features: [
      'Contextual conversation with memory retention',
      'Intent recognition',
      'Dynamic response flow',
      'Integration with API',
    ],
    challenges: 'Maintaining context and memory across long conversations.',
    solutions: 'Integrated FAISS for memory and LangChain for context management.',
    usage: [
      'Start conversation',
      'Ask questions or give commands',
      'Review chatbot responses',
      'Continue or end chat',
    ],
  },
];

export function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div className="text-center py-20">Project not found.</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <section className="min-h-screen py-20 px-4 max-w-4xl mx-auto relative overflow-hidden">
        {/* Background overlays for theme consistency */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-pink-950/10 to-black pointer-events-none"></div>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(236, 72, 153, 0.1) 1px, transparent 1px),linear-gradient(90deg, rgba(236, 72, 153, 0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}></div>
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4 text-pink-400" style={{textShadow: '0 0 20px rgba(236, 72, 153, 0.7)'}}>{project.title}</h1>
          <p className="mb-6 text-lg text-white">{project.description}</p>
          <div className="mb-6 flex gap-4">
            <a href={project.liveUrl} target="_blank" rel="noopener" className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded font-semibold shadow-lg">Live Demo</a>
            <a href={project.documentation} target="_blank" rel="noopener" className="px-4 py-2 bg-blue-500 text-white rounded font-semibold">Documentation</a>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags?.map((tag) => (
              <span key={tag} className="text-xs font-mono px-2 py-1 bg-purple-900/50 text-pink-400 rounded border border-purple-500/30">{tag}</span>
            ))}
          </div>
          <div className="mb-8">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-purple-400 mb-2">Tech Stack</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {project.techStack.map((tech) => (
                  <div key={tech} className="px-4 py-2 bg-black/60 border border-purple-500 rounded text-purple-200 font-mono text-base text-center">{tech}</div>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-cyan-400 mb-2">Key Features</h2>
              <ul className="list-disc ml-6 text-white">
                {project.features?.map((feature, i) => (
                  <li key={i} className="mb-1">{feature}</li>
                ))}
              </ul>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div className="bg-black/60 border border-pink-500 rounded p-4">
                <h3 className="text-lg font-bold text-pink-400 mb-2">Challenges</h3>
                <p className="text-white text-sm">{project.challenges}</p>
              </div>
              <div className="bg-black/60 border border-cyan-400 rounded p-4">
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Solutions</h3>
                <p className="text-white text-sm">{project.solutions}</p>
              </div>
            </div>
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-purple-400 mb-2">How to Use</h2>
              <ol className="list-decimal ml-6 text-white">
                {project.usage?.map((step, i) => (
                  <li key={i} className="mb-1">{step}</li>
                ))}
              </ol>
            </div>
          </div>
          {/* <div className="mb-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-2">Demo</h2>
            <iframe width="100%" height="400" src={project.youtube} title="YouTube video" frameBorder="0" allowFullScreen className="rounded-lg border-2 border-purple-500"></iframe>
          </div> */}
        </div>
      </section>
    </div>
  );
}
