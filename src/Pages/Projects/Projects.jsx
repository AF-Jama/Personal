import React,{useState,useEffect,useContext} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faArrowUpRightFromSquare,faDatabase,faCode,faC } from "@fortawesome/free-solid-svg-icons";
import { faGithub,faPython,faReact,faJs,faNodeJs,faHtml5,faCss3 } from "@fortawesome/free-brands-svg-icons";
import image from '../../assets/project01.png'; 
import project02 from '../../assets/project02.jpeg'; 
import project03 from '../../assets/project03.jpeg'; 
import project04 from '../../assets/project04.jpeg'; 
import project05 from '../../assets/project05.png'; 
import project06 from '../../assets/project06.jpeg'; 
import Header from "../../Components/Common/Header";
import Footer from "../../Components/Common/Footer";
import './Projects.css';


const Projects = (props)=>{



    return (
        <div id="projects-container">
            <Header/>

            <div id="main-content-container">
                <div id="technologies-container">
                    <div id="inner-container-wrapper">
                        <div id="text-container">
                            <h4 id="text-heading"><span>Technologies</span><br /> that I have used</h4>
                            <p>I have used various technologies over the past year and half</p>
                        </div>

                        <div id="icon-container">
                            <FontAwesomeIcon className="icon" icon={faPython} size='3x' />
                            <FontAwesomeIcon className="icon" icon={faReact} size='3x'/>
                            <FontAwesomeIcon className="icon" icon={faJs} size='3x'/>
                            <FontAwesomeIcon className="icon" icon={faNodeJs} size='3x'/>
                            <FontAwesomeIcon className="icon" icon={faHtml5} size='3x'/>
                            <FontAwesomeIcon className="icon" icon={faCss3} size='3x'/>
                            <FontAwesomeIcon className="icon" icon={faC} size='3x'/>
                            <FontAwesomeIcon className="icon" icon={faDatabase} size='3x'/>                            
                        </div>      
                    </div>
                </div>

                <div id="project-card-container">
                    <h2 style={{textAlign:"center",margin:"0.5rem 0 1rem 0",color:"white"}}>Projects</h2>  
                    <div id="inner-proj-container">  
                        <div id="card-1" className="card">
                            <img src={image} alt=""/>

                            <div className="description-and-icon-container">
                                <h4>Covid Web application</h4>
                                <div id="text">
                                    <p>Created a Covid Web application that displays UK coronavirus data (such as deaths,cases and vaccination dosage statistics) </p>
                                </div>

                                <h4 id="technologies-header" style={{color:"black",marginBottom:"1rem"}}>Technologies</h4>

                                <div id="card-icon-container">
                                    <FontAwesomeIcon className="icon" icon={faNodeJs} size='2x' />
                                    <FontAwesomeIcon className="icon" icon={faReact} size='2x'/>
                                </div>
                            </div>

                            <div className="action-containers">
                                <a href="https://github.com/AF-Jama/Covid19TrackerApp" target='_blank'><FontAwesomeIcon id="git-icon" icon={faGithub}/></a>
                                <a href="https://covid-app.herokuapp.com/" target='_blank'><FontAwesomeIcon id="arrow-sqaure-icon" icon={faArrowUpRightFromSquare}/></a>
                            </div>

                        </div>

                        <div id="card-1" className="card">
                            <img src={project02} alt=""/>

                            <div className="description-and-icon-container">
                                <h4>Discord Music Bot</h4>
                                <div id="text">
                                    <p>Created a Discord bot, that is able to play music by using custom commands, music player bot also has queue functionality through the use of the set data structure, the ability to pause,resume and skip songs. Uses Youtube API to retrive music files based on user queury </p>
                                </div>

                                <h4 id="technologies-header" style={{color:"black",marginBottom:"1rem"}}>Technologies</h4>

                                <div id="card-icon-container">
                                    <FontAwesomeIcon className="icon" icon={faNodeJs} size='2x' />
                                </div>
                            </div>

                            <div className="action-containers">
                                <a href="https://github.com/AF-Jama/news_and_voice_discord_bot" target='_blank'><FontAwesomeIcon id="git-icon" icon={faGithub}/></a>
                                <a href="#"><FontAwesomeIcon id="arrow-sqaure-icon" icon={faArrowUpRightFromSquare}/></a>
                            </div>

                        </div>

                        <div id="card-1" className="card">
                            <img src={project03} alt=""/>

                            <div className="description-and-icon-container">
                                <h4>BlackJack in C</h4>
                                <div id="text">
                                    <p>Implemented BlackJack in C, worked with pointers and data structures such as structs to represent players and deck of cards</p>
                                </div>

                                <h4 id="technologies-header" style={{color:"black",marginBottom:"1rem"}}>Technologies</h4>

                                <div id="card-icon-container">
                                    <FontAwesomeIcon className="icon" icon={faC} size='2x' />
                                </div>
                            </div>

                            <div className="action-containers">
                                <a href="https://github.com/AF-Jama/BlackJack" target='_blank'><FontAwesomeIcon id="git-icon" icon={faGithub}/></a>
                                <a href="#"><FontAwesomeIcon id="arrow-sqaure-icon" icon={faArrowUpRightFromSquare}/></a>
                            </div>

                        </div>


                        <div id="card-1" className="card">
                            <img src={project04} alt=""/>

                            <div className="description-and-icon-container">
                                <h4>Spotify Web Application</h4>
                                <div id="text">
                                    <p>Leveraged the Spotify API to create web application allowing users to login and look at their stats ie: most listened song on account, application also allows user to search up artist which returns data</p>
                                </div>

                                <h4 id="technologies-header" style={{color:"black",marginBottom:"1rem"}}>Technologies</h4>

                                <div id="card-icon-container">
                                    <FontAwesomeIcon className="icon" icon={faC} size='2x' />
                                </div>
                            </div>

                            <div className="action-containers">
                                <a href="https://github.com/AF-Jama/BlackJack" target='_blank'><FontAwesomeIcon id="git-icon" icon={faGithub}/></a>
                                <a href="#"><FontAwesomeIcon id="arrow-sqaure-icon" icon={faArrowUpRightFromSquare}/></a>
                            </div>

                        </div>

                        <div id="card-1" className="card">
                            <img src={project05} alt=""/>

                            <div className="description-and-icon-container">
                                <h4>Pi Monte Carlo Estimation</h4>
                                <div id="text">
                                    <p>Estimated Pi using the monte carlo method. This is project was first assigned during university in matlab but I decided to reimplement it in Python</p>
                                </div>

                                <h4 id="technologies-header" style={{color:"black",marginBottom:"1rem"}}>Technologies</h4>

                                <div id="card-icon-container">
                                    <FontAwesomeIcon className="icon" icon={faPython} size='2x' />
                                </div>
                            </div>

                            <div className="action-containers">
                                <a href="https://github.com/AF-Jama/monte-carlo" target='_blank'><FontAwesomeIcon id="git-icon" icon={faGithub}/></a>
                                <a href="#"><FontAwesomeIcon id="arrow-sqaure-icon" icon={faArrowUpRightFromSquare}/></a>
                            </div>

                        </div>

                        <div id="card-1" className="card">
                            <img src={project06} alt=""/>

                            <div className="description-and-icon-container">
                                <h4>Password Manager</h4>
                                <div id="text">
                                    <p>Currently working on a password Manager allowing users to store their passwords encrypted. Users passwords are encrypted and decrypted via their master password Based of lastpass zero knowledge system</p>
                                </div>

                                <h4 id="technologies-header" style={{color:"black",marginBottom:"1rem"}}>Technologies</h4>

                                <div id="card-icon-container">
                                    <FontAwesomeIcon className="icon" icon={faNodeJs} size='2x' />
                                    <FontAwesomeIcon className="icon" icon={faReact} size='2x' />
                                    <FontAwesomeIcon className="icon" icon={faDatabase} size='2x' />
                                </div>
                            </div>

                            <div className="action-containers">
                                <a href="https://github.com/AF-Jama/monte-carlo" target='_blank'><FontAwesomeIcon id="git-icon" icon={faGithub}/></a>
                                <a href="#"><FontAwesomeIcon id="arrow-sqaure-icon" icon={faArrowUpRightFromSquare}/></a>
                            </div>

                        </div>


                    </div>
                </div>
            </div>

            <Footer/>

        </div>
    )
}


export default Projects;