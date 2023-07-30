import React from 'react'
import './Lang.css'
import Rea from "../../img/react.png";
import Web from "../../img/web.png";
import Html from "../../img/html.png";
import Css from "../../img/css.png";
import Js from "../../img/js.png";
export const Lang = () => {
  return (
    <div className="lang" id='Lang'>
         <div className="awesome">
            <span>Languages</span>
            <span>Used</span>
            <div>
                <ul type="circle">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React JS</li>
                </ul>
            </div>
            
            <div className="blur s-blurl" style={{background:"#ABF1FF94"}}></div>
            </div>

            {/*right side*/}
            <div 
                
                className="l-right">
                <div
                data-aos="example-anim3"
                className="l-mainCircle">
                    <div className="l-secCircle">
                        <img src={Rea} alt="" />
                    </div>
                    <div className="l-secCircle">
                        <img src={Web} alt="" />
                    </div>
                    <div className="l-secCircle">
                        <img src={Html} alt="" />
                    </div>
                    <div className="l-secCircle">
                        <img src={Css} alt="" />
                    </div>
                    <div className="l-secCircle">
                        <img src={Js} alt="" />
                    </div>
                </div>
                {/*Backgroundcircle*/}
                <div className="l-backCircle blueCircle"></div>
                <div className="l-backCircle yellowCircle"></div>
            </div>
    </div>
  )
}
