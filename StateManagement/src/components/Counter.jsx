import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const decrementBy5 = () => {
    setCount(count - 5);
  };

  const incrementBy5=()=>{
    setCount(count+5)
  }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white'>
      <div className='bg-gray-800 p-8 rounded-lg shadow-lg text-center'>
        <h1 className='text-8xl font-bold mb-6 text-cyan-400'>{count}</h1>

        <div className='flex gap-4'>
          <button
            onClick={increment}
            className='bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 active:scale-95'
          >
            Increment by 1
          </button>

          <button
            onClick={decrement}
            className='bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 active:scale-95'
          >
            Decrement by 1
          </button>

          <button
            onClick={decrementBy5} 
            className='bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 active:scale-95'
          >
            Decrement by 5
          </button>

          <button
            onClick={incrementBy5} 
            className='bg-blue-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 active:scale-95'
          >
            Increment by 5
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;