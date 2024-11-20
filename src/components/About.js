import React from 'react';
import CountUp from 'react-countup';
import about1 from '../assets/about1.png'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { Link } from 'react-scroll';


const About = () => {
  const [ref, inview] = useInView({
    threshold: 0.5,
  });

  return <section id='about' className='section' ref={ref}>
    <div className="container mx-auto">
      <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 min-h-screen">
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='hidden lg:block flex-1 bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
          <img src={about1} alt="" className='h-[640px] mix-blend-lighten' />
        </motion.div>
        <motion.div variants={fadeIn('left', 0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1'>
          <h2 className='h2 text-accent'>About me.</h2>
          <h3 className='h3 mb-4'>I'm a Frontend Developer currently in my final year of IT Engineering.</h3>
          <p className='mb-6 font-medium text-justify pb-4'> As an enthusiastic student, I excel in both team-based and independent work environments, bringing a strong work ethic and excellent organizational skills to any setting.
            With a passion for crafting intuitive web experiences, I combine strong analytical and problem-solving abilities with high attention to detail. I’m eager to apply my skills in web development and design to create impactful and user-focused solutions.</p>
          <div className=" flex gap-x-6 lg:gap-x-10 mb-12 pt-4">
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inview ? <CountUp start={0} end={2} duration={5} /> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'> Years of <br /> Experience</div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inview ? <p><CountUp start={0} end={5} duration={5} />+</p> : null}

              </div>
              <div className='font-primary text-sm tracking-[2px]'> Projects <br /> Completed</div>
            </div>
            {/* <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inview ? <CountUp start={0} end={2} duration={8} /> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'> Years of <br /> Experience</div>
            </div> */}
          </div>
          <div className='flex max-w-max gap-x-6 items-center mb-12'>
            <Link to='contact' smooth={true} spy={true} className='btn btn-lg flex items-center'> Contact Me </Link>
            <a href="" className='text-gradient btn-link'> My Portfolio</a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default About;
