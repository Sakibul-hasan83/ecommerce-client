import React from 'react';

const Categories = ({  selectedCategory,
  handleAll,
  handleElectronics,
  handleFruits,
  handleVegetables,
  handleGroceries,
  handleClothing,
  handleBooks,
  handleToy}) => {



  return (
<div className="flex flex-wrap justify-center gap-3 p-4 bg-gray-100 rounded-2xl shadow-md">
  <button onClick={handleAll} className="px-5 py-2 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition duration-300">
    All
  </button>
  <button onClick={handleElectronics} className="px-5 py-2 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition duration-300">
    Electronics
  </button>
  <button onClick={handleFruits} className="px-5 py-2 bg-yellow-500 text-white font-semibold rounded-full hover:bg-yellow-600 transition duration-300">
    Fruits
  </button>
  <button onClick={handleVegetables} className="px-5 py-2 bg-lime-500 text-white font-semibold rounded-full hover:bg-lime-600 transition duration-300">
    Vegetables
  </button>
  <button onClick={handleGroceries} className="px-5 py-2 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition duration-300">
    Groceries
  </button>
  <button onClick={handleClothing} className="px-5 py-2 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition duration-300">
    Clothing
  </button>
  <button onClick={handleBooks} className="px-5 py-2 bg-purple-500 text-white font-semibold rounded-full hover:bg-purple-600 transition duration-300">
    Books
  </button>
  <button onClick={handleToy} className="px-5 py-2 bg-indigo-500 text-white font-semibold rounded-full hover:bg-indigo-600 transition duration-300">
    Toy
  </button>
</div>

  );
}

export default Categories;
