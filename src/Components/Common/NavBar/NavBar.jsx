import React,{useState,useEffect,useContext,useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faXmark,faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import Resume from '../../../assets/RESUME.pdf'
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
        <nav id="nav-bar-outer-container" className={props.visibility?"expand":"hide"}>
            <div id="nav-link-container" ref={navLinkContainerRef}>
                <a href="/" className="nav-link">Home</a>
                <a href="/project" className="nav-link">Projects</a>
                <a href={Resume} download='resume.pdf' className='nav-link' target='_blank'>Resume</a>
            </div>

            <div id="button-container">
                <button>Github</button>
            </div>


        </nav>
    )
}


export default NavBar;
