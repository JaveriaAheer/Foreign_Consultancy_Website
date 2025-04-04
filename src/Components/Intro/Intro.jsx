import React, { useContext } from 'react'
import './Intro.css';
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Thumbsup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import transbg2 from '../../img/transbg.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../context';
import { motion } from 'framer-motion';

const Intro = () => {
    const transition ={duration : 2,type:'spring'}

  const theme= useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div class="intro">
      <div className="i-left">
        <div className="i-name">
            <span style={{color:darkMode? 'white':''}}>
                Hy! I Am
            </span>
            <span>Usama Aheer</span>
            <span>
                Frontend developer with high level of experience in web designing and development, producing 
                the quality work.
            </span>
        </div>
        <button class="button i-button">
            Hire Me
        </button>

        <div className="i-icons">
            <img src={Github} alt="" />
            <img src={LinkedIn} alt="" />
            <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="  i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={transbg2} alt="" />
        {/* <motion.img
        initial={{left:'-36%'}}
        whileInView={{left:'-24%'}}
        transition={transition}
        src={glassesimoji} alt="" />

        <motion.div
        initial={{top:'-4%',left:'84%'}}
        whileInView={{left:'68%'}}
        transition={transition}
         style={{top:'-4%',left:'68%'}}>
          <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
        </motion.div>

        <motion.div
        initial={{top:'320px',left:'360px'}}
        whileInView={{left:'-20px'}}
        transition={transition}
        style={{top:'360px',left:'-60px'}}>
          <FloatingDiv image={Thumbsup} txt1='Best Design' txt2='Award'/>
        </motion.div> */}
        {/* blur divs */}
        <div className='blur'style={{background:'#C1F5FF',top:'340px',width:'420px',heigt:'220px',left:'-180px'}}></div>
        <div className='blur'style={{background:'rgb(238, 210, 255)'}}></div>
      </div>
    </div>
  )
}

export default Intro
