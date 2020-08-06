import React from 'react'
import './Novedades.css'
import Newscard from './Newscard/Newscard.js'

const Novedades = () => {
    
    return(
        <div className="novedades-div"> 

            <h3> Novedades </h3>

            <div className="novedades-cards-div"> 
        

              <Newscard novedad={[
                  "Nuestro local de venta permanece cerrado al público. Pedinos presupuesto via email o WhatsApp.",
                  "Hacemos entregas sin contacto debido al COVID-19."
              ]}
                          
               timestamp={"06/08/2020"} />

              <Newscard novedad={["Estrenamos página web!"]} timestamp={"06/08/2020"} />
        
            </div>

        </div>
    )
}

export default Novedades