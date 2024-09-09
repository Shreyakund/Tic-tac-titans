// import React, { useState, useEffect } from 'react';
// import Square from './Square';
// import Confetti from 'react-confetti';
// import Particle from './Particle'; // Import Particle component
// import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'; // Import icons

// function Board() {
//   const [squares, setSquares] = useState(Array(9).fill(null));
//   const [isXNext, setIsXNext] = useState(true);
//   const [winner, setWinner] = useState(null);
//   const [gameMode, setGameMode] = useState(null);
//   const [player1Name, setPlayer1Name] = useState('');
//   const [player2Name, setPlayer2Name] = useState('');
//   const [player1Sign, setPlayer1Sign] = useState('X');
//   const [player2Sign, setPlayer2Sign] = useState('O');
//   const [signMessage, setSignMessage] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const [timer, setTimer] = useState(20);
//   const [isPaused, setIsPaused] = useState(false);
//   const [showSetup, setShowSetup] = useState(true);
//   const [hasWon, setHasWon] = useState(false);
//   const [winnerSquares, setWinnerSquares] = useState([]);
//   const [isReset, setIsReset] = useState(false);
//   const [theme, setTheme] = useState('dark');

//     // Theme toggle function
//     const handleThemeChange = () => {
//       setTheme(theme === 'light' ? 'dark' : 'light');
//     };
  

//   const handleClick = (index) => {
//     if (winner || squares[index] || isPaused) {
//       if (isPaused) {
//         setSignMessage('Please resume the timer to make a move.');
//         setShowModal(true);
//       }
//       return;
//     }
  
//     const newSquares = [...squares];
//     newSquares[index] = isXNext ? player1Sign : player2Sign;
//     setSquares(newSquares);
//     setIsXNext(!isXNext);
//     calculateWinner(newSquares);
//     setTimer(20); 
//   };

//   const calculateWinner = (squares) => {
//     const lines = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ];
//     for (let line of lines) {
//       const [a, b, c] = line;
//       if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//         setWinner(squares[a]);
//         setHasWon(true);
//         setWinnerSquares([a, b, c]); 
//         console.log("Winner squares:", winnerSquares); 
//         return;
//       }
//     }
  
//     if (!squares.includes(null)) {
//       setWinner('tie');
//     }
//   };


//   const restartGame = () => {
//     setSquares(Array(9).fill(null));
//     setIsXNext(true);
//     setWinner(null);
//     setSignMessage('');
//     setShowModal(false);
//     setTimer(20);
//     setIsReset(true); 
//     setWinnerSquares([]); 
//   };
  
//   const scratchGame = () => {
//     setSquares(Array(9).fill(null));
//     setIsXNext(true);
//     setWinner(null);
//     setGameMode(null);
//     setPlayer1Name('');
//     setPlayer2Name('');
//     setPlayer1Sign('X');
//     setPlayer2Sign('O');
//     setSignMessage('');
//     setTimer(20);
//     setShowModal(false);
//     setShowSetup(true);
//     setIsReset(true); 
//     setWinnerSquares([]); 
//   };

//   const handleSignSelection = (sign) => {
//     if (!player1Name || !player2Name) {
//       setSignMessage('Please enter names for both players before choosing a sign.');
//       setShowModal(true);
//       return;
//     }
    
//     setPlayer1Sign(sign);
//     setPlayer2Sign(sign === 'X' ? 'O' : 'X');
//     setSignMessage(`Player 1 (${player1Name.toUpperCase()}) has chosen "${sign}". Player 2 (${player2Name.toUpperCase()} ) will be "${sign === 'X' ? 'O' : 'X'}".`);
//     setShowModal(true); 
//   };

//   const handleStartGame = () => {
//     if (player1Name && player2Name) {
//       setGameMode('2-player');
//       setSignMessage(`Game Started! Player 1 (${player1Name}) is '${player1Sign}', Player 2 (${player2Name}) is '${player2Sign}'.`);
//       setShowModal(false); 
//       setTimer(20); 
//       setShowSetup(false); 
//     } else {
//       setSignMessage('Please enter names for both players before starting the game.');
//     }
//   };
  

