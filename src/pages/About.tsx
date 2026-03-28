import React from "react";
import developerImage from "../../files/IMG-20260328-WA0003.jpg";

const About: React.FC = () => {
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Redux"] },
    { category: "Backend", items: ["Node.js", "Python", "Express", "Django", "FastAPI"] },
    { category: "Database & Cloud", items: ["PostgreSQL", "MongoDB", "AWS", "Docker", "Redis"] },
    { category: "Tools", items: ["Git", "Jest", "Webpack", "Figma", "Linux"] }
  ];

  const experience = [
    {
      role: "Software Engineer I",
      company: "Avathon",
      period: "2025 - Present",
      description: "Building scalable backend solutions and user-friendly frontends for enterprise-level applications as a Full Stack Developer."
    }
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 sm:px-12 max-w-7xl mx-auto text-slate-900 dark:text-slate-200">
      
      {/* Bio Section */}
      <section className="mb-24 relative">
        <div className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 font-medium text-sm mb-6">
          About Me
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
          Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">Solutions</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              Hi, I'm Manas! I’m a 2025 IIT Kanpur graduate just starting my journey as a Software Engineer. My interest in web development actually sparked years ago in 2018; what started as a curiosity about how the internet works has evolved into a career building products from scratch.
            </p>
            <p>
              I’m currently deep-diving into modern web and backend technologies. My goal is to bridge the gap between complex engineering and human-centered design, ensuring that everything I build is as accessible as it is functional. I love the 'zero-to-one' process of turning an idea into a live, working digital experience.
            </p>
          </div>
          <div className="relative group perspective">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700/50 group-hover:border-cyan-400 dark:group-hover:border-cyan-500/50 transition-colors duration-500 shadow-xl dark:shadow-none">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 to-purple-400/10 dark:from-cyan-500/20 dark:to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <img 
                src={developerImage} 
                alt="Manas Singh - Software Engineer at IITK Library" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-24">
        <div className="inline-block px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-700 dark:text-purple-400 font-medium text-sm mb-6">
          Experience
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12">Where I've Worked</h2>
        
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
          {experience.map((job, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-950 bg-slate-200 dark:bg-slate-800 group-hover:bg-cyan-500 shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors duration-300">
                <div className="w-2 h-2 rounded-full bg-slate-400 group-hover:bg-white dark:group-hover:bg-slate-950 transition-colors duration-300"></div>
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 shadow-sm dark:shadow-none transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">{job.role}</h3>
                  <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-400/10 px-3 py-1 rounded-full whitespace-nowrap">{job.period}</span>
                </div>
                <h4 className="text-lg text-purple-600 dark:text-purple-400 font-medium mb-4">{job.company}</h4>
                <p className="text-slate-600 dark:text-slate-400">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <div className="inline-block px-4 py-2 rounded-full bg-green-100 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 text-green-700 dark:text-green-400 font-medium text-sm mb-6">
          Skills
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12">Technical Arsenal</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/60 hover:border-cyan-300 dark:hover:border-cyan-500/30 transition-colors duration-300 backdrop-blur-sm shadow-sm dark:shadow-none">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-mono text-sm">
                  0{idx + 1}
                </span>
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((item, i) => (
                  <li key={i} className="flex items-center text-slate-600 dark:text-slate-400 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 mr-3 group-hover:bg-cyan-500 dark:group-hover:bg-cyan-400 transition-colors"></span>
                    <span className="group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;
