import React, { useState } from 'react';
import './Home.css';
import './Bro.css';
import { motion } from 'framer-motion';
const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your email submission logic here
    console.log('Email:', email);
    console.log('Message:', message);
    // Reset the form fields
    setEmail('');
    setMessage('');
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse
    flex-gap-10 overflow-hidden
    ">
     <motion.div
     className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
     >
      <p >
        Get In Torch
      </p>
      <h3 >
        Contact
      </h3>
     </motion.div>
    </div>
      
    
  );
};

export default Contact;