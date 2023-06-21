import React from "react"
import Navbar from "./Home/Navbar"
import Banner from "./Home/Banner"
import Logo from "./Home/Logo"
import Counter from "./Home/Counter"
import Feature from "./Home/Feature"

import "../assets/stylesheets/Main.css"

const Main = () => {
    return (

        <main className="main">
            <div className="home-1">
                <Navbar />
                <Banner />
            </div>
            <div className="home-2">
                <Logo />
                <Counter />
                <Feature />
            </div>
        </main>
    )
}

export default Main