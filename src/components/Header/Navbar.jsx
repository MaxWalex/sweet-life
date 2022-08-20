import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

  return (
    <nav className='header_menu'>
                <ul>

                    <li>
                    <Link to="/">
                        Головна
                    </Link>    
                    </li>
                    <li>
                        <Link to="/about">
                            Про Нас
                        </Link>    
                    </li>
                    <li>
                        <Link to="/menu">
                            Меню
                        </Link>
                    </li>
                    <li>
                        <Link to="/order">
                            Онлайн-замовлення
                        </Link>
                    </li>
                    <li>
                        <Link to="/contacts">
                            Контакти
                        </Link>
                    </li>
                </ul>
            </nav>
  )
}

export default Navbar