import React,{useState} from "react";
import './SkillCard.css';


const SkillCard = (props)=>{





    return (
        <div id="skills-card">
            <img src={props.image} alt="" />

            <h4>{props.skillName}</h4>
        </div>
    )
}



export default SkillCard;