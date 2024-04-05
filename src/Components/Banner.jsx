import React, { useEffect, useState } from 'react'
import {AiFillGithub} from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { AiFillBehanceCircle } from "react-icons/ai";
import img from '../assets/flor1.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Banner = () => {
    useEffect(() => {
        AOS.init({
            easing: 'ease-out.quart',
            delay: 0,
            duration: 750
    })
    },[])
return (
    <div data-aos='fade-down-left' className='lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center'>
        <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white'>
        <h1 data-aos="fade-right" className="text-[52px] font-Semibold mb-8 leading-normal uppercase">Mi <span className='text-fuchsia-500'>portfolio</span></h1>
        <p data-aos="fade-left">
        Hola, soy Florencia Nuñez me desempeño en area de Innovacion y tecnologia me encuentro cursando el ultimo año de Diseño y Programacion Web, me desenvuelvo en soluciones digitales, tambien trabajo con herramientas de diseño.
        
        </p>
        <div className='flex mt-8 gap-2'>
            <div className='flx item-center justify-center'>
                <div className='flex space-x-2'>
                    <a href="" className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2'>
                        <AiFillGithub className="text-[28px]"/>
                    </a>
                    <a href="" className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2'>
                        <FaLinkedinIn className="text-[28px]"/>
                    </a>
                    <a href="" className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2'>
                        <AiFillBehanceCircle className="text-[28px]"/>
                    </a>
                </div>
            </div>
        </div>
        </div>
        <div>
            <img data-aos="fade-up" src={img} width={290} height={290} className="rounded-full border-2 p-1 border-fuchsia-500 img_glow" alt="" />
        </div>
    </div>
    );
};

export default Banner;