import { Icon } from '@iconify/react';
import React from 'react';

function Projcard({ titleprop, imgprop, textprop, linkprop, link2prop }) {
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
        <div className='flex'>
          {linkprop ? (
            <a className='mr-3' href={linkprop}>
              <Icon
                icon='akar-icons:github-fill'
                className='text-4xl text-purple-400'
              />
            </a>
          ) : (
            ''
          )}
          {link2prop ? (
            <a href={link2prop}>
              <Icon
                icon='iconoir:internet'
                className='text-4xl text-purple-400'
              />
            </a>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}

export default Projcard;
