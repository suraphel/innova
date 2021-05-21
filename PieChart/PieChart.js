import React, {Component} from 'react';
import '../App.css';

// const { render } = require("@testing-library/react")


class PieChart extends Component{ 
    render(){  
       const style = {           
             border : "1px solid blue" ,
             padding: '10px',
            //  width: "300px",
            //  height: "100px",
            //  padding: "100px 0 0 10px" ,
             //float: "right",
            // position: "relative",
             backgroundColor: "rgb(19, 18, 18, 0,9)",
            //  margin: "0",                               
        };

        return (           
            <div>
                {/* style = {style} */}
                <p  style = {style}>  </p>
                <p>{this.props.chart1}Indiviuall</p>
                <p>{this.props.chart2}compnay</p>
            </div>
        );
    }
}

export default PieChart; 