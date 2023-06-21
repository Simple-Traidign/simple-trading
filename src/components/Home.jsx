import React from "react"
import Navbar from "./Navbar"

import Computer from "../assets/images/computer.png"

import { FaPlayCircle } from "react-icons/fa"

import "../assets/stylesheets/Home.css"

const Home = () => {
    return (

        <div className="home">
            <Navbar />
            <div className="home-container">
                <div className="home-content content">
                    <h1>
                        Cambia tu mentalidad y cambiaras tus<strong> Resultados</strong>
                    </h1>
                    <p>
                        Que tus hijos no sean un excusa sino el impulso más grande para completar el programa SIMPLE TRADING
                    </p>
                    <div>
                        <button>
                            <FaPlayCircle className="play"/>
                            VER  VIDEO
                        </button>
                        <button className="btn-active">
                            INICIAR AHORA
                        </button>
                    </div>
                </div>
                <div className="home-content image">
                    <img src={Computer} alt="computer" />
                </div>
            </div>
        </div>
    )
}

export default Home