import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import './styles.css';

const Header = props => (
    <header className="Header">
        <div className="Logo">
            <img src={logo} alt={'logo'} />
        </div>
        <ul className='Navbar'>
            <li className="NavItem ">
                <NavLink to="/" exact={true} >Burger Builder</NavLink>
            </li>
            <li className="NavItem">
                <NavLink to="/orders">Orders</NavLink>
            </li>
            <li className="NavItem">
                <NavLink to="/sign-up">Sign Up</NavLink>
            </li>
            <li className="NavItem">
                <NavLink to="/sign-in">Sign In</NavLink>
            </li>
        </ul>
    </header>
)

export default Header;