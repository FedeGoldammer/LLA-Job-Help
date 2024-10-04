import React from 'react'
import '../styles/linkedin.css'
import workInProgress from '../assets/work-in-progress.webp'


const Linkedin = () => {
  return (
    <div id='linkedin'>
        <div id='linkedinContainer'>
            <h2>Linkedin</h2>
            <div id='linkedinText'>
                <img id='work-in-progress' src={workInProgress} alt="Trabajo en proceso"/>
            </div>
        </div>
        <hr className='hr'/>
    </div>
  )
}

export default Linkedin