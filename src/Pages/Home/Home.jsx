import React,{useState,useEffect,useContext} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb,faFile,faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Header from "../../Components/Common/Header";
import image from '../../assets/me.jpg'
import Resume from '../../assets/RESUME.pdf';
import ActionButton from "../../Components/ActionButton";
import MessageForm from "../../Components/MessageForm";
import './Home.css';


const Home = (props)=>{




    return (
        <div id="home-container">
            <Header/>

            

            <div id="main-content-container">
                <div id="introduction-container">
                    <div id="inner-container-wrap">
                        <div id="text-container">
                            <div className="text">
                                <h2><span id="word-1">Hello</span> I am Abdifatah Jama <span id="word-2">I am ChemEng Graduate</span></h2>
                            </div>

                            <div id="action-button-container">
                                <div id="action-btn-1" className="act-btn">
                                    <a href="https://github.com/AF-Jama" id="git-link" target='_blank'><FontAwesomeIcon icon={faGithub} color="black" size="2x"/></a>
                                </div>

                                <div id="action-btn-2" className="act-btn">
                                    <ActionButton text="Contact Me" style={{backgroundColor:"#FF4136",borderRadius:"0.3rem"}} onClick={()=>document.getElementById('contact-container').scrollIntoView()}/>
                                </div>

                            </div>
                        </div>

                        <div id="introduction-image-container">
                            <img src={image} alt="Image of me" />
                        </div>    
                    </div>    
                </div>       


            </div>
                <div id="project-container">
                    <div id="inner-project-container">
                        <h4>Projects</h4>
                        <div id="project-icon-container">
                            <FontAwesomeIcon icon={faLightbulb} size="4x" height="50px" width="50px" color="black"  beat/>
                        </div>

                        <div id="text-description">
                            <p id="text">Over the last year or so, I have created a multitude of projects varying from small Python Scripts, Games in C and Website Development</p>
                        </div>

                        <div id="project-action-btn">
                            <ActionButton text="Projects" style={{backgroundColor:"#FF4136"}} onClick={()=>window.location.href='/project'}/>
                        </div>



                    </div>
                </div>
                {/* <div id="resume-container">
                    <div id="inner-resume-container">
                        <iframe src="../../assets/RESUME.pdf" frameborder="0"></iframe>
                    </div>
                </div> */}
                <div id="contact-container">
                    <div className="contact-card">
                        <div id="contact-form-text">
                            <h4 style={{textAlign:"center",marginTop:"1rem"}}>Contact Me</h4>
                        </div>
                        <div id="contact-form">
                            <MessageForm/>
                        </div>
                    </div>
                </div>
        </div>
    )
}


export default Home;