//   const currentPlayerMessage = isXNext
//   ? `Play time for ${player1Name}`
//   : `Play time for ${player2Name}`;


//     useEffect(() => {
//       if (winner || !gameMode || isPaused) return;
    
//       const interval = setInterval(() => {
//         setTimer((prevTimer) => {
//           if (prevTimer === 1) {
//             setIsXNext(!isXNext); 
//             return 20;
//           }
//           return prevTimer - 1;
//         });
//       }, 2000);
    
//       return () => clearInterval(interval);
//     }, [isXNext, winner, gameMode, isPaused]);

//   const togglePause = () => {
//     setIsPaused((prevIsPaused) => !prevIsPaused);
//   };

//   return (
//     <div className="relative flex flex-col justify-center items-center h-screen w-full p-4">
//       {/* Particle background */}
//       <div className="absolute top-0 left-0 w-full h-full z-0">
//         <Particle />
//       </div>

//       {/* Theme toggle button */}
//       <button
//         onClick={handleThemeChange}
//         className={`absolute top-2 right-2 rounded-full p-2 z-20 ${theme === 'light' ? 'bg-gray-200 hover:bg-gray-300' : 'bg-gray-800 hover:bg-gray-700'}`}
//       >
//         {theme === 'light' ? (
//           <MoonIcon className="h-6 w-6 text-gray-600" />
//         ) : (
//           <SunIcon className="h-6 w-6 text-yellow-500" />
//         )}
//         <span className="sr-only">{theme === 'light' ? 'Night Mode' : 'Day Mode'}</span>
//       </button>


