import './App.css';

import { Link, Route, Routes } from 'react-router-dom';

import Home from './layout/Home';
import Projects from './layout/Projects';
// import logo from './logo.svg';
import logo from './img/logo.png';

function App() {
  return (
    <div className=''>
      <header className='flex justify-between px-10 py-5 bg-gray-800 text-white'>
        <div>
          <Link to='/'>
            <img src={logo} alt='logo of a p tag'></img>
          </Link>
        </div>
        <div>
          <nav>
            <ul className='flex'>
              <li>
                <Link className='text-purple-400 hover:text-purple-400' to='/'>
                  Home
                </Link>
              </li>
              <li>
                <Link className='ml-2 hover:text-purple-400' to='/projects'>
                  Projects
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className='px-2 sm:px-10 bg-gray-900 text-white pt-10 m-auto '>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='projects' element={<Projects />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
