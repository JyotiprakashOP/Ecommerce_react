import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-dark text-light text-center footer '>
      <span className='mt-1'>- Developed by AadimanavV -</span>
        
      <p className='footerItem'>
          <Link to="/about" className='footerLink'>About</Link> | <Link to="/contact" className='footerLink'>Contact</Link> | <Link to="/policy" className='footerLink'>Privacy Policy</Link>
        </p>
        
    </div>
    
  )
}

export default Footer