//       {!gameMode ? (
//         showSetup ? (
//           <div className="surwat relative z-10 flex flex-wrap flex-col justify-center items-center w-full max-w-md p-6 rounded-lg shadow-md xs:max-w-sm xss:max-w-xs" style={{ backgroundColor: theme === 'light' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)' }}>
//           <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: theme === 'light' ? '#880808' : '#FFC000' }}>Setup Game</h2>
//           <div className="flex flex-col justify-center items-center w-full max-w-xs mb-4">
//           <div className="flex flex-col w-full">
//                 <input
//                   type="text"
//                   placeholder="Player 1 Name"
//                   value={player1Name}
//                   onChange={(e) => setPlayer1Name(e.target.value)}
//                    className="border p-2 rounded mb-4 w-full"
//                   pattern="[A-Za-z0-9]*"
//                   inputMode="text"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Player 2 Name"
//                   value={player2Name}
//                   onChange={(e) => setPlayer2Name(e.target.value)}
//                    className="border p-2 rounded mb-4 w-full"
//                   pattern="[A-Za-z0-9]*"
//                   inputMode="text"
//                 />
//                  <div className="flex flex-col items-center mt-6">
//                   <h3 className="text-lg md:text-xl font-semibold mb-2" style={{color:theme==='light'?'#ffffff':'#000000'}}>Player 1, Choose Your Sign</h3>
//                   <div className="flex gap-4">
//                   <button
//                     onClick={() => handleSignSelection('X')}
//                     className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm md:text-lg font-bold rounded-lg shadow-lg hover:from-purple-500 hover:to-pink-500 transition duration-300"
//                   >
//                     X
//                   </button>
//                   <button
//                     onClick={() => handleSignSelection('O')}
//                     className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-sm md:text-lg font-bold rounded-lg shadow-lg hover:from-purple-500 hover:to-pink-500 transition duration-300 text-white"
//                   >
//                     O
//                   </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ) : null
//       ) : (
//         <>
//           {!winner && (
//             <div className=" relative z-10 flex flex-wrap mb-4 px-8 py-4 md:px-6 md:py-3 sm:px-4 sm:py-2 xs:px-3 xs:py-1 xxs:px-2 xxs:py-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm xs:text-xs xxs:text-[10px] font-bold rounded-lg shadow-lg">
//               {currentPlayerMessage} - Time left: {timer}s
//               <button
//                 onClick={togglePause}
//                 className="ml-4 px-6 py-2 xl:px-5 xl:py-2 lg:px-4 lg:py-2 md:px-3 md:py-1 sm:px-2 sm:py-1 xs:px-2 xs:py-1 xxs:px-1 xxs:py-1 bg-white text-purple-500 font-bold rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 text-lg xl:text-base lg:text-sm md:text-xs sm:text-xs xs:text-[10px] xxs:text-[9px]"
//               >
//                 {isPaused ? 'Resume Timer' : 'Pause Timer'}
//               </button>
//             </div>
//           )}
//           <div className="relative z-10 flex flex-wrap grid grid-cols-3 gap-4 mb-4">
//             {squares.map((square, index) => (
//                 <Square
//                 key={index}
//                 value={square}
//                 onClick={() => handleClick(index)}
//                 theme={theme}
//                 index={index}
//                 winnerSquares={winnerSquares}
//                 isReset={isReset}
//                 />
//             ))}
//           </div>
//           {winner && (
//             <div className=" z-10 flex flex-wrap fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
//               <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//                 <h2 className="text-2xl font-semibold mb-4">
//                 {winner === 'tie' ? (
//                   "It's a tie!"
//                 ) : (
//                   <>
//                     🎉 {winner === player1Sign ? player1Name : player2Name} wins! 🎉
//                   </>
//                 )}
//                 </h2>
//                 {hasWon && (
//                   <Confetti
//                     recycle={false}
//                     numberOfPieces={200}
//                     gravity={0.2}
//                     colors={['#FF69B4', '#33CC33', '#6666CC']}
//                   />
//                 )}
//                 <button
//                   onClick={restartGame}
//                   className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-lg font-bold rounded-lg shadow-lg hover:from-purple-500 hover:to-pink-500 transition duration-300"
//                 >
//                   Play More
//                 </button>
//                 <button
//                   onClick={scratchGame}
//                   className="px-6 py-3 ml-4 mt-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-lg font-bold rounded-lg shadow-lg hover:from-purple-500 hover:to-pink-500 transition duration-300"
//                 >
//                   Start from scratch
//                 </button>
//               </div>
//             </div>
//           )}
//           <div className="relative z-10 flex flex-wrap flex flex-col xs:flex-row justify-center items-center mt-4">
//             <button
//               onClick={restartGame}
//               className="mb-4 xs:mb-0 px-4 xs:px-6 py-2 xs:py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white 
//               text-base sm:text-lg md:text-xl font-bold rounded-lg shadow-lg hover:from-purple-500 hover:to-pink-500 transition 
//               duration-300 xs:mr-4 w-full xs:w-auto"
//             >
//               Restart Game
//             </button>

//             <button
//               onClick={scratchGame}
//               className="px-4 xs:px-6 py-2 xs:py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-base 
//               sm:text-lg md:text-xl font-bold rounded-lg shadow-lg hover:from-purple-500 hover:to-pink-500 transition 
//               duration-300 w-full xs:w-auto"
//             >
//               Start from Scratch
//             </button>
//           </div>
//         </>
//       )}

