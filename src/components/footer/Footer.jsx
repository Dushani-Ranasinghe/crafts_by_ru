import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <footer className='footer'>
        <div className='footer_container container'>
            <h1 className='footer_title'> Crafts By RU</h1>
            <ul className='footer_list'>
                <li>
                    <a href='#about' className='footer_link'>About</a>
                </li>
                {/* <li>
                    <a href='#portfolio' className='footer_link'>Projects</a>
                </li> */}
                <li>
                    <a href='#services' className='footer_link'>Services</a>
                </li>
            </ul>
            <div className='footer_social'>
            <a href='https://www.facebook.com/' className='footer_social-link' target='_blank' rel='noopener noreferrer'>
            <i className='bx bxl-facebook'></i>
        </a>
        <a href='https://www.instagram.com/' className='footer_social-link' target='_blank' rel='noopener noreferrer'>
            <i className='bx bxl-instagram'></i>
        </a>
        <a href='https://www.twitter.com/' className='footer_social-link' target='_blank' rel='noopener noreferrer'>
            <i className='bx bxl-twitter'></i>
        </a>
            </div>
        
        <span className='footer_copy'> &#169; Crafts_by_RU. All rights reserved </span>

        </div>
    </footer>
  )
}

export default Footer