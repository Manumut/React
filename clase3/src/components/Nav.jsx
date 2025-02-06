import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <nav>
        <div className="logo">
            <h1>Logo</h1>
        </div>
        <ul>
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/contact">Contacto</Link></li>
            <li><Link to ="/soporte">Soporte</Link></li>
        </ul>
    </nav>
    </>
  )
}

export default Nav