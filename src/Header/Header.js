import React from 'react'
import Navbar from './Navbar/Navbar.js'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import Logo from './Logo/logo.png'

const Header = () => {
    const [responsive, toggleResponsive] = React.useState(false)

    const handleToggleResponsive = () => {
        toggleResponsive(!responsive)
    }

    return(
        

        <div id="header-bar"> 

        <div id="title-ham-div"> 
         <h2 className="title"> {"Lanas Maradans"} <img className="logo" alt="Logo" src={Logo} /> </h2>

         <button id="hamburger" onClick={handleToggleResponsive}> <MenuIcon /> </button>
        </div>
    
        <Navbar responsive={responsive}/>


     
     
        </div>
    )


}




export default Header