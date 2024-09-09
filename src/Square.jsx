import React from 'react';

function Square({ value, onClick, theme, index, winnerSquares, isReset}) {
    
  const squareStyle = {
    backgroundColor: theme === 'light' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.3)',
    borderColor: theme=='light' ? '#000000' : '#ffffff',
  };

  let isWinner = winnerSquares.includes(index);

  if (isWinner) {
    squareStyle.backgroundColor= '#FF0000';
  }

  if (isReset) {
        squareStyle.backgroundColor=theme === 'light' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.3)';
        if (isWinner) {
        squareStyle.backgroundColor = '#FF0000';
        }
  }

  return (
    <button
      onClick={onClick}
      className={`border-2 w-16 h-16 xss:w-16 xs:w-24 sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40 xss:h-16 xs:h-24 sm:h-40 md:h-40 lg:h-40 xl:h-40 2xl:h-40 rounded-lg flex justify-center items-center font-bold hover:bg-white/50 transition duration-300 ${isWinner ? 'winner' : ''}`}
      style={squareStyle}
    >
      <span className={`text-2xl xss:text-2xl xs:text-4xl sm:text-8xl md:text-8xl lg:text-8xl xl:text-8xl 2xl:text-8xl font-bold ${value ? 'neon-text' : ''}`}>
        {value}
      </span>
    </button>
  );
}

export default Square;



