import React, { useEffect, useState } from 'react';
import Nav from './Components/Nav.jsx'
import Banner from './Components/Banner.jsx'
import Sobremi from './Components/Sobremi.jsx'
import Services from './Components/Services.jsx'
import Projects from './Components/Projects.jsx'
import Contact from './Components/Contact.jsx'
import Footer from './Components/Footer.jsx'
import { DNA } from 'react-loader-spinner'
import './styles.css'


const App = () => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  },[])
return (
  <>
  {
    loading ? 
    <div className='bg-slate-900 h-max min-h-screen flex just-center justify-center items-center'>
          <DNA
            visible={true}
            height={100}
            width={100}
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            />
    </div>
        : 
                
        <div className="bg-slate-900">
                <Nav/>
                <Banner/>
                <Sobremi/>
                <Services/>
                <Projects/>
                <Contact/>
                <Footer/>
          </div>
          }
        </>
      );
};
    
  
export default App;