import React,{useState,useEffect,useContext} from "react";
import NavBar from "../NavBar";
import './Header.css';


const Header = (props)=>{
    const [visibility,setVisibility] = useState(false);

    console.log(visibility);

    return (
        <header id="header-outer-container">
            <div id="header-inner-container">
                <div id="title-container">
                    <h4>Abdifatah Jama</h4>
                </div>

                <NavBar visibility={visibility}/>

                <div id="b-btn-container" className={visibility?"change":"ontainer"} onClick={()=>setVisibility(!visibility)}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>

            </div>
        </header>
    )
}


export default Header;