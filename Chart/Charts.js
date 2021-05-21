import React, {Component} from 'react';
import '../App.css';

// const { render } = require("@testing-library/react")

class Charts extends Component{ 
    render(){  
       const style = {         
            border: "1px solid grey",
             padding: '20px',
             width: "60%",
             height: "190px",            
             backgroundColor: "rgb(15,15,15,15)",
             color: "white",
             textAlign : "center",
             borderRadius: "5px",                     
        };

        return (           
            <div>               
                <p  style = {style}>               
                     {this.props.chart} </p>                
            </div>
        );
    }
}
export default Charts; 