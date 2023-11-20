import React, {Component} from "react";
//import {connect} from 'react-redux';

class Newcomp extends Component {
    constructor(props){
        super(props)

        this.state= {
            message: "subsribe to me"
        };
    }

    styles = {
        fontStyle:"Italic",
        color: "purple",

    };

    ButtonChange = () => {
        this.setState({
            message: "Thank you for susbsribing me"
        })
    }

    render(){
        return(
            <div className='App'>
                <h3 style={this.styles}>{this.state.message} </h3>
                <button onClick={this.ButtonChange}> Subscribe</button>
            </div>
        )
    }
}

export default NewComp;