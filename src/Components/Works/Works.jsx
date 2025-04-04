import React from 'react'
import './works.css'
import Upwork from '../../img/Upwork.png'
import Amazone from '../../img/amazon.png'
import Fiverr from '../../img/fiverr.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import { themeContext } from '../../context'
import { useContext } from 'react'
import { motion } from 'framer-motion'

const Works = () => {
   

    const theme= useContext(themeContext)
    const darkMode = theme.state.darkMode;
  return (
    <div className="works">
        <div className="awesome">
    <span style={{color:darkMode? 'white':''}}>Works for All These</span>
    <span>Brands & Clients </span>
    <span>With a track record of success, I've collaborated
     with numerous<br/> clients and companies to bring their
      digital visions to life.<br/> From startups to established
       businesses, I've delivered<br/> exceptional web solutions that drive results
         </span>
        
         <button className='button s-button'>Hire Me</button>
         
         <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
    </div>

    {/* right side */}
    <div className="w-right">
        <motion.div
        initial={{rotate:45}}
        whileInView={{rotate:0}}
        viewport={{margin:'-40px'}}
        transition={{duration : 3.5,type:'spring'}}

        className="w-maincircle">
            <div className="sec-circle">
                <img src={Upwork} alt="" />
            </div>
            <div className="sec-circle">
                <img src={Fiverr} alt="" />
            </div>
            <div className="sec-circle">
                <img src={Amazone} alt="" />
            </div>
            <div className="sec-circle">
                <img src={Shopify} alt="" />
            </div>
            <div className="sec-circle">
                <img src={Facebook} alt="" />
            </div>


        </motion.div>
        {/* backgrund circles */}
        <div className="bluecircle w-backcircle"></div>
        <div className="yellowcircle w-backcircle"></div>
        </div>
    </div>
  )
}

export default Works
