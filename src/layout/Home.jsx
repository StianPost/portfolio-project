import { FaCss3Alt, FaHtml5, FaJsSquare, FaReact } from 'react-icons/fa';

import { Icon } from '@iconify/react';
import avatar from '../img/avataaars.png';

function Home() {
  return (
    <>
      <h1>Hello!</h1>
      <h2>Me, a front-end dev</h2>
      <div className='md:flex justify-between mb-3'>
        <div>
          <div>
            <div className='flex mt-4'>
              <FaHtml5 className='text-7xl text-purple-400 mr-4' />
              <FaCss3Alt className='text-7xl text-purple-400 mr-4' />
              <FaJsSquare className='text-7xl text-purple-400 mr-4' />
            </div>
            <div className='flex mt-4'>
              <Icon
                icon='cib:sass-alt'
                className='text-7xl text-purple-400 mr-4'
              />
              <Icon
                icon='file-icons:tailwind'
                className='text-7xl text-purple-400 mr-4'
              />
              <Icon
                icon='file-icons:tsx-alt'
                className='text-7xl text-purple-400 mr-4'
              />
              <FaReact className='text-7xl text-purple-400 mr-4' />
              <Icon
                icon='file-icons:nextjs'
                className='text-7xl text-purple-400 mr-4'
              />
            </div>
          </div>
          <div className='max-w-xl'>
            <p className='pt-5 text-xl'>
              Hello my name is Stian, I am a front-end development student at
              noroff. I am more of a technical front-end dev, meaning I enjoy
              coding more than actually designing. But when it does come to
              design I prefer a more minimalistic and clean design.
            </p>
            <p className='pt-5 text-xl'>
              So far I've learned allot, from regular HTML5 and CSS3 to
              frameworks like React, NextJS and SCSS(for styling), I am still
              learning and will continue to do so. There's lots of tricks to
              learn after all.
            </p>
            <p className='pt-5 text-xl'>
              At this point I am finishing up with my time at Noroff, though
              I've enjoyed my time with front-end I am leaning more towards
              learning more back-end subjects. So I'll be trying to develop
              myself as a fullstack developer as I am looking for a wonderful
              place to work.
            </p>
            <p className='pt-5 text-xl'>
              Please have a look at my projects, they're most school projects,
              but more fun and interesting things will pop up soon.
            </p>
          </div>
        </div>
        <div>
          <img src={avatar} alt='Avatar of yours truly, Stian Post' />
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <h3 className='mb-3'>Contact</h3>
        <div className='bg-gray-800 w-full max-w-xl p-4 shadow-lg shadow-black mb-10'>
          <h4 className='text-center pb-3'>
            Here is more place with me in it!
          </h4>
          <div className='flex justify-center'>
            <Icon
              icon='akar-icons:github-fill'
              className='text-7xl text-purple-400 mr-4'
            />
            <Icon
              icon='akar-icons:linkedin-box-fill'
              className='text-7xl text-purple-400 mr-4'
            />
          </div>
          <div className='flex justify-center items-center'>
            <Icon
              icon='fontisto:email'
              className='text-7xl text-purple-400 mr-4'
            />
            <p className='items-center'>stianpost@hotmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
