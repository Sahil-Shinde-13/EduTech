import React from 'react'
import './Footer.css'
import Faq from '../Faq/Faq'
import Title from '../Title/Title'

function Footer() {
  return (
      <div className='ra'>
    <Title  title='FAQ' />
      <Faq/>
    <div className='footer'>
        <p>© 2024 EduTech. All rights reserved</p>
        <ul>
            <li>Terms of Services</li>
            <li>Privacy Policy</li>
        </ul>
    </div>
    </div>
  )
}

export default Footer