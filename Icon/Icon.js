import React, {Component} from 'react';
import { BsBarChart } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/bs";
// import { VscAccount } from "react-icons/si";
// import { IconName } from "react-icons/si";


import '../App.css';

const Icon = (props) =>{
    {  
       const style = {           
           margin:"36px auto",
             border : "1px solid grey" ,
             padding: '5px',
             paddingBottom: "10px",
             paddingRight: "15px",
             width: "15px",
             height: "15px",
            position: "relative",
            backgroundColor: "rgb(19, 18, 18, 0,9)",                            
        };

        return (           
            <div style = {style}> 
                <p onClick = {props.clicked}>{props.icon}</p>           
            </div>
        );
    }
}

export default Icon; 