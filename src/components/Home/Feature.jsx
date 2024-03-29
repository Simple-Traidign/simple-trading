import React from "react"

import ImageFeature from "../../assets/images/feature-image.png"
import ImageFeature2 from "../../assets/images/feature-image-2.png"
import ImageFeature3 from "../../assets/images/feature-image-3.png"

import "../../assets/stylesheets/Feature.css"

const Feature = () => {
    return (
        <div>
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
            <div className="feature">
                <div>
                    <h2>
                        Apoyo incondicional por la<strong>Comunidad</strong>
                    </h2>
                    <span></span>
                    <p>
                        Puedes apoyar ideas, estrategias, todo esto para que desarrolles una mayor habilidad y reconocimiento.
                    </p>
                    <button>CONOCE MÁS</button>
                </div>
                <div>
                    <img src={ImageFeature2} alt="feature" />
                </div>
            </div>
            <div className="feature-metus">
                <div>
                    <h2>
                        Quispe ut <strong>Metus</strong>
                    </h2>
                    <span></span>
                    <div>
                        <p>PELLENTESQUE</p>
                        <p>DONEC</p>
                        <p>VESTIBULUM</p>
                    </div>
                    <p>
                        Vivamus el luctus marius. Maecenas nisl libero, tincidunt id odio id, hendrerit tempus eros. Nullam quis ultrici
                    </p>
                </div>
                <div>
                    <img src={ImageFeature3} alt="feature" />
                </div>
            </div>
        </div>
    )
}

export default Feature