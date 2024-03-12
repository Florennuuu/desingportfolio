import React from 'react'
import img1 from '../assets/4.jpg';
import img2 from '../assets/1.jpg';
import img3 from '../assets/mockup.jpg';
import img4 from '../assets/ojos.jpg';
//<iframe src="https://www.behance.net/embed/project/193334019?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>

export const Projects = () => {
  return (
    <div id="Projects" className="p-20 flex flex-col items-center justify-center">
      <h1 data-aos="fade-right" className='text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500'>Projects</h1>
    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20'>
      <img data-aos="fade-up" height={250} width={250} className='text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3x1 p-1 border-2 border-fuchsia-800 b_glow' src={img1} alt="" />
      <img data-aos="fade-down" height={250} width={250} className='text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3x1 p-1 border-2 border-fuchsia-800 b_glow' src={img2} alt="" />
      <img data-aos="fade-up" height={250} width={250} className='text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3x1 p-1 border-2 border-fuchsia-800 b_glow' src={img3} alt="" />
      <img data-aos="fade-down" height={250} width={250} className='text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3x1 p-1 border-2 border-fuchsia-800 b_glow' src={img4} alt="" />
    </div>
    </div>
  )
}

export default Projects;