import React from "react"
import {NavLink } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import  { NavbarContext }   from "../src/App"





export default function Header(){
    const {isOpen , changeState } = React.useContext(NavbarContext)
    
return (

    
        <div className="header-container">
            <h1 className="home-title"> JinxUOweMeASoda</h1>
            <GiHamburgerMenu className="burger-icon" onClick={changeState} />    
              
        </div>


    )
}


