import React from 'react';
import Logos from './Logos';

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href='#'>
          <Logos />
        </a>
        <button className='btn btn-sm'>
          Work with ME
        </button>
      </div>
    </div>
  </header>;
};

export default Header;
