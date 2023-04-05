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
import ProjectCard from "../../Components/ProjectCard";
import projectFile from '../../projects.json';
import project01 from '../../assets/project01.png'; 
import project02 from '../../assets/project02.jpeg'; 
import project03 from '../../assets/project03.jpeg'; 
import project04 from '../../assets/project04.jpeg'; 
import project05 from '../../assets/project05.png'; 
import project06 from '../../assets/lock.svg'; 
import project07 from '../../assets/youtubeIcon.svg';
import project08 from '../../assets/weatherIcon.svg';
import project09 from '../../assets/world.svg';
import project10 from '../../assets/wire.svg';
import arrowUpSvg from '../../assets/up-arrow.svg';
import openLink from '../../assets/open-link.svg';
import githubLink from '../../assets/github-link.svg';
import './Home.css';


const Home = (props)=>{
    console.log(projectFile)



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

                                    <div id="action-btn3" className="action-btn">
                                        <button onClick={()=>document.getElementById("project-container").scrollIntoView()}>Projects</button>
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
                            
                            <ProjectCard
                                projectImage={project02} 
                                header = "Discord Music Bot"
                                 description="Discord Music Bot, with multiple commands to add,remove and play songs in a queue."
                                 liveLink="#"
                                 githubLink="https://github.com/AF-Jama/news_and_voice_discord_bot" 
                            />

                            <ProjectCard
                                projectImage={project01} 
                                header = "Covid19 Data Application"
                                 description="Covid 19 web application which displays UK covid data"
                                 liveLink="#"
                                 githubLink="https://github.com/AF-Jama/news_and_voice_discord_bot"
                            />

                            <ProjectCard
                                projectImage={project03} 
                                header = "C BlackJack"
                                 description="BlackJack Game written in C."
                                 liveLink="#"
                                 githubLink="https://github.com/AF-Jama/news_and_voice_discord_bot"
                            />

                            <ProjectCard
                                projectImage={project04} 
                                header = "Spotify Stat Tracker"
                                 description="Web Application which exposess Spotify API to display user stats"
                                 liveLink="#"
                                 githubLink="https://github.com/AF-Jama/news_and_voice_discord_bot"
                            />

                            <ProjectCard
                                projectImage={project05} 
                                header = "Graphical PI estimation"
                                 description="Estimated PI using monte carlo method."
                                 liveLink="#"
                                 githubLink="https://github.com/AF-Jama/news_and_voice_discord_bot"
                            />

                            <ProjectCard
                                projectImage={project06} 
                                header = "Password Manager"
                                 description="Password Manager application allowing users to login/create an account and store encrypted versions of their passwords"
                                 liveLink="#"
                                 githubLink="https://github.com/AF-Jama/news_and_voice_discord_bot"
                            />

                            <ProjectCard
                                projectImage={project07} 
                                header = "Youtube Downloader"
                                 description="Youtube audio and video downloader"
                                 liveLink="#"
                                 githubLink="https://github.com/AF-Jama/news_and_voice_discord_bot"
                            />

                            <ProjectCard
                                projectImage={project08} 
                                header = "Weather Tracker Application"
                                 description="Weather Tracker Application using the Open Weather API."
                                 liveLink="#"
                                 githubLink="https://github.com/AF-Jama/news_and_voice_discord_bot"
                            />

                            <ProjectCard
                                projectImage={project09} 
                                header = "Country Data Application"
                                 description="Country Data application which simply displays country data and allows user to search for a specific country."
                                 liveLink="#"
                                 githubLink="https://github.com/AF-Jama/news_and_voice_discord_bot"
                            />

                            <ProjectCard
                                projectImage={project10} 
                                header = "C packet sniffer"
                                 description="C Packet sniffer using TCP-Dump package. Not completed"
                                 liveLink="#"
                                 githubLink="https://github.com/AF-Jama/news_and_voice_discord_bot"
                            />


                        </div>
                    </div>

                    <div id="contact-container">
                        <div className="contact-row" id="form-container">
                            <h3 style={{textAlign:"center"}}>Contact Me</h3>

                            <MessageForm/>
                        </div>
                    </div>
                    
                </div>
                <a href="#" className="up-arrow" onClick={()=>document.getElementById('').scrollIntoView()}><img src={arrowUpSvg} alt="" /></a>
            </main>

            {/* <Footer/> */}
        </div>
    )
}


export default Home;