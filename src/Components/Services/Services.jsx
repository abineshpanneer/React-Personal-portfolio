import React from "react";
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume  from './Abinesh CV.pdf'
import { themeContext } from '../../Context'
import { useContext } from 'react'
const Services = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
    return(
        <div className="services" id='Services'>
            {/*Left side */}
            <div className="awesome">
            <span style={{color: darkMode? 'white':''}}>Our</span>
            <span>Awesomes</span>
            <spane> 
                <br/>
                
            </spane>
            <a href={Resume} download>
            <button className="button s-button">Download CV</button>
            </a>
            <div className="blur s-blurl" style={{background:"#ABF1FF94"}}></div>
            </div>

            {/* right side*/}
            <div className="cards">
              <div 
                data-aos="zoom-out-left"
                data-aos-delay="50"
                data-aos-duration="500"
                style={{left:'14rem'}}>

                <Card
                emoji={HeartEmoji}
                heading={'Design'}
                detail={"Figma,Photoshop,React Js,HTML,CSS"}
                />
              </div>

              {/*Second card*/}
              <div 
                data-aos="zoom-out-right"
                data-aos-delay="50"
                data-aos-duration="500"
                className="cards" style={{top:"12rem",left:"-4rem"}}>

                <Card
                    emoji={Glasses}
                    heading={"Developers"}
                    detail={"Html,Css,JavaScript,React JS,email Js"}
                />

              </div>
              {/*Third card*/}
              <div 
              data-aos="zoom-out-left"
              data-aos-delay="50"
              data-aos-duration="500"
              className="cards" style={{top:"19rem",left:"12rem"}}>
                <Card
                   emoji={Humble}
                   heading={"Team Members"}
                   detail={"Avinesh,Nandha Kumar and MySelf"}
                />
              </div>
              <div className="blur s-blur2" style={{Background:"var(--purple)"}}></div>
            </div>
        </div>
    )
}

export default Services