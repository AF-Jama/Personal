import React,{useState,useEffect,useContext} from "react";
import { useForm } from "react-hook-form";
import './MessageForm.css';


const MessageForm = (props)=>{
    const { register,formState:{errors},handleSubmit } = useForm();
    const [sentStatus,setSentStatus] = useState(false); // sets sent status


    return (
        <form action="https://formspree.io/f/xrgvgwlg" method="POST">
            <div className="input-group">
                <input id="sender-name" type="email" placeholder="Your Email" {...register('senderName',{
                    required:"Your name is required here",

                })} />
                <p>{errors.senderName?.message?errors.senderName?.message:""}</p>
            </div>

            <div className="input-group">
                <textarea id="message-text-area" name="message" {...register('message',{})}></textarea>
            </div>

            <button id="submit-btn" className="btn btn-primary" type="submit" value="Submit">Submit</button>
        </form>
    )
}


export default MessageForm;