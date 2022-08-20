import React from 'react'
import logo from '../../assets/images/logo.png'
import user from '../../assets/images/user.svg'
import Navbar from './Navbar'
// import Main from '../Main/Main'

function Header() {
    
    
return (
    <header>
        <div className="container">
            <div className="header_top">
                <img src={logo} alt="sweet life" className='logo' />
                <div className="header_top-user">
                    <img src={user} alt="user" className='user'  />
                    <span>Увійти</span>
                </div>
            </div>
            
            <Navbar />
        </div>
    </header>
)
}

export default Header