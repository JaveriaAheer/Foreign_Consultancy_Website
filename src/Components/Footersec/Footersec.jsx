import React from 'react'
import './Footersec.css'
import Wave from '../../img/wave.png'
import INsta from '@iconscout/react-unicons/icons/uil-instagram'
import FB from '@iconscout/react-unicons/icons/uil-facebook'
import GH from '@iconscout/react-unicons/icons/uil-github'

const Footersec = () => {
  return (
    <div className='footer'>
      <img src={Wave} alt="" style={{width:'100%'}} />
      <div className="f-content">
        <span>usamaaheer@gmail.com</span>
        <div className="fa-icons">
            <INsta color='white' size='4rem'/>
            <FB color='white' size='4rem'/>
            <GH color='white' size='4rem'/>

        </div>
      </div>
    </div>
  )
}

export default Footersec
