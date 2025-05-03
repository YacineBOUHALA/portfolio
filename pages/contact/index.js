import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { BsArrowRight, BsCheckCircle } from 'react-icons/bs';
import { fadeIn } from '../../variants';

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_lwqvmrn', 'template_ce3ud0b', form.current, {
        publicKey: 'Zb89e4jeccpfUcbLm',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setMessageSent(true);
          setFormData({
            user_name: '',
            user_email: '',
            subject: '',
            message: ''
          });
          setTimeout(() => {
            setMessageSent(false);
          }, 3000); // Durée en millisecondes avant de réinitialiser messageSent à false (ici, 3 secondes)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2 variants={fadeIn('up', 0.2)} initial="hidden" animate="show" exit="hidden" className="h2 text-center mb-12">Let&apos;s <span className="text-accent">talk</span></motion.h2>
          <div className="form-container">
            <motion.form ref={form} onSubmit={sendEmail} variants={fadeIn('up', 0.4)} initial="hidden" animate="show" exit="hidden" className="flex-1 flex flex-col gap-6 w-full mx-auto">
              <div className="flex gap-x-6 w-full">
                <input type="text" name="user_name" value={formData.user_name} onChange={handleChange} placeholder="name" className="input" />
                <input type="email" name="user_email" value={formData.user_email} onChange={handleChange} placeholder="email" className="input" />
              </div>
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="subject" className="input" />
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="message" className="textarea"></textarea>
              <button type="submit" className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">Let&apos;s talk</span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100  transition-all duration-300 absolute text-[22px]" />
              </button>
              {messageSent && (
                <div className="flex items-center justify-center mt-4">
                  <div className="bg-green-500 rounded-full p-2">
                    <BsCheckCircle className="text-white w-8 h-8" />
                  </div>
                  <span className="ml-2 text-green-500">Message envoyé</span>
                </div>
              )}
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
