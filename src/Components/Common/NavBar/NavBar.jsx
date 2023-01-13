import React,{useState,useEffect,useContext,useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faXmark,faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import './NavBar.css';


const NavBar = (props)=>{
    const [visibility,setVisibility] = useState(false); // sets visibility state 

    const navLinkContainerRef = useRef();

    const onClick = (event)=>{
        event.preventDefault();

        if(visibility){
            // triggered if block evaluates to true
            navLinkContainerRef.current.style.maxHeight='0px';
            setVisibility(!visibility);
            return;
        }

        navLinkContainerRef.current.style.maxHeight='500px';
        setVisibility(!visibility);
        return;
    }


    return(
        <nav id="nav-bar-outer-container">
            <div id="nav-link-container" ref={navLinkContainerRef}>
                <a href="/" className="nav-link">Home</a>
                <a href="/project" className="nav-link">Projects</a>
                <a href="../../../assets/Resume.pdf" download='resume.pdf' className='nav-link'>Resume</a>
                {/* <a href="#" className="nav-link">Contact</a> */}
            </div>

            <div id="burger-btn-container">
                {visibility?<FontAwesomeIcon  id="burgerExitIcon" size="2x" height="40px" width="40px" icon={faXmark} onClick={onClick}/>:<FontAwesomeIcon id="burgerExitIcon" size="2x" height="40px" width="40px" icon={faBarsStaggered} onClick={onClick} beat/>}
            </div>


        </nav>
    )
}


export default NavBar;
