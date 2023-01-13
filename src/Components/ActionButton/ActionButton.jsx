import React,{useState,useEffect,useContext} from "react";
import './ActionButton.css';


const ActionButton = (props)=>{


    return (
        <button type="button" id="action-btn" className="btn btn-outline-primary" style={props.style} onClick={props.onClick}>{props.text}</button>
    )
}



export default ActionButton;