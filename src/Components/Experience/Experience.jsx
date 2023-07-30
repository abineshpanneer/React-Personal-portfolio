import React from "react";
import './Experience.css'
const Experience = () =>{
    return(
        <div className="experience" id='Experience'
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-delay="50"
                data-aos-duration="1000"
            >
            <div className="achievement">
                <div className="circle">  F</div>
                <span></span>
                <span>Fresher</span>
            </div>
            <div className="achievement">
                <div className="circle">Pro</div>
                <span>Completed our</span>
                <span>Own Project</span>
            </div>
            <div className="achievement">
                <div className="circle">Clg</div>
                <span>Jawahar Science</span>
                <span>College</span>
                
            </div>
        </div>
    )
}

export default Experience