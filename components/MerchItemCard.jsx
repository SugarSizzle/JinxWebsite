import React from "react"
import merchData from "../MerchData"



export default function MerchItemCard(){
    console.log('merch is rendered')

    const renderingMerch = merchData.map( item => (
        
        <div className="merch-card" >
            <img src ={item.imageUrl} className="merch-image" />
            <h3 className="merch-name"> {item.name} </h3>
            <p className= "merch-price" > {item.price} </p>

        </div>
    ))


    return(
        <div className="merch-container">
            { renderingMerch }
        </div>
    )
    
        
    
         
      
}