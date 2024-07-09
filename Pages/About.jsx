



import React from "react"

export default function About(){


return (
    <div className="about-page-container">

        <img className="about-main-img" src="../Images/dancingImage.jpeg" />
        <h1 className="about-title">Dancer, Snowboarder, Dog Lover, Golf Enthusiast </h1>
       

        <div className="wrapped-images-dogs-container">
            
            <img className="wrapped-images-dogs" src ="../Images/RubyImage.jpeg" />
            <h3 className="about-text">Say Hi to Ruby</h3>
            <img className="wrapped-images-dogs" src= "../Images/BlindDogImage.jpeg"/>
            <h3 className="about-text">  and Blindy!</h3>
        </div>

        <div className="wrapped-images-jinx-container">
        
            <img className="wrapped-images-jinx" src= "../Images/JinxImage.jpg"/>
            <img className="wrapped-images-jinx-snow" src ="../Images/SnowboardingImage.jpeg" />
            <img className="wrapped-images-jinx-golf" src= "../Images/JinxGolfing.jpeg"/>
            <p> Hey, my name is Tyler. I just do me, I love living life to it's fullest. </p>
            <p>I love spending time with my dogs. Snowboaring in the winter. Golfing in the summer. </p>
        </div>
        <p>Any Support will be greatly appreciated, but never expected! </p>
    </div>

)


}