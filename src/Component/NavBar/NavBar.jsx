import './NavBar.css'
import logo from '../../assets/img/logo-colors-f7-bg-130.png'
import menue from "../../assets/img/menu1.svg"
import X from '../../assets/img/X.svg'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'


function changeBg() {
    let navbar = document.getElementsByClassName('nav');
    let scroll = window.scrollY;
    if (scroll < 600) { navbar[0].classList.remove('navbarScroll') }
     else { navbar[0].classList.add('navbarScroll') }
}
window.addEventListener('scroll', changeBg)
const NavBar = ({ menu, bcblue }) => {
    const [list, setlist] = useState(false)
    return (
        <div >
            <div className='nav'  >
                <ul className='ul-nav' >
                    {
                        // eslint-disable-next-line react/prop-types
                        menu.map((e, index) => {
                            return <NavLink key={index} to="/"> <li key={index} >{e}</li></NavLink>
                        })
                    }
                </ul>
                <img src={logo} alt="" id="logo" />
                <img src={menue}  className='menuicon' onClick={() => setlist(!list)}
                   />
                        <div className='divleft' style={{ display: (list) ? "block" : "none" }} >
            <img src={X}  onClick={() => setlist(!list)} className='X' />
            <ul className='nav-mobile' >
                        {
                            menu.map((e, index) => {
                                return <NavLink key={index} to="/"> <li key={index} >{e}</li></NavLink>
                            })
                        }
                    </ul>
                
            </div>
            </div>
            
       
        </div>
    )
}

export default NavBar