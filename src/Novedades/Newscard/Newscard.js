import React from 'react'
import './Newscard.css'

const Ncard = (props) => {

    return(
  
        <div className="news-card-div">

        <p className="news-text">  
         
         {props.novedad.map(novedad => {
             
            
            return (
                <React.Fragment key={Math.random()}>
                {novedad}
                <br/>
                </React.Fragment>
            )
            

         })}
        

        {/* {props.novedad ? 
             <React.Fragment>
             <br/>
             {props.novedad2  }
           
             </React.Fragment>
             
             :      null    }

         </p> */}

         </p>
        <p className="news-timestamp"> {props.timestamp} </p>
 
        </div>

    )
}

export default Ncard