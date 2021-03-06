import React from 'react'
import './Footer.css'
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Map from './Map/Map'

const Footer = () => {

    return (
        
        <div id="footer-div">

           <div className="footer-content-div">  
           
                <div className="footer-column">  
                        <h3> Contacto</h3>
                        
                        <div > <LocationOnIcon /> <p> Avenida de Mayo 1100.  Villa Adelina - B1607  </p> </div>

                        <div> <SmartphoneIcon/>  <p>   1144062944</p>  </div>
                        <div> <AlternateEmailIcon/>  <p> <a href="mailto:Lanasmaradans@gmail.com" > Lanasmaradans@gmail.com  </a> </p> </div>
                        <div> <AccessTimeIcon/>  <p > Lunes a viernes, 10:00 a 13:00 & 16:00 a 19:00h. </p>   </div>

                        
                        
                       
                            
                
                </div>

                <div className="footer-column">  

                        <h3> Ubicación </h3>
                        <Map/>
                        
                </div>
 
                   
                        
           

           

           </div>

        </div>

    )

}


export default Footer


