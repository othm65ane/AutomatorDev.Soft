import React from "react";
import { motion } from "framer-motion";
import ocharfao from "../Blog/teams/ocharfao.jpg";
import Amine from "../Blog/teams/Amine.jpg";
import Zouhir from "../Blog/teams/Zouhir.jpg";
import ocharfao3 from "../Blog/teams/ocharfao3.png";



const Blog: React.FC = () => {
  return (
    <div className='mt-[160px]'>
      <div className=' flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 '>
        <img src={ocharfao}
        width={350}
        className=
        'rounded-[20px]  '
        />
        <p className='my-5 max-w-xl py-10 lg:ml-[30px] text-center text-base font-normal leading-7 text-gray-500 mb-9 text-2xl'><span className='font-semibold text-3xl'>Othmane Charfaoui</span><br/>
       <motion.span
        className='text-white bg-black'
        initial = {{opacity : 0}}
        whileInView={{opacity : 1}}
        transition={{duration : 0.9}}
        viewport={{once : true}}
        >Junior Software Developer / Ui deseigner </motion.span> <br />
        I' am a dedicated and versatile with a passion Junior Software developer for creating efficient and user-friendly web applications.  I have worked with a variety of technologies
        </p>
      </div>
      <div className='flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 lg:mt-[300px]'>
      <img src={Amine}
       width={350}
      className='rounded-[20px] '
      />
        <p className='my-5 max-w-xl py-10 lg:ml-[30px] text-center text-base font-normal leading-7 text-gray-500 mb-9 text-2xl'><span className='font-semibold text-3xl'>Amine Abaidi</span><br/>
        <motion.span
        className='text-white bg-black'
        initial = {{opacity : 0}}
        whileInView={{opacity : 1}}
        transition={{duration : 0.9}}
      
        >Software Developer</motion.span> < br/>
        I’m a highly motivated software developer specializing in building web full stack applications with a great enthusiasm for learning and solving challenges. I always raise the flag “ in the worst situations I find motivation, in the most desperate situation, I find inspiration”
        </p>

      </div>
      <div className='flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 my-[250px]'>
      <img src={Zouhir}
        width={350}
        className='rounded-[20px]'
        />
        <p className='my-5 max-w-xl py-10 lg:ml-[30px] text-center text-base font-normal leading-7 text-gray-500 mb-9 text-2xl'><span className='font-semibold text-3xl'>Zouhir Grir</span><br/>
        Aspiring <span className="bg-black text-white">Full Stack Developer</span> with a strong foundation from 1337 Coding School and ISGI Khouribga, specializing in web technologies like JavaScript, React.js, and Laravel.
      </p>

        
      </div>
      <div className='flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 lg:mt-[300px]'>
      <img src={ocharfao3} 
       width={350}
       className='rounded-[20px] lg:ml-[30px]'
      />
        <p className='my-5 max-w-xl py-10 text-center text-base font-normal leading-7 text-gray-500 mb-9 trxt-2xl'><span className='font-semibold text-3xl'>khalid Youftan</span><br/>
         <motion.span
        className='text-white bg-black'
        initial = {{opacity : 0}}
        whileInView={{opacity : 1}}
        transition={{duration : 0.9}}
      
        >Software Developer / social media manager</motion.span> <br />
        I'am a software developer with a passion for creating dynamic, user-friendly websites and web applications. With a solid background in front-end dev and back-end dev .        </p>
      </div>
    </div>
  );
};

export default Blog;
