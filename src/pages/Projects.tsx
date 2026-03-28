import React from "react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Baatcheet",
      description: "A real-time chat application featuring seamless messaging, end-to-end encryption, and live presence indicators.",
      image: "chat",
      tags: ["React", "Socket.io", "Redis", "Redux", "Express"],
      links: { github: "#", live: "#" }
    },
    {
      title: "Fintech Dashboard UI",
      description: "A comprehensive financial dashboard interface built with React and Tailwind CSS. Features real-time data visualization using Recharts and dark mode support.",
      image: "finance",
      tags: ["React", "TypeScript", "Tailwind", "Recharts"],
      links: { github: "#", live: "#" }
    },
    {
      title: "E-Commerce Microservices",
      description: "A scalable backend architecture for an e-commerce platform. Built with Node.js and Docker, utilizing RabbitMQ for asynchronous event processing.",
      image: "ecommerce",
      tags: ["Node.js", "Express", "Docker", "RabbitMQ", "MongoDB"],
      links: { github: "#" }
    },
    {
      title: "AI Image Generator",
      description: "A web application that interfaces with OpenAI's DALL-E API. Includes user authentication, image gallery, and the ability to save prompts to a PostgreSQL database.",
      image: "ai",
      tags: ["Next.js", "Python", "FastAPI", "PostgreSQL", "OpenAI"],
      links: { github: "#", live: "#" }
    }
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 sm:px-12 max-w-7xl mx-auto text-slate-900 dark:text-slate-200">
      
      <div className="mb-16">
        <div className="inline-block px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 text-cyan-700 dark:text-cyan-400 font-medium text-sm mb-6">
          My Portfolio
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Some Things I've <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-500">Built</span>
        </h2>
        <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
          A showcase of my recent projects, demonstrating my expertise in frontend development, backend architecture, and full-stack integration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((project, idx) => (
          <div key={idx} className="group relative rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors duration-500 shadow-sm dark:shadow-none">
            {/* Image placeholder area */}
            <div className="w-full aspect-video bg-slate-100 dark:bg-slate-800 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 to-transparent z-10"></div>
              {/* Decorative graphic based on project */}
              <div className={`relative w-3/4 h-3/4 rounded-xl border border-slate-200 dark:border-white/5 shadow-md dark:shadow-2xl transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-500 overflow-hidden ${
                project.image === 'finance' ? 'bg-gradient-to-br from-green-400/20 to-blue-400/20 dark:from-green-500/20 dark:to-blue-500/20' :
                project.image === 'ecommerce' ? 'bg-gradient-to-br from-orange-400/20 to-red-400/20 dark:from-orange-500/20 dark:to-red-500/20' :
                project.image === 'ai' ? 'bg-gradient-to-br from-purple-400/20 to-pink-400/20 dark:from-purple-500/20 dark:to-pink-500/20' :
                project.image === 'chat' ? 'bg-slate-50 dark:bg-slate-800' :
                'bg-gradient-to-br from-cyan-400/20 to-blue-400/20 dark:from-cyan-500/20 dark:to-blue-500/20'
              }`}>
                 <div className={`w-full h-8 border-b border-slate-200 dark:border-white/10 flex items-center px-4 gap-1.5 ${project.image === 'chat' ? 'bg-white/60 dark:bg-slate-900/60 backdrop-blur-md absolute top-0 w-full z-10' : ''}`}>
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-slate-300 dark:bg-white/20"></div>
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-slate-300 dark:bg-white/20"></div>
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-slate-300 dark:bg-white/20"></div>
                 </div>

                 {project.image === 'chat' && (
                   <div className="pt-10 px-3 pb-3 h-full flex flex-col gap-2 overflow-hidden">
                     {/* Incoming Message */}
                     <div className="bg-cyan-100 dark:bg-cyan-900/40 text-cyan-800 dark:text-cyan-100 px-3 py-1.5 rounded-2xl rounded-tl-sm text-[8px] sm:text-[10px] font-medium max-w-[85%] self-start animate-[pulse_3s_ease-in-out_infinite]">
                       Welcome to Baatcheet! 👋
                     </div>
                     {/* Outgoing Message */}
                     <div className="bg-blue-500 text-white px-3 py-1.5 rounded-2xl rounded-tr-sm text-[8px] sm:text-[10px] font-medium max-w-[85%] self-end shadow-sm">
                       This chat app looks amazing!
                     </div>
                     {/* Typing Indicator */}
                     <div className="flex gap-1 items-center self-start mt-1 px-2">
                       <div className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                       <div className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></div>
                       <div className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                     </div>
                   </div>
                 )}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 relative z-20">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs font-mono text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-500/10 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 border-t border-slate-200 dark:border-slate-800 pt-6">
                {project.links.github && (
                  <a href={project.links.github} className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    Source Code
                  </a>
                )}
                {project.links.live && (
                  <a href={project.links.live} className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-2 text-sm font-medium ml-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Projects;