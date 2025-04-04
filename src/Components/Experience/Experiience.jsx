import React from 'react'
import './Experience.css'
import { themeContext } from '../../context'
import { useContext } from 'react'

const Experiience = () => {
  const theme= useContext(themeContext)
  const darkMode = theme.state.darkMode;
  
  return (
    <div className="experience" id='Experiience'>
        <div className="achievements">
            <div className="circle">8+</div>
            <span>Years </span>
            <span>Experience</span>

        </div>

        <div className="achievements">
            <div className="circle">20+</div>
            <span>Projects </span>
            <span>Completed</span>

        </div>

        <div className="achievements">
            <div className="circle">5+</div>
            <span>Worked In</span>
            <span>Companies</span>

        </div>
    </div>
  )
}

export default Experiience
