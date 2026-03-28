import React, { useState } from 'react';

const initialGrid = [
  5, 3, 0, 0, 7, 0, 0, 0, 0,
  6, 0, 0, 1, 9, 5, 0, 0, 0,
  0, 9, 8, 0, 0, 0, 0, 6, 0,
  8, 0, 0, 0, 6, 0, 0, 0, 3,
  4, 0, 0, 8, 0, 3, 0, 0, 1,
  7, 0, 0, 0, 2, 0, 0, 0, 6,
  0, 6, 0, 0, 0, 0, 2, 8, 0,
  0, 0, 0, 4, 1, 9, 0, 0, 5,
  0, 0, 0, 0, 8, 0, 0, 7, 9
];

const solutionGrid = [
  5, 3, 4, 6, 7, 8, 9, 1, 2,
  6, 7, 2, 1, 9, 5, 3, 4, 8,
  1, 9, 8, 3, 4, 2, 5, 6, 7,
  8, 5, 9, 7, 6, 1, 4, 2, 3,
  4, 2, 6, 8, 5, 3, 7, 9, 1,
  7, 1, 3, 9, 2, 4, 8, 5, 6,
  9, 6, 1, 5, 3, 7, 2, 8, 4,
  2, 8, 7, 4, 1, 9, 6, 3, 5,
  3, 4, 5, 2, 8, 6, 1, 7, 9
];

const Sudoku: React.FC = () => {
  const [grid, setGrid] = useState<number[]>(initialGrid);
  const [selectedCell, setSelectedCell] = useState<number | null>(null);

  const handleCellClick = (index: number) => {
    if (initialGrid[index] === 0) {
      setSelectedCell(index);
    }
  };

  const handleNumberInput = (num: number) => {
    if (selectedCell !== null) {
      const newGrid = [...grid];
      newGrid[selectedCell] = num;
      setGrid(newGrid);
    }
  };

  const isSolved = grid.every((cell, index) => cell === solutionGrid[index]);

  return (
    <div className="flex flex-col items-center p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-lg dark:shadow-xl w-full max-w-md mx-auto relative overflow-hidden">
      <div className="absolute top-0 left-0 w-32 h-32 bg-purple-400 dark:bg-purple-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[60px] opacity-30 dark:opacity-20 pointer-events-none"></div>

      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
        <span className="text-purple-600 dark:text-purple-400">#</span> Sudoku
      </h3>

      {isSolved && (
        <div className="mb-4 text-green-600 dark:text-green-400 font-bold animate-pulse text-lg">
          Puzzle Solved! 🎉
        </div>
      )}

      <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded-xl border border-slate-200 dark:border-slate-700 mb-6">
        <div className="grid grid-cols-9 gap-[1px] sm:gap-[2px] bg-slate-300 dark:bg-slate-600 rounded">
          {grid.map((cell, index) => {
            const row = Math.floor(index / 9);
            const col = index % 9;
            const isInitial = initialGrid[index] !== 0;
            const isSelected = selectedCell === index;
            const isConflict = !isInitial && cell !== 0 && cell !== solutionGrid[index];

            // Add thicker borders for 3x3 grid sections
            const borderClasses = `
              ${col % 3 === 2 && col !== 8 ? 'mr-[2px]' : ''}
              ${row % 3 === 2 && row !== 8 ? 'mb-[2px]' : ''}
            `;

            return (
              <div
                key={index}
                onClick={() => handleCellClick(index)}
                className={`
                  w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-sm sm:text-base font-bold transition-all cursor-pointer bg-white dark:bg-slate-900 
                  ${borderClasses}
                  ${isInitial ? 'text-slate-900 dark:text-slate-200' : 'text-cyan-600 dark:text-cyan-400'}
                  ${isSelected ? 'bg-slate-200 dark:bg-slate-700 ring-2 ring-cyan-400 dark:ring-cyan-500 z-10' : 'hover:bg-slate-50 dark:hover:bg-slate-800'}
                  ${isConflict ? 'text-red-500 dark:text-red-400 drop-shadow-[0_0_3px_rgba(239,68,68,0.3)] dark:drop-shadow-[0_0_5px_rgba(248,113,113,0.5)]' : ''}
                `}
              >
                {cell !== 0 ? cell : ''}
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-5 gap-2 w-full max-w-[280px] mb-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <button
            key={num}
            onClick={() => handleNumberInput(num)}
            className="h-10 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center justify-center font-bold"
          >
            {num}
          </button>
        ))}
        <button
          onClick={() => handleNumberInput(0)}
          className="h-10 rounded-lg border border-red-500/30 text-red-500 dark:text-red-400 hover:bg-red-500/10 transition-colors flex items-center justify-center font-bold"
        >
          Del
        </button>
      </div>

      <button
        onClick={() => {
          setGrid(initialGrid);
          setSelectedCell(null);
        }}
        className="text-sm text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors mt-2"
      >
        Reset Puzzle
      </button>

    </div>
  );
};

export default Sudoku;
