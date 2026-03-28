import React, { useState } from "react";
import TicTacToe from "../components/TicTacToe";
import Sudoku from "../components/Sudoku";

const Games: React.FC = () => {
  const [activeGame, setActiveGame] = useState<'tictactoe' | 'sudoku'>('tictactoe');

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 sm:px-12 max-w-7xl mx-auto text-slate-900 dark:text-slate-200">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-block px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 text-cyan-700 dark:text-cyan-400 font-medium text-sm mb-6">
          Recreational
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
          Take a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600 dark:from-cyan-400 dark:to-purple-500">Break</span>
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Even developers need to unwind. Play a quick game of Tic Tac Toe or exercise your brain with Sudoku!
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-12">
        <button
          onClick={() => setActiveGame('tictactoe')}
          className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
            activeGame === 'tictactoe'
              ? 'bg-cyan-600 dark:bg-cyan-500 text-white dark:text-slate-950 shadow-[0_0_20px_rgba(8,145,178,0.3)] dark:shadow-[0_0_20px_rgba(34,211,238,0.3)]'
              : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 shadow-sm dark:shadow-none'
          }`}
        >
          Tic Tac Toe
        </button>
        <button
          onClick={() => setActiveGame('sudoku')}
          className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
            activeGame === 'sudoku'
              ? 'bg-purple-600 dark:bg-purple-500 text-white dark:text-slate-950 shadow-[0_0_20px_rgba(147,51,234,0.3)] dark:shadow-[0_0_20px_rgba(168,85,247,0.3)]'
              : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 shadow-sm dark:shadow-none'
          }`}
        >
          Sudoku
        </button>
      </div>

      <div className="flex justify-center transition-all duration-500">
        {activeGame === 'tictactoe' ? <TicTacToe /> : <Sudoku />}
      </div>
    </div>
  );
};

export default Games;
