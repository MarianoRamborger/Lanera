import React from 'react'
import './Map.css'

const Map = () => {

    return (

        <div>
            <div class="mapouter standard">
                <div class="gmap_canvas">
                    <iframe width="250" height="250" id="gmap_canvas" title="map-small" className="map-iframe"
                    src="https://maps.google.com/maps?q=Avenida%20de%20mallo%201100%20villa%20adelina&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    <a href="https://www.whatismyip-address.com/divi-discount/"> </a>
                </div>
            
            </div>

            <div class="mapouter wide long">
                <div class="gmap_canvas long ">
                    <iframe width="500" height="250" id="gmap_canvas" title="map-small" className="map-iframe"
                    src="https://maps.google.com/maps?q=Avenida%20de%20mallo%201100%20villa%20adelina&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    <a href="https://www.whatismyip-address.com/divi-discount/"> </a>
                </div>
            
            </div>
        </div>
    )

}

export default Map  