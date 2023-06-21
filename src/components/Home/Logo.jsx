import React from "react"
import Logo1 from "../../assets/images/logo-1.png"
import Logo2 from "../../assets/images/logo-2.png"
import Logo3 from "../../assets/images/logo-3.png"
import Logo4 from "../../assets/images/logo-4.png"
import Logo5 from "../../assets/images/logo-5.png"
import Logo6 from "../../assets/images/logo-6.png"

import "../../assets/stylesheets/Logo.css"

const Logo = () => {
    return (
        <div className="logo-content">
            <div>
                <img src={Logo1} alt="logo1" />
            </div>
            <div>
                <img src={Logo2} alt="logo2" />
            </div>
            <div>  
                <img src={Logo3} alt="logo3" />
            </div>
            <div>
                <img src={Logo4} alt="logo4" />
            </div>
            <div>
                <img src={Logo5} alt="logo5" />
            </div>
            <div>
                <img src={Logo6} alt="logo6" />
            </div>
        </div>
    )
}

export default Logo