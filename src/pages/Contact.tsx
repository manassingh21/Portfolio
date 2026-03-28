import React from "react";
import ContactForm from "../components/ContactForm";
import { FaGithub, FaLinkedin, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6 sm:px-12 max-w-7xl mx-auto text-slate-900 dark:text-slate-200">
      
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-block px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 text-cyan-700 dark:text-cyan-400 font-medium text-sm mb-6">
          Get In Touch
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
          Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-500">Together</span>
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        
        {/* Contact Info Sidebar */}
        <div className="md:col-span-2 space-y-8">
          <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center md:text-left h-full flex flex-col justify-between shadow-sm dark:shadow-none">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Connect With Me</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                I'm currently looking for new opportunities. My inbox is always open.
              </p>
              
              <div className="space-y-4">
                <a href="mailto:manassingh9220@gmail.com" className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  <span className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-lg text-slate-700 dark:text-slate-200"><FaEnvelope /></span>
                  manassingh9220@gmail.com
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  <span className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-lg text-slate-700 dark:text-slate-200"><FaLinkedin /></span>
                  LinkedIn
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  <span className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-lg text-slate-700 dark:text-slate-200"><FaGithub /></span>
                  GitHub
                </a>
                <a href="tel:+919876543210" className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  <span className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-lg text-slate-700 dark:text-slate-200"><FaPhoneAlt /></span>
                  +91-XXXXX-XXXXX
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Area */}
        <div className="md:col-span-3">
          <ContactForm />
        </div>

      </div>
    </div>
  );
};

export default Contact;