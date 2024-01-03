import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import axios from 'axios';
import { toast } from 'react-toastify';
const host = process.env.REACT_APP_API_HOST;

const Contact = () => {
  const formInitialDetails = {
    name: "",
    email: "",
    message: "",
  };
  const [client, setClient] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send Message")

  const handleChange = (name, value) => {
    setClient({
      ...client,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Handling form submission...', client);
    setButtonText("Sending...")
    if (!client.name || !client.email || !client.message) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post(`${host}api/v1/client/clientreg`, {
        name: client.name,
        email: client.email,
        message: client.message,
      });
      setButtonText("Send Message")
      if (response.status === 200) {
        toast.success(response.data.message);
        window.location.reload();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || 'An error occurred while submitting the form');
    }
  };


  return (
    <section className='lg:section py-16' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row '>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide '> Get in Touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's Work <br /> Together!</h2>
            </div>
          </motion.div>
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start '>
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder-white focus:border-accent transition-all'
              minLength={3}
              placeholder='Your Name'
              type='text'
              id='name'
              value={client.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder-white focus:border-accent transition-all'
              placeholder='Your Email'
              type='email'
              id='email'
              value={client.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
            />
            <textarea
              className='bg-transparent border-b py-12 resize-none mb-12 outline-none w-full placeholder-white focus:border-accent transition-all'
              id='message'
              onChange={(e) => handleChange('message', e.target.value)}
              required
              placeholder='Your Message'
              value={client.message}
              type='text'
            />
            <button type='submit' className='btn btn-lg'>{buttonText}</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