//       {/* Modal for Sign Selection */}
//       {showModal && (
//       <div className=" z-10 flex flex-wrap fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//         <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//           <p className="text-lg font-medium mb-4">{signMessage}</p>
//           {signMessage.includes('Please enter names') && (
//             <button
//               onClick={() => setShowModal(false)}
//               className={`
//                 px-10 py-4 text-xl 2xl:px-12 2xl:py-5 2xl:text-2xl 
//                 xl:px-10 xl:py-4 xl:text-xl 
//                 lg:px-8 lg:py-3 lg:text-lg 
//                 md:px-6 md:py-3 md:text-lg 
//                 sm:px-5 sm:py-3 sm:text-base 
//                 xs:px-4 xs:py-2 xs:text-sm 
//                 xss:px-2 xss:py-1 xss:text-xs 
//                 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-lg shadow-lg 
//                 hover:from-purple-500 hover:to-pink-500 transition duration-300
//               `}
//             >
//               Close
//             </button>
//           )}
//           {signMessage.includes('Player') && (
//             <button
//               onClick={handleStartGame}
//               className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-lg font-bold rounded-lg shadow-lg hover:from-purple-500 hover:to-pink-500 transition duration-300"
//             >
//               Start Game
//             </button>
//           )}
//           {signMessage.includes('Please resume the timer') && (
//             <button
//               onClick={() => {
//                 togglePause();
//                 setShowModal(false);
//               }}
//               className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-lg font-bold rounded-lg shadow-lg hover:from-purple-500 hover:to-pink-500 transition duration-300"
//             >
//               Resume Timer
//             </button>
//           )}
//         </div>
//       </div>
//     )}

//     </div>
//   );
// }

// export default Board;

