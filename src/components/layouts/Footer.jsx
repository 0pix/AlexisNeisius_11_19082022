import React from 'react'
import './Footer.css'
import logo from '../../assets/logo-footer.svg'

const Footer = () => {
  return (
    <div className="Footer">
      <img src={logo} width="100px" alt="" />
      <div>© 2020 Kasa. All rights reserved</div>
    </div>
  )
}

export default Footer
