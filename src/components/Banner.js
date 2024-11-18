import React from 'react';
import Image from '../assets/banner.png'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { Link } from 'react-scroll';
import resume from '../assets/resume.pdf'

const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center m-5' id='home'>
    <div className='contianer mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='text-[55px] font-bold leading-[0:8] lg:text-[110px] pb-3'>Harshi <span>Shah</span></motion.h1>
          <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-6 lg:mt-6 text-[36px] lg:text-[42px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>I am a </span>
            <TypeAnimation sequence={[
              'Frontend Developer',
              2000,
              'Data Analyst',
              2000,
              'Software Tester',
              2000
            ]
            } speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
            />
          </motion.div>
          {/* <motion.p variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}}  className='mb-8 max-w-max mx-auto lg:mx-0'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit tempore architecto cum expedita, deserunt voluptatem.</motion.p> */}
          <motion.div variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <a href={resume} download className='btn btn-lg flex items-center'> Download My Resume </a>
          </motion.div>
          <motion.div variants={fadeIn('up', 0.7)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href="https://github.com/Shahharshii" target='_blank'>
              <FaGithub className='text-2xl' />
            </a>
            <a href="https://www.linkedin.com/in/harshii-shah/" target='_blank'>
              <FaLinkedin className='text-2xl' />
            </a>
            <a href="https://www.instagram.com/harshii_shah/" target='_blank'>
              <FaInstagram className='text-2xl' />
            </a>
          </motion.div>
        </div>
        <motion.div variants={fadeIn('down', 0.5)} initial="hidden" whileInView={'show'} className='flex flex-1 max-w-[320px] lg:max-w-[482px]'>
          <img src={Image} alt='' className='w-full h-auto' />
        </motion.div>

      </div>
    </div>
  </section>;

};

export default Banner;
