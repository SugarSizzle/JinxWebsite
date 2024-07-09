import React from "react"
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import {NavLink , useSearchParams} from "react-router-dom";

export default function Home(){
    const [searchParams , setSearchParams] = useSearchParams()
    const sliderImages =["/Images/JinxGfMerchCropTop.jpg" ,"/Images/AlaraHoodieMerch.jpg" ,"/Images/AlaraMerchImage.jpg"]

    return (
    <div>
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${sliderImages[0]})` }}>
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${sliderImages[1]})` }}>
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${sliderImages[2]})` }}>
                    
                </div>
            </div>
        </Slide>

        <h1 className="home-title">Unique Styles, for any Season </h1>

        
        <button > Headwear </button>
        <button > Hoodies </button>
        <button > Shirts </button>
        <button >Stickers</button> 

        <div className="thanks-section">


        </div>
    </div>
);
};
    


