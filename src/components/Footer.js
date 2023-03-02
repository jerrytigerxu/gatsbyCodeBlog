import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <div className='text-center'>
        <h4 className="text-center">
            Code Blog
        </h4>
        <p className="text-center">Follow us on social media</p>

        <div className="footer-social-links">
            <ul className="social-links-list">
                <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
                        <i className='fa-brands fa-facebook-f fa-2x' />
                </a></li>
                <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="twitter">
                        <i className='fa-brands fa-twitter fa-2x' />
                </a></li>
                <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="instagram">
                <FontAwesomeIcon icon="fa-brands fa-instagram" />
                </a></li>
                <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="google">
                        <i className='fa-brands fa-google fa-2x' />
                </a></li>
            </ul>
        </div>
      
    </div>
  )
}

export default Footer
