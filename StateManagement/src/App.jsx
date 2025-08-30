import React from 'react';
import Counter from './components/Counter';
import LiveText from './components/LiveText';

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white gap-10 p-4'>
      <Counter />
      <LiveText />
    </div>
  );
};

export default App;