import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DogBreeds from './DogBreeds';
import Movies from './Movies';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
        {/* Navigation Bar */}
        <nav className="bg-gray-800 text-white shadow-lg sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center p-4">
            <span className="text-xl font-bold tracking-wider text-yellow-500">
              Exam Set 2
            </span>
            <div className="space-x-6">
              <Link to="/" className="hover:text-yellow-400 transition font-medium">
                Q1: Dog Breeds
              </Link>
              <Link to="/movies" className="hover:text-yellow-400 transition font-medium">
                Q2: Movie Manager
              </Link>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <div className="container mx-auto py-6 px-4">
          <Routes>
            <Route path="/" element={<DogBreeds />} />
            <Route path="/movies" element={<Movies />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;