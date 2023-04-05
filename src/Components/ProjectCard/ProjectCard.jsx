import React,{useState,useEffect} from "react";
import openLink from '../../assets/open-link.svg';
import githubLink from '../../assets/github-link.svg';
import './ProjectCard.css';


const ProjectCard = (props)=>{





    return (
        <div className="project-card">
            <div className="project-inner-container">
                <div className="image-container" style={{textAlign:"center"}}>
                    <img src={props.projectImage} style={{maxWidth:"100%"}} alt="" />
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