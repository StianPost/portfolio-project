import React from 'react';

function Projcard({ titleprop, imgprop, textprop, linkprop }) {
  return (
    <div className="bg-gray-800 mb-4 w-full max-w-5xl">
      <div>
        <div className='w-full flex justify-center'>
          <img className='w-full' src={imgprop} alt={titleprop}></img>
        </div>
      </div>
      <div className='p-2'>
        <h3 className='mb-2'>{titleprop}</h3>
        <p className='mb-2'>{textprop}</p>
        <p>{linkprop}</p>
      </div>
    </div>
  );
}

export default Projcard;
