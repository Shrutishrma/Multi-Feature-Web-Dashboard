import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DogCard from './DogCard';

const DogBreeds = () => {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Question 1: Fetch data from https://dogapi.dog/api/v2/breeds
    axios.get('https://dogapi.dog/api/v2/breeds')
      .then(response => {
        setBreeds(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching dogs:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div className="flex justify-center items-center h-screen text-xl font-bold text-gray-600">
      Loading Dog Data...
    </div>
  );

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800 drop-shadow-sm">
          🐶 Dog Breed Explorer
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {breeds.map((breed) => (
            // Passing props to child component
            <DogCard key={breed.id} breed={breed} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DogBreeds;