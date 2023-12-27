import React from 'react';
import Logos from './Logos';
import { Link } from 'react-router-dom';

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href='#'>
          <Logos />
        </a>
        <Link to='contact' smooth={true} spy={true} className='btn btn-sm'>
          Work with ME
        </Link>
      </div>
    </div>
  </header>;
};

export default Header;
