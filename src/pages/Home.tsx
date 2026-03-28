import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <main className="min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          
          {/* Left Text Content */}
          <div className="space-y-8 max-w-2xl">
            <div className="inline-block px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 text-cyan-700 dark:text-cyan-400 font-medium text-sm mb-4">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse"></span>
                Available for New Opportunities
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Solving Problems<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600">
                with Code
              </span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              I recently graduated from IIT Kanpur and I’m just starting my journey as a Software Engineer. I enjoy the challenge of building digital products from the ground up—making sure they work well and look great. I’m currently focused on mastering full-stack technologies to build better, more accessible software.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link 
                to="/projects" 
                className="px-8 py-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:bg-cyan-600 dark:hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(8,145,178,0.3)] dark:hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all duration-300"
              >
                View My Work
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 rounded-xl bg-white/50 dark:bg-slate-800/50 text-slate-700 dark:text-white font-medium border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 backdrop-blur-sm"
              >
                Contact Me
              </Link>
            </div>

            <div className="pt-12 border-t border-slate-200 dark:border-slate-800/60">
              <p className="text-sm text-slate-500 mb-4 font-medium uppercase tracking-wider">Tech Stack Overview</p>
              <div className="flex flex-wrap gap-3">
                {['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'AWS'].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium shadow-sm dark:shadow-none">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Visual Element */}
          <div className="hidden lg:flex justify-center relative">
            <div className="relative w-full max-w-lg aspect-square">
              {/* Decorative Code Screen */}
              <div className="absolute inset-0 bg-white/80 dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-700/50 backdrop-blur-xl shadow-xl dark:shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="h-10 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400 dark:bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400 dark:bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400 dark:bg-green-500"></div>
                </div>
                <div className="p-6 font-mono text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  <p><span className="text-purple-600 dark:text-purple-400">const</span> <span className="text-blue-600 dark:text-blue-400">developer</span> = {'{'}</p>
                  <p className="pl-4">name: <span className="text-green-600 dark:text-green-400">'Manas Singh'</span>,</p>
                  <p className="pl-4">role: <span className="text-green-600 dark:text-green-400">'Software Engineer'</span>,</p>
                  <p className="pl-4">skills: [<span className="text-green-600 dark:text-green-400">'Frontend'</span>, <span className="text-green-600 dark:text-green-400">'Backend'</span>, <span className="text-green-600 dark:text-green-400">'Cloud'</span>],</p>
                  <p className="pl-4">passion: <span className="text-green-600 dark:text-green-400">'Building scalable solutions'</span>,</p>
                  <p className="pl-4">coffee: <span className="text-blue-600 dark:text-blue-400">true</span></p>
                  <p>{'};'}</p>
                  <br/>
                  <p><span className="text-purple-600 dark:text-purple-400">export default</span> developer;</p>
                  
                  {/* Blinking Cursor */}
                  <span className="inline-block w-2.5 h-5 bg-cyan-500 dark:bg-cyan-400 ml-1 mt-4 animate-pulse"></span>
                </div>
              </div>

              {/* Decorative accents */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-400 dark:bg-cyan-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[50px] opacity-30 dark:opacity-20"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-400 dark:bg-purple-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[60px] opacity-30 dark:opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
