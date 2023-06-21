import React from "react"

import ImageFeature from "../../assets/images/feature-image.png"
import "../../assets/stylesheets/Feature.css"

const Feature = () => {
    return (
        <div className="feature">
            <div>
                <img src={ImageFeature} alt="feature" />
            </div>
            <div>
                <h2>
                    Sistema de <strong>Educación</strong> enfocado en Profits
                </h2>
                <span></span>
                <p>
                    Contamos con la metodologia más sencilla y analisamos tu desarrollo para impulsar tus habilidades.
                </p>
                <button>CONOCE MÁS</button>
            </div>
        </div>
    )
}

export default Feature