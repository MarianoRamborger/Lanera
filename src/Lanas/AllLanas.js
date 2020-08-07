import React from 'react'
import {Link} from 'react-router-dom'

const AllLanas = (props) => {
    

return (

    <div className="all-lanas-div">

    {props.lanas.map(lana => {

        return <Link to={`${lana.link}`} className="lana-card" key={lana.name}>

           <img src={require(`${lana.picture}`) } alt={lana.alt}/>

            <p className="lana-card-name"> {lana.name} </p>


        </Link>

    })}

    </div>
)


}

export default AllLanas