import React, { useState, useEffect } from 'react';
import Square from './Square';
import Confetti from 'react-confetti';
import Particle from './Particle'; // Import Particle component
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'; // Import icons

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [gameMode, setGameMode] = useState(null);
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  const [player1Sign, setPlayer1Sign] = useState('X');
  const [player2Sign, setPlayer2Sign] = useState('O');
  const [signMessage, setSignMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [timer, setTimer] = useState(20);
  const [isPaused, setIsPaused] = useState(false);
  const [showSetup, setShowSetup] = useState(true);
  const [hasWon, setHasWon] = useState(false);
  const [winnerSquares, setWinnerSquares] = useState([]);
  const [isReset, setIsReset] = useState(false);
  const [theme, setTheme] = useState('dark'); // Initialize theme

  // Theme toggle function
  const handleThemeChange = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleClick = (index) => {
    if (winner || squares[index] || isPaused) {
      if (isPaused) {
        setSignMessage('Please resume the timer to make a move.');
        setShowModal(true);
      }
      return;
    }
  
    const newSquares = [...squares];
    newSquares[index] = isXNext ? player1Sign : player2Sign;
    setSquares(newSquares);
    setIsXNext(!isXNext);
    calculateWinner(newSquares);
    setTimer(20);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        setWinner(squares[a]);
        setHasWon(true);
        setWinnerSquares([a, b, c]);
        console.log("Winner squares:", winnerSquares);
        return;
      }
    }
  
    if (!squares.includes(null)) {
      setWinner('tie');
    }
  };

  const restartGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setSignMessage('');
    setShowModal(false);
    setTimer(20);
    setIsReset(true);
    setWinnerSquares([]);
  };

  const scratchGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setGameMode(null);
    setPlayer1Name('');
    setPlayer2Name('');
    setPlayer1Sign('X');
    setPlayer2Sign('O');
    setSignMessage('');
    setTimer(20);
    setShowModal(false);
    setShowSetup(true);
    setIsReset(true);
    setWinnerSquares([]);
  };

  const handleSignSelection = (sign) => {
    if (!player1Name || !player2Name) {
      setSignMessage('Please enter names for both players before choosing a sign.');
      setShowModal(true);
      return;
    }
    
    setPlayer1Sign(sign);
    setPlayer2Sign(sign === 'X' ? 'O' : 'X');
    setSignMessage(`Player 1 (${player1Name.toUpperCase()}) has chosen "${sign}". Player 2 (${player2Name.toUpperCase()} ) will be "${sign === 'X' ? 'O' : 'X'}".`);
    setShowModal(true);
  };

  const handleStartGame = () => {
    if (player1Name && player2Name) {
      setGameMode('2-player');
      setSignMessage(`Game Started! Player 1 (${player1Name}) is '${player1Sign}', Player 2 (${player2Name}) is '${player2Sign}'.`);
      setShowModal(false);
      setTimer(20);
      setShowSetup(false);
    } else {
      setSignMessage('Please enter names for both players before starting the game.');
    }
  };

  const currentPlayerMessage = isXNext
    ? `Play time for ${player1Name}`
    : `Play time for ${player2Name}`;

  useEffect(() => {
    if (winner || !gameMode || isPaused) return;

    const interval = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer === 1) {
          setIsXNext(!isXNext);
          return 20;
        }
        return prevTimer - 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isXNext, winner, gameMode, isPaused]);

  const togglePause = () => {
    setIsPaused(prevIsPaused => !prevIsPaused);
  };

  return (
    <div className={`relative flex flex-col justify-center items-center h-screen w-full p-4 ${theme === 'light' ? 'bg-white' : 'bg-black'}`}>
      {/* Particle background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Particle />
      </div>

      {/* Theme toggle button */}
      <button
        onClick={handleThemeChange}
        className={`absolute top-2 right-2 rounded-full p-2 z-20 ${theme === 'light' ? 'bg-gray-200 hover:bg-gray-300' : 'bg-gray-800 hover:bg-gray-700'}`}
      >
        {theme === 'light' ? (
          <MoonIcon className="h-6 w-6 text-gray-600" />
        ) : (
          <SunIcon className="h-6 w-6 text-yellow-500" />
        )}
        <span className="sr-only">{theme === 'light' ? 'Night Mode' : 'Day Mode'}</span>
      </button>

      {!gameMode ? (
        showSetup ? (
          <div className="relative z-10 flex flex-wrap flex-col justify-center items-center w-full max-w-md p-6 rounded-lg shadow-md" style={{ backgroundColor: theme === 'light' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: theme === 'light' ? '#880808' : '#FFC000' }}>Setup Game</h2>
            <div className="flex flex-col justify-center items-center w-full max-w-xs mb-4">
              <div className="flex flex-col w-full">
                <input
                  type="text"
                  placeholder="Player 1 Name"
                  value={player1Name}
                  onChange={(e) => setPlayer1Name(e.target.value)}
                  className="border p-2 rounded mb-4 w-full"
                  pattern="[A-Za-z0-9]*"
                  inputMode="text"
                />
                <input
                  type="text"
                  placeholder="Player 2 Name"
                  value={player2Name}
                  onChange={(e) => setPlayer2Name(e.target.value)}
                  className="border p-2 rounded mb-4 w-full"
                  pattern="[A-Za-z0-9]*"
                  inputMode="text"
                />
                <div className="flex flex-col items-center mt-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-2" style={{ color: theme === 'light' ? '#ffffff' : '#000000' }}>Player 1, Choose Your Sign</h3>
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleSignSelection('X')}
                      className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm md:text-lg font-bold rounded-lg shadow-lg hover:from-purple-500 hover:to-pink-500 transition duration-300"
                    >
                      X
                    </button>
                    <button
                      onClick={() => handleSignSelection('O')}
                      className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-sm md:text-lg font-bold rounded-lg shadow-lg hover:from-purple-500 hover:to-pink-500 transition duration-300 text-white"
                    >
                      O
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null
      ) : (
        <>
          {!winner && (
            <div className="relative z-10 flex flex-wrap mb-4 px-8 py-4 md:px-6 md:py-3 sm:px-4 sm:py-2 xs:px-3 xs:py-1 xxs:px-2 xxs:py-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm xs:text-xs xxs:text-[10px] font-bold rounded-lg shadow-lg">
              {currentPlayerMessage} - Time left: {timer}s
              <button
                onClick={togglePause}
                className="ml-4 px-6 py-2 xl:px-5 xl:py-2 lg:px-4 lg:py-2 md:px-3 md:py-1 sm:px-2 sm:py-1 xs:px-2 xs:py-1 xxs:px-1 xxs:py-1 bg-white text-purple-500 font-bold rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 text-lg xl:text-base lg:text-sm md:text-xs sm:text-xs xs:text-[10px] xxs:text-[9px]"
              >
                {isPaused ? 'Resume Timer' : 'Pause Timer'}
              </button>
            </div>
          )}
          <div className="relative z-10 flex flex-wrap grid grid-cols-3 gap-4 mb-4">
            {squares.map((square, index) => (
              <Square
                key={index}
                value={square}
                onClick={() => handleClick(index)}
                theme={theme}
                index={index}
                winnerSquares={winnerSquares}
                isReset={isReset}
              />
            ))}
          </div>
          {winner && (
            <div className="z-10 flex flex-wrap fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h2 className="text-2xl font-semibold mb-4">
                  {winner === 'tie' ? "It's a tie!" : `🎉 ${winner === player1Sign ? player1Name : player2Name} wins! 🎉`}
                </h2>
                {hasWon && (
                  <Confetti
                    recycle={false}
                    numberOfPieces={200}
                    gravity={0.2}
                    colors={['#FF69B4', '#33CC33', '#6666CC']}
                    style={{width:'98vw'}}
                  />
                )}
                <button
                  onClick={restartGame}
                  className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-lg font-bold rounded-lg shadow-lg hover:from-purple-500 hover:to-pink-500 transition duration-300"
                >
                  Play More
                </button>
                <button
                  onClick={scratchGame}
                  className="px-6 py-3 ml-4 mt-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-lg font-bold rounded-lg shadow-lg hover:from-purple-500 hover:to-pink-500 transition duration-300"
                >
                  Start from scratch
                </button>
              </div>
            </div>
          )}
          <div className="relative z-10 flex flex-wrap flex flex-col xs:flex-row justify-center items-center mt-4">
            <button
              onClick={restartGame}
              className="mb-4 xs:mb-0 px-4 xs:px-6 py-2 xs:py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-base sm:text-lg md:text-xl font-bold rounded-lg shadow-lg hover:from-purple-500 hover:to-pink-500 transition duration-300 xs:mr-4 w-full xs:w-auto"
            >
              Restart Game
            </button>
            <button
              onClick={scratchGame}
              className="px-4 xs:px-6 py-2 xs:py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-base sm:text-lg md:text-xl font-bold rounded-lg shadow-lg hover:from-purple-500 hover:to-pink-500 transition duration-300 w-full xs:w-auto"
            >
              Start from Scratch
            </button>
          </div>
        </>
      )}

      {/* Modal for Sign Selection */}
      {showModal && (
        <div className="z-10 flex flex-wrap fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-lg font-medium mb-4">{signMessage}</p>
            {signMessage.includes('Please enter names') && (
              <button
                onClick={() => setShowModal(false)}
                className="px-10 py-4 text-xl 2xl:px-12 2xl:py-5 2xl:text-2xl xl:px-10 xl:py-4 xl:text-xl lg:px-8 lg:py-3 lg:text-lg md:px-6 md:py-3 md:text-lg sm:px-5 sm:py-3 sm:text-base xs:px-4 xs:py-2 xs:text-sm xss:px-2 xss:py-1 xss:text-xs bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-lg shadow-lg hover:from-purple-500 hover:to-pink-500 transition duration-300"
              >
                Close
              </button>
            )}
            {signMessage.includes('Player') && (
              <button
                onClick={handleStartGame}
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-lg font-bold rounded-lg shadow-lg hover:from-purple-500 hover:to-pink-500 transition duration-300"
              >
                Start Game
              </button>
            )}
            {signMessage.includes('Please resume the timer') && (
              <button
                onClick={() => {
                  togglePause();
                  setShowModal(false);
                }}
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-lg font-bold rounded-lg shadow-lg hover:from-purple-500 hover:to-pink-500 transition duration-300"
              >
                Resume Timer
              </button>
            )}
          </div>
        </div>

      )}
      {/* Footer */}
      <p className="relative z-10 text-md mt-4" style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }}>
        Made by &copy; Shreya Kundu2024 with &#x2764;
      </p>
    </div>
  );
}

export default Board;
