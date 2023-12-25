import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import services from '../assets/services.png'
import meter1 from "../assets/react.svg";
import meter2 from "../assets/node.svg";
import meter3 from "../assets/mongo.svg";
import meter4 from "../assets/html.svg";
import meter5 from "../assets/css.svg";
import meter6 from "../assets/javascript.svg";
import meter7 from "../assets/photoshop.png";
import meter8 from "../assets/illustrator.png";
import { Link } from 'react-scroll';

const skills = [
    {
        id : 1,
        name: 'HTML',
        imgs: meter4,
    },
    {
        id : 2,
        name: 'CSS ' + '(Bootstrap, Tailwind CSS, Material UI)',
        imgs: meter5,
    },
    {
        id : 3,
        name: 'JavaScript',
        imgs: meter6,
    },
    {
        id : 4,
        name: 'React JS',
        imgs: meter1,
    },
    {
        id : 5,
        name: 'Node JS',
        imgs: meter2,
    },
    {
        id : 6, 
        name: 'MongoDB',
        imgs: meter3,
    },
    {
        id : 7,
        name: 'Adobe Photoshop',
        imgs: meter7,
    },
    {
        id : 8,
        name: 'Adobe Illustrator',
        imgs: meter8,
    },
]

const Skills = () => {
    return (
        <section className='section' id='Skills'>
            <div className="container mx-auto">
                <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='flex-1 lg:bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 '>
                        <h2 className='h2 text-accent mb-6 '>WEB DEVELOPER</h2>
                        <h3 className='h3 max-w-[455px] mb-16'>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</h3>
                        <Link to='work' smooth={true} spy={true} className='btn btn-sm flex items-center max-w-fit  px-10'> See My Work </Link>
                        <img src={services} alt="" className=' mt-6 mix-blend-lighten hidden lg:block w-96 h-78' />
                    </motion.div>
                    <motion.div
                        variants={fadeIn('left', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='w-full lg:w-1/2'>
                        <h2 className='h3 text-accent uppercase'>Skills</h2>
                        <div className="container slider-contain overflow-hidden relative h-[250px] lg:h-[500px]" >
                            <div className="slider">
                                {skills.map((skills, index) =>{
                                    return(
                                        <div className="item flex items-center hover:text-accent">
                                            <h5>{skills.name}</h5>
                                            <img src={skills.imgs} alt="" className='w-20 h-20' />
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="slider">
                                {skills.map((skills, id) =>{
                                    return(
                                        <div className="item flex items-center hover:text-accent">
                                            <h5>{skills.name}</h5>
                                            <img src={skills.imgs} alt="" className='w-20 h-20' />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Skills