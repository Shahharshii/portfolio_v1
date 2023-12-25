import React from 'react'
import k from '../assets/logo/k.png'
import a from '../assets/logo/a.png'
import r from '../assets/logo/r.png'
import n from '../assets/logo/n.png'
import g from '../assets/logo/g.png'
import ga from '../assets/logo/ga.png'
import gn from '../assets/logo/gn.png'
import d from '../assets/logo/d.png'
import h from '../assets/logo/h.png'
import i from '../assets/logo/i.png'


const Logos = () => {
  return (
    <div>   <div className='flex'>
    <img width="30" height="30" src={k} alt="kappa" />
    <img width="30" height="30" src={a} alt="alpha" />
    <img width="30" height="30" src={r} alt="gamma"/>
    <img width="30" height="30" src={a} alt="alpha" />
    <img width="30" height="30" src={n} alt="eta"/>
  </div>
  <div className='flex'>
  <img width="25" height="25" src={g} alt="g"/>
  <img width="25" height="25" src={ga} alt="a"/>
  <img width="25" height="25" src={gn} alt="n"/>
  <img width="25" height="25" src={d} alt="d"/>
  <img width="25" height="25" src={h} alt="h"/>
  <img width="25" height="25" src={i} alt="i"/>
  </div></div>
  )
}

export default Logos