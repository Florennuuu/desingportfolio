import React from 'react'
import {FaGithub} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';
import {AiFillBehanceCircle} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='bg-slate-800 text-white lg:px-4 py-20'>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className='mb-4 md:mb-0'>
        <span className="text-3x1 font-semibold text-fuchsia-800 py-2 uppercase">LOGO</span>
          <p className='text-[16px] my-4'></p>
        </div>
        <div className='mb-4 md:mb-0'>
          <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2 uppercase'>Contact</h2>
          <p className='text-[16px] my-4'>Email: Florencianunnez20@gmail.com</p>
          <p className='text-[16px] my-4'>Celular: 1137709546</p>
        </div>
        <div className='mb-4 md:mb-0 flex'>
        <div className='flex-row  space-x-4'>
        <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2 uppercase'>Seguime</h2>
          <a className="text-white hover:text-fuchsia-800 transition duration-150  ease-in-out" href="">
            <FaGithub/>
          </a>
          <a className="text-white hover:text-fuchsia-800 transition duration-150  ease-in-out" href="">
            <FaLinkedinIn/>
          </a>
          <a className="text-white hover:text-fuchsia-800 transition duration-150 ease-in-out" href="">
            <AiFillBehanceCircle/>
          </a>
        </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer