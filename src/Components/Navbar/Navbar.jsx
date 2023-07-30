import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import {Link} from 'react-scroll'
import Experience from '../Experience/Experience'
import Services from '../Services/Services'
import Teammates from '../Teammates/Teammates'
const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Switch to Dark</div>
                <Toggle/> 
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType:'none'}}>

                        <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                        <li>Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true}>
                        <li>Services</li>
                        </Link>
                        <Link spy={true} to='Experience' smooth={true}>
                        <li>Experience</li>
                        </Link>
                        <Link spy={true} to='Lang' smooth={true}>
                        <li>Lang</li>
                        </Link>
                        <Link spy={true} to='Teammates' smooth={true}>
                        <li>Teammates</li>
                        </Link>
                    </ul>
                </div>
                <Link spy={true} to='Contact' smooth={true}>
                <button className="button n-button">Contact 
                </button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar