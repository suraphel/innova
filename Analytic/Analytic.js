import React, {Component} from 'react';
import '../App.css';

class Analytic extends Component {
    render() {
        return (
            <div className = "menubar">
                <p style = {{fontSize :"0.7em"}}>{this.props.name}</p>   // where is this used?
                <p style  = {{color: "green",  fontWeight: "bold"}}>{this.props.data}</p>                       
            </div>
        );
    }
}

export default Analytic; 