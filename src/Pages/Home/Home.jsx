import React,{useState,useEffect,useContext} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb,faFile,faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import githubLogo from '../../assets/github.png'
import HtmlLogo from '../../assets/html.svg';
import cssLogo from '../../assets/css3.svg';
import reactLogo from '../../assets/react.svg';
import javascriptLogo from '../../assets/javascript.svg'; 
import mysqlLogo from '../../assets/mysql.svg';
import pyLogo from '../../assets/python.svg';
import graphqlLogo from '../../assets/graphql.svg';
import redisLogo from '../../assets/redis.svg';
import CLogo from '../../assets/C.svg';
import tailwindLogo from '../../assets/tailwindcss.svg';
import Header from "../../Components/Common/Header";
import Footer from "../../Components/Common/Footer";
import image from '../../assets/me.jpg'
import Resume from '../../assets/RESUME.pdf';
import ActionButton from "../../Components/ActionButton";
import SkillCard from "../../Components/SkillCard";
import MessageForm from "../../Components/MessageForm";
import projectFile from '../../projects.json';
import './Home.css';


const Home = (props)=>{
    console.log(projectFile);



    return (
        <div id="home-container">
            <Header/>

            

            <main id="main-content-container">
                <div id="main-inner-container">
                    <div id="introduction-wrapper">
                        <div id="introduction-header-container" className="intro-column">
                            <img id="me-img" src={image} alt="" />

                            <h1>Abdifatah <span id="surname-word">Jama</span></h1>
                            <h6 style={{textAlign:"center",color:"grey"}}>Junior Software Engineer </h6>
                        </div>


                        <div id="introduction-info" className="intro-column">
                            <div id="about-me-container">
                                    <h3 style={{color:"grey",margin:"1rem 0"}}>About Me</h3>

                                    <p id="about-me-text">I am ChemEng Graduate looking for <span>junior software engineering roles</span></p>

                                    <div id="about-list-container">
                                        <p id="place" className="about-item">London, UK</p>
                                        <p id="age" className="about-item">22 Years Old</p>
                                        <p id="nationality" className="about-item">British Citizen</p>
                                    </div>
                                </div>

                                <div id="action-btn-container">
                                    <div id="action-btn1" className="action-btn">
                                        <a href="https://www.github.com/AF-Jama" target="_blank"><img id="github-logo-action" src={githubLogo} alt=""/></a>
                                    </div>

                                    <div id="action-btn2" className="action-btn">
                                        <button onClick={()=>document.getElementById('contact-container').scrollIntoView()}>Contact Me</button>
                                    </div>
                                </div>
                        </div>

                        {/* <div className="intro-column">1</div> */}

                    </div>

                    <div id="skills-container">
                        <div id="current-skills-column" className="skills-column">
                            <h1>Skills</h1>

                            <div id="skills-cards-container">
                                <SkillCard image={HtmlLogo} skillName="HTML"/>
                                <SkillCard image={cssLogo} skillName="CSS"/>
                                <SkillCard image={reactLogo} skillName="React"/>
                                <SkillCard image={javascriptLogo} skillName="Javascript"/>
                                <SkillCard image={mysqlLogo} skillName="MySQL"/>
                                <SkillCard image={pyLogo} skillName="Python"/>
                                <SkillCard image={CLogo} skillName="C"/>
                            </div>
                        </div>

                        <div id="seperator-container"></div>

                        <div id="future-skills-column" className="skills-column">
                            <h1>Future Technologies I will Learn</h1>

                            <div id="future-technologies-container">
                                <SkillCard image={graphqlLogo} skillName="GraphQL"/>
                                <SkillCard image={redisLogo} skillName="Redis"/>
                                <SkillCard image={tailwindLogo} skillName="Tailwind"/>
                            </div>

                        </div>
                    </div>

                    <div id="project-container">
                        <h1>My Projects</h1>

                        <div id="project-cards-container">
                            
                        </div>
                    </div>

                    <div id="contact-container">
                        <div className="contact-row" id="form-container">
                            <h3 style={{textAlign:"center"}}>Contact Me</h3>

                            <MessageForm/>
                        </div>
                    </div>
                    
                </div>
            </main>

            {/* <Footer/> */}
        </div>
    )
}


export default Home;