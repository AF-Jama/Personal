import React,{useState,useEffect} from "react";
import openLink from '../../assets/open-link.svg';
import githubLink from '../../assets/github-link.svg';
import './ProjectCard.css';


const ProjectCard = (props)=>{





    return (
        <div id="project-card" className="project-card">
            <div className="project-inner-container">
                <div id="project-image-container" className="image-container" style={{backgroundColor:"blue"}}>
                    {/* <img src={props.projectImage} alt="" /> */}
                    {/* <p style={{color:"red"}}>TEST</p> */}
                </div>

                <h3 className="project-header">{props.header}</h3>

                <div id="card-text">
                    <p>{props.description}</p>
                </div>
            </div>
            <a href={props.liveLink} target="_blank" className="one"><img src={openLink} alt="" /></a> 
            <a href={props.githubLink} target="_blank" className="two"><img src={githubLink} alt="" /></a>
        </div>
    )
}



export default ProjectCard;