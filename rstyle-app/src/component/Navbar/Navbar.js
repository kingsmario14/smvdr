import React from 'react'
import './Navbar.css'
import logop from '../../asset/logop.png'


const Navbar = ()=>{

    return (
        <nav>
        <img src = {logop} alt="" className="logop"/>
        <ul>
            <li>Home</li>
            <li>Page</li>
            <li>About us</li>
            <li>Properties</li>
            <li>Affiliations</li>
            <li><button className='btn'>contact us</button></li>
        </ul>
        </nav>
 )
}
export default Navbar;