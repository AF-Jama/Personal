import React,{useState,useEffect,useContext} from "react";
import NavBar from "../NavBar";
import './Header.css';


const Header = (props)=>{



    return (
        <header id="header-outer-container">
            <div id="header-inner-container">
                <div id="title-container">
                    <h4>Abdifatah Jama</h4>
                </div>

                <NavBar/>

            </div>
        </header>
    )
}


export default Header;