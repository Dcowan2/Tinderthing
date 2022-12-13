import React from 'react';
import './Header.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { IconButton } from '@material-ui/core';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import logo from './logo.png';


function Header() {
    return (
        <div className ="Header">
            <IconButton>
            <AccountCircleIcon fontSize ="large" className="header_icon" />
            </IconButton>

            <img className = "Header_logo" 
            src ={logo} alt = "logo"
            />
        <IconButton>
        <QuestionAnswerIcon fontSize = "large" className = "header_icon"/>
        </IconButton>
               
            
        </div>
    );
}


export default Header
