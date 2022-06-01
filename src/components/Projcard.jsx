import { Icon } from '@iconify/react';
import React from 'react';

function Projcard({
  title,
  img,
  text,
  link,
  link2,
  figma,
  html,
  css,
  scss,
  javascript,
  typescript,
  react,
  next,
  tailwind,
}) {
  const altText = `an image of my: ${title}`;
  return (
    <div className='bg-gray-800 mb-8 w-full max-w-5xl shadow-lg shadow-black'>
      <div>
        <div className='w-full h-full flex justify-center'>
          {img ? (
            <img className='w-full' src={img} alt={altText}></img>
          ) : (
            <img src='/Loading_transp.gif' className='' alt='loading gif' />
          )}
        </div>
      </div>
      <div className='p-3'>
        <h3 className='mb-2'>{title}</h3>
        <p className='mb-2'>{text}</p>
        <div className='flex justify-between'>
          <div className='flex text-4xl text-purple-400'>
            {link ? (
              <a className='mr-3 mt-2' href={link}>
                <Icon
                  icon='akar-icons:github-fill'
                  className='text-4xl text-purple-400'
                />
              </a>
            ) : (
              ''
            )}
            {link2 ? (
              <a href={link2}>
                <Icon icon='iconoir:internet' className='mr-3 mt-2' />
              </a>
            ) : (
              ''
            )}
          </div>
          <div className='flex justify-end flex-wrap text-4xl text-purple-400'>
            {figma ? (
              <Icon className='ml-3 mt-2' icon='akar-icons:figma-fill' />
            ) : (
              ''
            )}
            {html ? (
              <Icon className='ml-3 mt-2' icon='akar-icons:html-fill' />
            ) : (
              ''
            )}
            {react ? (
              <Icon className='ml-3 mt-2' icon='akar-icons:react-fill' />
            ) : (
              ''
            )}
            {next ? <Icon className='ml-3 mt-2' icon='cib:next-js' /> : ''}
            {css ? (
              <Icon className='ml-3 mt-2' icon='akar-icons:css-fill' />
            ) : (
              ''
            )}
            {scss ? (
              <Icon className='ml-3 mt-2' icon='akar-icons:sass-fill' />
            ) : (
              ''
            )}
            {javascript ? (
              <Icon className='ml-3 mt-2' icon='akar-icons:javascript-fill' />
            ) : (
              ''
            )}
            {typescript ? (
              <Icon className='ml-3 mt-2' icon='cib:typescript' />
            ) : (
              ''
            )}
            {tailwind ? (
              <Icon className='ml-3 mt-2' icon='bxl:tailwind-css' />
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projcard;
