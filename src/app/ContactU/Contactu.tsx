import { motion } from "framer-motion"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import { Submited } from "../Contact us/components/Submited";

const ContactU = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
      e.preventDefault();

      emailjs
          .sendForm('service_xz1oacj', 'template_igbg6pk', form.current!, {
              publicKey: '4o_VGy2WPzgPC4ARY',
          })
          .then(
              () => {
                  console.log('SUCCESS!');
              },
              (error) => {
                  console.log('FAILED...', error.text);
              }
          );
  };
    return (
      <div>
        <motion.h2 
            initial={{y: -80, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.8}}
            viewport={{once: true}}
            className="mb-4 text-3xl sm:text-4xl  text-center text-gray-900 dark:text-white">
            Contact Us
          </motion.h2>
          <motion.p 
            initial={{y: -80, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.9}}
            viewport={{once: true}}
            className="mb-8 text-center text-gray-500 dark:text-gray-400 text-base sm:text-xl">
            For food-related inquiries, please reach out to us with your questions or feedback. Whether it's about menu options, dietary preferences, or catering services, we're here to help!
          </motion.p>
       <section className="bg-white dark:bg-gray-900 flex lgjustify-between flex-col ">
      <div className="lg:m-[40px] flex items-center justify-around">
        <motion.div  className="text-xl" 
         initial={{y: -80, opacity: 0}}
         whileInView={{y: 0, opacity: 1}}
         transition={{duration: 0.8}}
         viewport={{once: true}}
        >
          <h2 className="p-m"><span className="font-bold">Email</span> : <a href="gmail">automatordev.soft@gmail.com</a></h2>
          <h2 className="p-3"><span className="font-bold">Phone</span> : +212 679190611</h2>
        </motion.div>
        </div>
        <div className="max-w-screen-md mx-auto">
          
          
          <form  ref={form} onSubmit={sendEmail} className="space-y-8" >
            <motion.div
              initial={{y: -90, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{duration: 1}}>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input 
                type="email" 
                id="email" 
                name='user_email' 
                className="shadow-sm outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[300px] focus:ring-primary-500 focus:border-primary-500 block lg:w-[88vh] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                placeholder="name@flowbite.com" 
                required 
              />
            </motion.div>
            <motion.div
              initial={{y: -100, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{duration: 1}}>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name='user_name' 
                className="block outline-none  p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg  border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                placeholder="Let us know how we can help you" 
                required 
              />
            </motion.div>    
            <motion.div
        initial={{y: -120, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 1}}>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
        <textarea 
          id="message" 
          name="message" 
          className="block outline-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
          placeholder="Leave a comment..." 
        />
      </motion.div>
      <motion.button
        type="submit"
         value="Send"
        className="w-[100px] bg-black h-[40px] my-3 rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute  before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff] "
      >
        Send
      </motion.button>
            </form>
            </div>
</section>
      </div>
    );
  };

export default ContactU