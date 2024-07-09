import React from "react"
import Header from "../components/Header"
import NavbarPopout from "../components/NavbarPopout"
import Footer from "../components/Footer"
import MerchItemCard from "../components/MerchItemCard"
import { NavLink, Outlet } from "react-router-dom"


export default function Layout(){

    return (
        <>
            <Header />
            <NavbarPopout/>
            <Outlet />
            <Footer/>
            

        </>
    )

}