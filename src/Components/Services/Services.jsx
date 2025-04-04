import React, { useContext } from 'react'
import './Services.css'
import Heartimoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './resume.pdf'
import { themeContext } from '../../context'
import { motion } from 'framer-motion'


const Services = () => {
  const transition ={duration : 1,type:'spring'}

  const theme= useContext(themeContext)
  const darkMode = theme.state.darkMode;


  return (
    <div className="services" id='Services'>
        {/* left */}
        <div className="awesome">
            <span style={{color:darkMode? 'white':''}}>My Awsome</span>
            <span>Services</span>
            <span>I offer a range of services including website development,<br/>
             web application design, and e-commerce solutions tailored<br/>
              to your business needs. From creating stunning websites <br/>to optimizing user experiences, I've got you covered.</span>
                 <a href={Resume} download>
                 <button className='button s-button'>Download CV</button>
                 </a>
                 <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>
        {/* right */}
        <div className="cards">
           <motion.div 
            initial={{left:'380px'}}
            whileInView={{left:'500px'}}
            transition={transition}
           
           style={{left: '520px'}}>
            <Card
            emoji={Heartimoji}
            heading = {'Designer'}
            detail = {"Figma, Sketch, Photoshope, Adobe, Adobe xd"}
            />
            </motion.div>

            <motion.div 
            initial={{left:'280px'}}
            whileInView={{left:'40px'}}
            transition={transition} 
            style={{left: '40px',top:'200px'}}>
            <Card
            emoji={Glasses}
            heading = {'Developer'}
            detail = {"HTML, CSS, JavaScript, React"}
            />
            </motion.div>

            <motion.div 
            initial={{left:'320px'}}
            whileInView={{left:'420px'}}
            transition={transition} style={{left: '400px',top:'380px'}}>
            <Card
            emoji={Humble}
            heading = {'UI/UX'}
            detail = {"An Awesome Frontend designer"}
            /> 
            </motion.div>
            <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services
