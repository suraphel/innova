import React from 'react'; 

const style = {           
  float:"left",
  paddingRight:"35px",      
  color: "rgb(105, 102, 102)",
  border: 'none', 
  fontWeight: "normal", 
  fontFamily: "sans-serif",    
  fontSize:"1.2em", 
  hover : "cursor",

}

const Links = (props) => {
  return(
    <div style = {style}>    
    <p onClick = {props.clicked}> {props.name} </p>
    </div> 
  );
}
export default Links;


//The frame work of all links!!
//shall handle all styles and functions of all buttons. 

