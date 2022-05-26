import React from 'react';

function Projcard({ titleprop, imgprop, textprop, linkprop }) {
  const altText = `an image of my: ${titleprop}`;
  return (
    <div className='bg-gray-800 mb-8 w-full max-w-5xl shadow-lg shadow-black'>
      <div>
        <div className='w-full flex justify-center'>
          <img className='w-full' src={imgprop} alt={altText}></img>
        </div>
      </div>
      <div className='p-3'>
        <h3 className='mb-2'>{titleprop}</h3>
        <p className='mb-2'>{textprop}</p>
        <p>{linkprop}</p>
      </div>
    </div>
  );
}

export default Projcard;
