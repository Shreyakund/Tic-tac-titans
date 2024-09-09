// import React from 'react';
// import { Link } from 'react-router-dom';  // Import Link
// import TwoPlayerImage from './2-player.jpg';
// import OnePlayerImage from './1-player.jpg';
// import Particle from './Particle';  // Import Particle component
// import Loader from './Loader';

// const Choice = ({ theme }) => {
//   return (
//     <div className="relative flex flex-col justify-center items-center h-screen w-full p-4">
//       {/* Particle background */}
//       <div className="absolute top-0 left-0 w-full h-full z-0">
//         <Particle />
//       </div>

//       {/* Game mode choice */}
//       <div className="relative z-10 flex flex-wrap justify-center gap-8">
//         <>
//           {/* 2-player game div */}
//           <div className="relative w-[250px] xs:w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px] 2xl:w-[550px] h-[250px] xs:h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[550px] shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
//             <div className="relative w-full h-2/3">
//               <img
//                 src={TwoPlayerImage}
//                 alt="2-Player"
//                 className="w-full h-full object-cover transition-opacity duration-300"
//               />
//               <div className="absolute inset-0 flex justify-center items-center bg-slate-700/80 opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 {/* Link to 2-Player Game route */}
//                 <Link to="/2-player" className="font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-green-600">
//                   2-Player Game
//                 </Link>
//               </div>
//             </div>
//             <div className={`absolute bottom-0 left-0 w-full h-1/3 flex justify-center items-center ${theme === 'dark' ? 'bg-white' : 'bg-gray-300'} rounded-b-lg`}>
//               <span className="text-3xl xs:text-4xl sm:text-5xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent" style={{ fontFamily: '"adventure"' }}>
//                 2-Player Game
//               </span>
//             </div>
//           </div>

//           {/* 1-player game div */}
//           <div className="relative w-[250px] xs:w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px] 2xl:w-[550px] h-[250px] xs:h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[550px] shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
//             <div className="relative w-full h-2/3">
//               <img
//                 src={OnePlayerImage}
//                 alt="1-Player"
//                 className="w-full h-full object-cover transition-opacity duration-300"
//               />
//               <div className="absolute inset-0 flex justify-center items-center bg-slate-700/80 opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 {/* Link to 1-Player Game route */}
//                 <Link to="/1-player" className="font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-green-600">
//                   1-Player Game
//                 </Link>
//               </div>
//             </div>
//             <div className={`absolute bottom-0 left-0 w-full h-1/3 flex justify-center items-center ${theme === 'dark' ? 'bg-white' : 'bg-gray-300'} rounded-b-lg`}>
//               <span className="text-3xl xs:text-4xl sm:text-5xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent" style={{ fontFamily: '"adventure"' }}>
//                 1-Player Game
//               </span>
//             </div>
//           </div>
//         </>
//       </div>

//       {/* Footer */}
//       <p className="relative z-10 text-md mt-4" style={{ color: theme === 'light' ? '#000000' : '#ffffff' }}>
//         Made by &copy; Shreya Kundu2024 with &#x2764;
//       </p>
//     </div>
//   );
// };

// export default Choice;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'; // Import icons
import TwoPlayerImage from './2-player.jpg';
import OnePlayerImage from './1-player.jpg';
import Particle from './Particle';  // Import Particle component
import Loader from './Loader';

const Choice = () => {
  const [theme, setTheme] = useState('dark');

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="relative flex flex-col justify-center items-center h-screen w-full p-4" style={{ backgroundColor: theme === 'dark' ? '#000000' : '#ffffff' }}>
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

      {/* Game mode choice */}
      <div className="relative z-10 flex flex-wrap justify-center gap-8">
        <>
          {/* 2-player game div */}
          <div className="relative w-[250px] xs:w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px] 2xl:w-[550px] h-[250px] xs:h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[550px] shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <div className="relative w-full h-2/3">
              <img
                src={TwoPlayerImage}
                alt="2-Player"
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex justify-center items-center bg-slate-700/80 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Link to 2-Player Game route */}
                <Link to="/2-player" className="font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-green-600">
                  2-Player Game
                </Link>
              </div>
            </div>
            <div className={`absolute bottom-0 left-0 w-full h-1/3 flex justify-center items-center ${theme === 'dark' ? 'bg-white' : 'bg-gray-300'} rounded-b-lg`}>
              <span className="text-3xl xs:text-4xl sm:text-5xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent" style={{ fontFamily: '"adventure"' }}>
                2-Player Game
              </span>
            </div>
          </div>

          {/* 1-player game div */}
          <div className="relative w-[250px] xs:w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px] 2xl:w-[550px] h-[250px] xs:h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[550px] shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <div className="relative w-full h-2/3">
              <img
                src={OnePlayerImage}
                alt="1-Player"
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex justify-center items-center bg-slate-700/80 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Link to 1-Player Game route */}
                <Link to="/1-player" className="font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-green-600">
                  1-Player Game
                </Link>
              </div>
            </div>
            <div className={`absolute bottom-0 left-0 w-full h-1/3 flex justify-center items-center ${theme === 'dark' ? 'bg-white' : 'bg-gray-300'} rounded-b-lg`}>
              <span className="text-3xl xs:text-4xl sm:text-5xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent" style={{ fontFamily: '"adventure"' }}>
                1-Player Game
              </span>
            </div>
          </div>
        </>
      </div>

      {/* Footer */}
      <p className="relative z-10 text-md mt-4" style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }}>
        Made by &copy; Shreya Kundu2024 with &#x2764;
      </p>
    </div>
  );
};

export default Choice;

