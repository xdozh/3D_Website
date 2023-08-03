import React from 'react';
import { useState,useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';



const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
//template_ezibjvi
//service_vibv7nh
//gfmkG9VGtWgAgIvyn
    emailjs
      .send(
        'service_vibv7nh',
        'template_ezibjvi',
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        'gfmkG9VGtWgAgIvyn'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

    return (
        <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
                style={{ backgroundColor: '#151A30' }} // Replace 'YOUR_COLOR_HERE' with the desired color value
            >
                <p className={styles.sectionSubText}>Get in touch</p>

                {/* Social Media Icons */}
                <div className='flex gap-4 mb-4'>
                    {/* Replace "YOUR_FACEBOOK_PROFILE_URL" with your actual Facebook profile URL */}
                    <a href='https://www.facebook.com/PSSTec-104186701526458' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faFacebook} size='2x' className='text-white hover:text-blue-500' />
                    </a>
                    {/* Replace "YOUR_LINKEDIN_PROFILE_URL" with your actual LinkedIn profile URL */}
                    <a href='https://www.linkedin.com/company/psstec/' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faLinkedin} size='2x' className='text-white hover:text-blue-500' />
                    </a>
                    {/* Replace "YOUR_TWITTER_PROFILE_URL" with your actual Twitter profile URL */}
                    <a href='https://twitter.com/PSSTEC1' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faTwitter} size='2x' className='text-white hover:text-blue-500' />
                    </a>
                </div>

                <h3 className={styles.sectionHeadText}>Contact.</h3>

                <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8 flex-1'>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Name</span>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your good name?"
                            style={{ backgroundColor: 'whitesmoke' }}
                            className='py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your email</span>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your web address?"
                            style={{ backgroundColor: 'whitesmoke' }}
                            className='py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col flex-1'>
                        <span className='text-white font-medium mb-4'>Your Message</span>
                        <textarea
                            rows={7}
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder='What you want to say?'
                            style={{ backgroundColor: 'whitesmoke' }}
                            className='py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>

                    {/* The following wrapper div ensures that the button is centered at the bottom */}
                    <div className='flex justify-center items-center'>
                        <button
                            type='submit'
                            className='py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-gray-700 transition-colors'
                        >
                            {loading ? 'Sending...' : 'Send'}
                        </button>
                    </div>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );

};

export default SectionWrapper(Contact, "contact");
