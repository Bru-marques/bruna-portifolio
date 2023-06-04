"use client"; 
import Image from 'next/image'
import { useState } from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import bruna from '../assets/bruna-marques.svg'
import socialMediaFeed from '../assets/social-media-feed.png'
import qAndA from '../assets/q-and-a.png'
import timer from '../assets/timer.png'
import cond8 from '../assets/cond8.png'

export default function Home() {
  const [darkMode, setDarkMode ] = useState(true)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className='bg-white dark:bg-sky-800 px-10 md:px-20 lg:px-40'>
        <section>
          <nav className='py-10 mb-12 flex justify-between dark: text-white'>
            <h1 className='text-gray-600 dark:text-white'>Bruna Marques</h1>
            <ul className='flex items-center gap-5'>
              
              <li>
                <a 
                  className=' text-gray-600 dark:text-white'
                  href='https://github.com/bru-marques'
                >
                  Github
                </a>
              </li>
              <li>
                <a 
                  className='text-gray-600 dark:text-white'
                  href='/'
                >
                  Resume
                </a>
              </li>
              <li>
                <BsFillMoonStarsFill
                className='cursor-pointer text-2xl text-gray-600 dark:text-white'
                onClick={() => setDarkMode(!darkMode)}
                />
              </li>
            </ul>
          </nav>
        </section>
        <section>
        <div className="mx-auto  border-r-gray-700 w-80 h-70 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={bruna} alt={''} />
            </div>
          <div className=' dark:text-white text-center p-8'>
            <h2 className='text-5xl font-bold'>Bruna Marques</h2>
            <h3 className='text-2xl py-2 dark:text-white md:text-3xl'>FrontEnd Developer</h3>
            <p className='ext-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl'>
              I am a full-stack <span className='text-red-400'>developer</span> developer with a passion for building web
              applications. I have a background in web development and a
              passion for learning new technologies.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillTwitterCircle
              className='cursor-pointer'
               />
              <AiFillLinkedin
              className='cursor-pointer'
               />
              <AiFillYoutube 
              className='cursor-pointer'
              />
            </div>
            
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={bruna} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={bruna} width={100} height={100} alt=''  />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={bruna} width={100} height={100} alt='' />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={timer}
                alt='portfolio project' 
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={qAndA} alt='portfolio project' 
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={socialMediaFeed} alt='portfolio project' 
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={cond8} alt='portfolio project' 
              />
            </div>
           
          </div>
        </section>

      </main>
    </div>
  )
}
