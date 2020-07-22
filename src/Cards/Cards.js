import React, { Component } from 'react';
import './card-style.css'
import {Link} from 'react-router-dom'

class Cards extends Component {

    // goToLink = (e) => {
    //     // debugger
         
    // }

    render() {
        return(
            <div className="card text-center shadow">
                <div className="overflow">
                    <img src={this.props.imgsrc} alt="image 1" className="card-img-top" />
                </div>
                <div className="card-body text-dark">
                     <h4 className="card-title">{this.props.title}</h4>
                    <p className="card-text text-secondary"> some texts</p>
        <button className="btn btn-outline-success">{this.props.button}</button>
                </div>
            </div>
        )
    }
    
}

export default Cards