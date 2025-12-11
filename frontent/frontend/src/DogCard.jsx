import React from 'react';

// This component receives the 'breed' prop and destructures it
// Fulfills Requirement: "Demonstrates passing props to child components and destructuring them"
const DogCard = ({ breed }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
      <h2 className="text-2xl font-bold mb-3 text-blue-700">{breed.attributes.name}</h2>
      <p className="text-gray-600 mb-4 text-sm leading-relaxed h-20 overflow-y-auto">
        {breed.attributes.description}
      </p>
      
      <div className="border-t pt-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="font-semibold text-gray-700">Life Span:</span>
          <span>{breed.attributes.life.min} - {breed.attributes.life.max} years</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="font-semibold text-gray-700">Weight:</span>
          <span>{breed.attributes.male_weight.min} - {breed.attributes.male_weight.max} kg</span>
        </div>
        <div className="mt-4">
          <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
            breed.attributes.hypoallergenic 
              ? 'bg-green-100 text-green-800 border border-green-200' 
              : 'bg-red-100 text-red-800 border border-red-200'
          }`}>
            {breed.attributes.hypoallergenic ? 'Hypoallergenic' : 'Not Hypoallergenic'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DogCard;