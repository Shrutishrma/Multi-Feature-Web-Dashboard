import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [form, setForm] = useState({ title: '', director: '', genre: '', release_year: '', rating: '' });

  // Fetch Movies (GET)
  const fetchMovies = async () => {
    try {
      const res = await axios.get('http://localhost:5000/movies'); 
      setMovies(res.data);
    } catch (err) {
      console.error("Backend connection failed", err);
    }
  };

  useEffect(() => { fetchMovies(); }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Add Movie (POST)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/movies', form);
      fetchMovies(); 
      setForm({ title: '', director: '', genre: '', release_year: '', rating: '' }); 
    } catch (err) {
      alert("Error adding movie. Ensure backend is running!");
    }
  };

  // Delete Movie (DELETE)
  const handleDelete = async (id) => {
    if(!confirm("Are you sure you want to delete this movie?")) return;
    try {
      await axios.delete(`http://localhost:5000/movies/${id}`);
      fetchMovies();
    } catch (err) {
      alert("Error deleting movie");
    }
  };

  return (
    <div className="p-8 bg-slate-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700">🎬 Movie Catalog Manager</h1>

        {/* Input Form */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-10 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Add a New Movie</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <input name="title" value={form.title} onChange={handleChange} placeholder="Movie Title" className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-indigo-500 outline-none" required />
            <input name="director" value={form.director} onChange={handleChange} placeholder="Director" className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-indigo-500 outline-none" required />
            <input name="genre" value={form.genre} onChange={handleChange} placeholder="Genre" className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-indigo-500 outline-none" />
            <input name="release_year" type="number" value={form.release_year} onChange={handleChange} placeholder="Year" className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-indigo-500 outline-none" />
            <input name="rating" type="number" step="0.1" max="10" value={form.rating} onChange={handleChange} placeholder="Rating (0-10)" className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-indigo-500 outline-none" />
            
            <button type="submit" className="bg-indigo-600 text-white font-bold py-2 rounded hover:bg-indigo-700 transition-colors lg:col-span-1 md:col-span-2">
              + Add Movie
            </button>
          </form>
        </div>

        {/* Movie List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <div key={movie.id} className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition-shadow border-l-4 border-indigo-500 relative group">
              <button 
                onClick={() => handleDelete(movie.id)} 
                className="absolute top-3 right-3 text-red-400 hover:text-red-600 font-bold opacity-0 group-hover:opacity-100 transition-opacity"
              >
                DELETE
              </button>
              <h3 className="text-xl font-bold text-gray-800 pr-8">{movie.title}</h3>
              <p className="text-gray-500 text-sm mb-3">Dir. {movie.director}</p>
              
              <div className="space-y-1 text-sm text-gray-700 mt-4 border-t pt-2 border-gray-100">
                <p><span className="font-semibold">Genre:</span> {movie.genre}</p>
                <div className="flex justify-between items-center">
                  <p><span className="font-semibold">Year:</span> {movie.release_year}</p>
                  <span className={`px-2 py-0.5 rounded text-xs font-bold ${movie.rating >= 7 ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                    ★ {movie.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;