
import './App.css'
import React from "react"

import Layout from "../Pages/Layout"
import About from "../Pages/About"  
import Home from "../Pages/Home"
import AllProducts from "../Pages/AllProducts"
import { BrowserRouter , Routes , Route , Link } from "react-router-dom"
import MerchItemCard from '../components/MerchItemCard'



const NavbarContext = React.createContext()

export default function App() {
  
  const [isOpen , setIsOpen] = React.useState(false)


  function changeState(){
    return setIsOpen(prev => !prev)
      
  }


  return (
  <NavbarContext.Provider value ={{isOpen:isOpen , setIsOpen:setIsOpen , changeState}}>
    <Routes>
      <Route  path="/" element={<Layout/> }  >
        <Route index element={<Home />} />
        <Route path="/About" element={ <About/> } />
        <Route path="/AllProducts" element ={ <AllProducts />} />
      </Route >
        
    </Routes>
  </NavbarContext.Provider>
    
  
 
     
    
  )
    
  
   
  
}
export { NavbarContext }



