import React, { useState } from 'react';

const LiveText = () => {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className='bg-gray-800 p-8 rounded-lg shadow-lg text-center  w-full max-w-md'>
      <input
        type='text'
        placeholder='Type something...'
        value={text} 
        onChange={handleTextChange}
        className='
          w-full
          p-3
          rounded-lg
          bg-gray-700
          text-white
          border-2
          border-gray-600
          focus:border-cyan-400
          focus:outline-none
          transition-colors
          duration-300
          text-lg
        '
      />

      <div className='mt-6 p-4 bg-gray-900 rounded-lg min-h-[6rem] flex items-center justify-center'>
        {text ? (
          <p className='text-2xl text-cyan-300 italic break-words'>{text}</p>
        ) : (
          <p className='text-gray-500 text-lg'>Your text will appear here</p>
        )}
      </div>
    </div>
  );
};

export default LiveText;