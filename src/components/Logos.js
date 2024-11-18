import React from 'react'
import h from '../assets/logo/h.png'
import a from '../assets/logo/a.png'
import r from '../assets/logo/r.png'
import s from '../assets/logo/s.png'
import i from '../assets/logo/i.png'
import ss from '../assets/logo/ss.png'
import sh from '../assets/logo/sh.png'
import sa from '../assets/logo/sa.png'
import ss1 from '../assets/logo/icons8-s-100.png'
import sh1 from '../assets/logo/icons8-h-100.png'
import sa1 from '../assets/logo/icons8-a-100.png'






const Logos = () => {
  return (
    <div className='flex flex-col items-center gap-1'>   <div className='flex'>
      <img width="25" height="30" src={h} alt="h" />
      <img width="25" height="30" src={a} alt="a" />
      <img width="25" height="30" src={r} alt="r" />
      <img width="25" height="30" src={s} alt="s" />
      <img width="25" height="30" src={h} alt="h" />
      <img width="25" height="30" src={i} alt='i' />
    </div>
      <div className='flex'>
        <img width="20" height="25" src={ss1} alt="ss" />
        <img width="20" height="25" src={sh1} alt="sh" />
        <img width="20" height="25" src={sa1} alt="sa" />
        <img width="20" height="25" src={sh1} alt="sh" />

      </div>
    </div>
  )
}

export default Logos