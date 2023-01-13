import React,{useState,useEffect,useContext} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import './Card.css';


const ProjectCard = (props)=>{


    return (
        <div className="card">
            <img src="" alt="" />

            <div id="description">
                {props.text}
            </div>

            <div id="card-icon-container">
                <FontAwesomeIcon icon={faGithub} size='2x'/>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='2x'/>
            </div>

        </div>
    )
}


export default ProjectCard;