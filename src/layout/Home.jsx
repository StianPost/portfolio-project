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
              So far the only languages that I know is Html, CSS3 and JS, though
              I am looking forwards to learning new and more advanced tricks in
              the future. I am by no means a master but I am eager to learn.
            </p>
            <p className='pt-5 text-xl'>
              At this point in time I am done with my first year on Noroff, some
              of the school related projects that I have done is on my projects
              page. There's also some other small projects that I did for fun.
            </p>
          </div>
        </div>
        <div>
          <img src={avatar} alt='Avatar of yours truly, Stian Post' />
        </div>
      </div>
    </>
  );
}

export default Home;
