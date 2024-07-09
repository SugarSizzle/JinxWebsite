import React from "react"
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FaTwitch } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import {NavLink} from "react-router-dom"
import  { NavbarContext }   from "../src/App"



export default function NavbarPopout(){

    let { isOpen, changeState  } = React.useContext(NavbarContext)
    
    let navbarRef = React.useRef()

    // function eventTarget(e){
    //     if(e.target != "div.navbar-popout" || "a.styles-links.active" || "navbar-icons-container"  ){
    //         console.log(e)
    //     //    return setIsOpen(false)
    //     }
    // }

   return (
    
       isOpen && 
       <div className="navbar-popout"  >
           
           
            <nav className ="styles-nav"  >
                <NavLink to='/About' className="styles-links">About </NavLink>
                <NavLink to="/AllProducts" className="styles-links" >All Products</NavLink>
                <NavLink className="styles-links" >Shirts</NavLink> 
                <NavLink className="styles-links" >HeadWear</NavLink>
                <NavLink className="styles-links">Hoodies</NavLink>
                <NavLink className="styles-links">Stickers</NavLink>
            </nav>

            <div className="navbar-icons-container" >
                <FaYoutube className="icons"/>
                <FaTwitter className="icons" />
                <br></br>
                <FaDiscord className="icons"/>
                <FaTwitch className="icons"/>
                <FaTiktok className="icons"/>
            </div>

        </div>
   )



}