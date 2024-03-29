import React, { useState } from "react"
import Logo from "../../assets/images/logo.png"
import { HiOutlineMenu } from "react-icons/hi";


import {
    FaHome,
    FaDollarSign,
    FaNode,
    FaPhone
} from 'react-icons/fa';

import "../../assets/stylesheets/Navbar.css"

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)

    const menuOptions = [
        {
            text: "Inicio",
            icon: <FaHome />
        },
        {
            text: "Precios",
            icon: <FaDollarSign />
        },
        {
            text: "Programas HT",
            icon: <FaNode />
        },
        {
            text: "Contactanos",
            icon: <FaPhone />
        }
    ]

    return (
        <nav className="navbar">
            <div className="logo">
                <img className="logo-img" src={Logo} alt="Logo" />
                <p>Software</p>
            </div>
            <div className="navbar-links">
                <ul className="links">
                    <li>
                        <a href="#">Inicio</a>
                    </li>
                    <li>
                        <a href="#">Precios</a>
                    </li>
                    <li>
                        <a href="#">Programas HT</a>
                    </li>
                    <li>
                        <a href="#">Contactanos</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-butoon">
                <button className="btn btn-primary">
                    Iniciar Sesión
                </button>
                <button className="btn btn-secondary">
                    Registrarse
                </button>
                <butoon className="btn">
                    <svg width="40" height="40" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M51.0239 31.9C51.1716 31.0307 51.1716 30.0153 51.1716 29C51.1716 27.9847 51.0239 27.1153 51.0239 26.1L57.2514 21.3152C57.8453 20.8805 57.993 20.1557 57.5483 19.4305L51.6161 9.42491C51.3193 8.84435 50.4301 8.5556 49.8361 8.84435L42.4209 11.7445C40.9377 10.5848 39.1593 9.56935 37.3794 8.84435L36.341 1.15973C36.1932 0.580561 35.5994 0 34.8578 0H22.9934C22.2519 0 21.6581 0.580561 21.5104 1.15973L20.3242 8.84435C18.5442 9.56935 16.9134 10.5846 15.2812 11.7445L7.86591 8.84435C7.12433 8.5556 6.38275 8.84435 6.08592 9.42491L0.153691 19.4307C-0.141743 20.0097 0.00576498 20.8805 0.450518 21.3154L6.82778 26.1C6.82778 27.1153 6.67999 27.9847 6.67999 29C6.67999 30.0153 6.82778 30.8847 6.82778 31.9L0.600117 36.6848C0.00618326 37.1195 -0.141324 37.8443 0.30315 38.5695L6.23538 48.5751C6.53235 49.1557 7.42157 49.4444 8.01537 49.1557L15.4308 46.2555C16.9138 47.4152 18.6924 48.4307 20.4722 49.1557L21.6584 56.8403C21.8075 57.5653 22.3999 58 23.1414 58H35.0059C35.7475 58 36.3413 57.4194 36.4891 56.8403L37.6767 49.1557C39.4552 48.4307 41.0875 47.4154 42.7181 46.2555L50.1335 49.1557C50.875 49.4444 51.6165 49.1557 51.9135 48.5751L57.8457 38.5693C58.1426 37.9903 57.9935 37.1195 57.5488 36.6846L51.0239 31.9ZM28.9257 39.15C23.1413 39.15 18.5445 34.6557 18.5445 29C18.5445 23.3443 23.1413 18.85 28.9257 18.85C34.7102 18.85 39.3072 23.3443 39.3072 29C39.3072 34.6557 34.7102 39.15 28.9257 39.15Z" fill="white" />
                    </svg>

                </butoon>
            </div>
        </nav>
    )
}

export default Navbar