import React from 'react';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import notes from '../assets/notes.png'
import movie from '../assets/movie.jpg'
import dashboard from '../assets/dashboard.jpg'


const Work = () => {

  const githb = () => {
    window.open('https://github.com/Shahharshii')
  }

  return <section className='section' id='work'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row  gap-x-10'>
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          <div>
            <h2 className='h2 leading-tight text-accent'>My Projects.</h2>
            <p className='max-w-sm mb-8 mt-8 text-justify'>Well-versed in creating Front-end design with
              additional to some part of back-end. Diplomatic and
              tactful with professionals and non-professionals at
              various levels.</p>
            <button className='btn btn-sm' onClick={githb}>View all Projects</button>
          </div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl mt-2'>
            {/* overlay */}
            <a href="https://guess-game-gray.vercel.app/" target="_blank">
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={notes} alt="" />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient '>HTML and CSS</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                <span className=' text-3xl text-white'>Guess the Word</span>
              </div>
            </a>
          </div>

        </motion.div>
        <motion.div
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 flex flex-col gap-y-10 '>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <a href="https://power-bi-dashboards-eight.vercel.app/" target='_blank'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={dashboard} alt="" />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient '>Power BI Dashboards</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                <span className=' text-3xl text-white'>Data Visualization</span>
              </div>
            </a>
          </div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <a href="https://moviesadda-harshi-shah.vercel.app/" target='_blank'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={movie} alt="" />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient '>FrontEnd Using APIs</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                <span className=' text-3xl text-white'>Movie Finder</span>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Work;

