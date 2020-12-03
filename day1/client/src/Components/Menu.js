import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/menu.css'

function Menu() {
    return (
        <div className='menu'>

            <div>
                <h1><NavLink to='/'>Book Barn</NavLink></h1>
            </div>

            <div className='rightButtons'>
                <h2>Login</h2>
                <h2>Register</h2>
                <h2><NavLink to='/add-book'>Add Book</NavLink></h2>
            </div>
        </div>

    )
}

export default Menu;