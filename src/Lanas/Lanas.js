import React from 'react'
import './Lanas.css'

const Lanas = (props) => {

    const {name, picture, alt, desc, uses} = props.product

    return(
        <div className="product-div">

            <p className="product-title"> {name}  </p>

            <div className="product-body"> 
        
            <div className="product-text"> 
                <p className="product-desc">   {desc}  </p>

                 <p className="product-uses">  
                 <ul>
                     {uses.map(use => { return <li key={use}> {use} </li>  }) }
                 </ul>

                </p>
             </div>
                   
             <img className="product-image" src={require(`${picture}`)} alt={alt} />
          

             </div>

          


            
        </div>
    )

}

export default Lanas