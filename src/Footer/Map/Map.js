import React from 'react'
import './Map.css'

const Map = () => {

    return (

        <div>
            <div className="mapouter standard">
                <div className="gmap_canvas">
                    <iframe width="400" height="300" id="gmap_canvas" title="map-small" className="map-iframe"
                    src="https://maps.google.com/maps?q=Avenida%20de%20mallo%201100%20villa%20adelina&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                    <a href="https://www.whatismyip-address.com/divi-discount/"> </a>
                </div>
            
            </div>

            <div className="mapouter wide long">
                <div className="gmap_canvas long ">
                    <iframe width="500" height="250" id="gmap_canvas" title="map-small" className="map-iframe"
                    src="https://maps.google.com/maps?q=Avenida%20de%20mallo%201100%20villa%20adelina&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                    <a href="https://www.whatismyip-address.com/divi-discount/"> </a>
                </div>
            
            </div>

            <div className="mapouter ultrasmall">
                <div className="gmap_canvas">
                    <iframe width="250" height="250" id="gmap_canvas" title="map-small" className="map-iframe"
                    src="https://maps.google.com/maps?q=Avenida%20de%20mallo%201100%20villa%20adelina&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                    <a href="https://www.whatismyip-address.com/divi-discount/"> </a>
                </div>
            
            </div>



        </div>
    )

}

export default Map  