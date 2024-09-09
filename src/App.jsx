import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Choice from './Choice';
import Board from './Board';
import Board1 from './Board1';
import Loader from './Loader';

function App() {
  return (
    <Router>
      <div className="h-screen w-screen relative bg-gray-800 flex items-center justify-center">
        <Routes>
          {/* Default route to Loader component */}
          <Route path="/" element={<Loader />} />
          {/* Route for Choice component */}
          <Route path="/choice" element={<Choice />} />
          {/* Route for 2-Player Game */}
          <Route path="/2-player" element={<Board />} />
          {/* Route for 1-Player Game */}
          <Route path="/1-player" element={<Board1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;