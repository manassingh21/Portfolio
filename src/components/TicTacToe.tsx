import React, { useState } from 'react';

type Player = 'X' | 'O' | null;

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);

  const calculateWinner = (squares: Player[]) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Cols
      [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every((square) => square !== null);

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-lg dark:shadow-xl w-full max-w-md mx-auto relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400 dark:bg-cyan-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[60px] opacity-30 dark:opacity-20 pointer-events-none"></div>
      
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
        <span className="text-cyan-600 dark:text-cyan-400">#</span> Tic Tac Toe
      </h3>

      <div className="mb-6 h-8 text-lg font-medium text-slate-600 dark:text-slate-300">
        {winner ? (
          <span className="text-green-600 dark:text-green-400 flex items-center gap-2">Winner: {winner} 🎉</span>
        ) : isDraw ? (
          <span className="text-yellow-600 dark:text-yellow-400">It's a Draw!</span>
        ) : (
          <span>Next Player: <span className={isXNext ? 'text-cyan-600 dark:text-cyan-400 font-bold' : 'text-purple-600 dark:text-purple-400 font-bold'}>{isXNext ? 'X' : 'O'}</span></span>
        )}
      </div>

      <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-8 w-full max-w-[280px]">
        {board.map((square, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            disabled={!!winner || !!square}
            className={`
              h-20 sm:h-24 rounded-xl text-4xl font-black flex items-center justify-center transition-all duration-300 shadow-inner
              ${square ? 'bg-slate-100 dark:bg-slate-800' : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-95 cursor-pointer'}
              ${square === 'X' ? 'text-cyan-600 dark:text-cyan-400 drop-shadow-[0_0_8px_rgba(8,145,178,0.4)] dark:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]' : ''}
              ${square === 'O' ? 'text-purple-600 dark:text-purple-400 drop-shadow-[0_0_8px_rgba(147,51,234,0.4)] dark:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]' : ''}
              ${!square && !winner ? 'hover:shadow-[inset_0_0_10px_rgba(0,0,0,0.05)] dark:hover:shadow-[inset_0_0_15px_rgba(255,255,255,0.05)]' : ''}
            `}
          >
            {square}
          </button>
        ))}
      </div>

      <button
        onClick={resetGame}
        className="px-6 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-white transition-all duration-300 w-full sm:w-auto"
      >
        Restart Game
      </button>
    </div>
  );
};

export default TicTacToe;
