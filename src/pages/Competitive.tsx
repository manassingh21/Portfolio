import React from 'react';
import { SiLeetcode, SiCodeforces, SiCodechef } from 'react-icons/si';

const Competitive: React.FC = () => {
  return (
    <main className="min-h-screen pt-32 pb-12 px-6 sm:px-12 flex flex-col items-center relative overflow-hidden">
      <div className="max-w-7xl w-full relative z-10 space-y-16">
        <div className="text-center space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 text-cyan-700 dark:text-cyan-400 font-medium text-sm mb-4">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse"></span>
              Algorithms & Data Structures
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600">
              Competitive Programming
            </span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto pt-2">
            A dashboard highlighting my problem-solving journey, algorithmic skills, and contest ratings across various platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* LeetCode Card */}
          <div className="bg-white/80 dark:bg-slate-900/80 rounded-3xl border border-slate-200 dark:border-slate-700/50 backdrop-blur-xl shadow-xl dark:shadow-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
            <div className="p-8 flex-1">
              <div className="flex items-center justify-between mb-8">
                <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 flex items-center justify-center">
                  <SiLeetcode className="text-4xl text-yellow-500 drop-shadow-sm" />
                </div>
                <span className="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 text-sm font-semibold border border-slate-200 dark:border-slate-700">
                  LeetCode
                </span>
              </div>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Knight</h3>
              <div className="space-y-4 mt-8">
                <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-3">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Max Rating</span>
                  <span className="font-bold text-slate-900 dark:text-white text-lg">1950</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-3">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Problems Solved</span>
                  <span className="font-bold text-slate-900 dark:text-white text-lg">500+</span>
                </div>
                <div className="flex justify-between items-center pb-1">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Global Rank</span>
                  <span className="font-bold text-slate-900 dark:text-white text-lg">Top 5%</span>
                </div>
              </div>
            </div>
            <div className="px-8 py-5 bg-slate-50 dark:bg-slate-950/50 border-t border-slate-200 dark:border-slate-800 relative z-10 transition-colors group-hover:bg-yellow-50/50 dark:group-hover:bg-yellow-500/5">
               <a href="#" className="inline-flex text-yellow-600 dark:text-yellow-500 font-bold hover:underline text-sm items-center gap-2">
                 View Profile <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
               </a>
            </div>
          </div>

          {/* Codeforces Card */}
          <div className="bg-white/80 dark:bg-slate-900/80 rounded-3xl border border-slate-200 dark:border-slate-700/50 backdrop-blur-xl shadow-xl dark:shadow-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
            <div className="p-8 flex-1">
              <div className="flex items-center justify-between mb-8">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                  <SiCodeforces className="text-4xl text-blue-500 drop-shadow-sm" />
                </div>
                <span className="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 text-sm font-semibold border border-slate-200 dark:border-slate-700">
                  Codeforces
                </span>
              </div>
              <h3 className="text-3xl font-black text-blue-600 dark:text-blue-400 mb-2">Expert</h3>
              <div className="space-y-4 mt-8">
                <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-3">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Current Rating</span>
                  <span className="font-bold text-slate-900 dark:text-white text-lg">1650</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-3">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Max Rating</span>
                  <span className="font-bold text-slate-900 dark:text-white text-lg">1700</span>
                </div>
                <div className="flex justify-between items-center pb-1">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Contests</span>
                  <span className="font-bold text-slate-900 dark:text-white text-lg">45</span>
                </div>
              </div>
            </div>
            <div className="px-8 py-5 bg-slate-50 dark:bg-slate-950/50 border-t border-slate-200 dark:border-slate-800 relative z-10 transition-colors group-hover:bg-blue-50/50 dark:group-hover:bg-blue-500/5">
               <a href="#" className="inline-flex text-blue-600 dark:text-blue-500 font-bold hover:underline text-sm items-center gap-2">
                 View Profile <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
               </a>
            </div>
          </div>

          {/* CodeChef Card */}
          <div className="bg-white/80 dark:bg-slate-900/80 rounded-3xl border border-slate-200 dark:border-slate-700/50 backdrop-blur-xl shadow-xl dark:shadow-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
            <div className="p-8 flex-1">
              <div className="flex items-center justify-between mb-8">
                <div className="w-16 h-16 rounded-2xl bg-amber-700/10 dark:bg-amber-600/10 flex items-center justify-center">
                  <SiCodechef className="text-4xl text-amber-700 dark:text-amber-500 drop-shadow-sm" />
                </div>
                <span className="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 text-sm font-semibold border border-slate-200 dark:border-slate-700">
                  CodeChef
                </span>
              </div>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-2 flex items-baseline gap-2">
                4★ <span className="text-xl font-bold text-slate-500">Div 2</span>
              </h3>
              <div className="space-y-4 mt-8">
                <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-3">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Current Rating</span>
                  <span className="font-bold text-slate-900 dark:text-white text-lg">1850</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-3">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Highest Rating</span>
                  <span className="font-bold text-slate-900 dark:text-white text-lg">1920</span>
                </div>
                <div className="flex justify-between items-center pb-1">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Global Rank</span>
                  <span className="font-bold text-slate-900 dark:text-white text-lg">Top 2%</span>
                </div>
              </div>
            </div>
            <div className="px-8 py-5 bg-slate-50 dark:bg-slate-950/50 border-t border-slate-200 dark:border-slate-800 relative z-10 transition-colors group-hover:bg-amber-50/50 dark:group-hover:bg-amber-500/5">
               <a href="#" className="inline-flex text-amber-700 dark:text-amber-500 font-bold hover:underline text-sm items-center gap-2">
                 View Profile <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
               </a>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
};

export default Competitive;
