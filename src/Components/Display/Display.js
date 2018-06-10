import React, { Component } from 'react';
import images from '../../images/bitcoin_PNG48.png'
import './Display.css';
class Display extends Component {

    
    render() {
        const provider = this.props.data;
        
        return (
         
            <div className="info_box">
            <span>provider-{provider.id}: </span>
            <span>
                <img className="logo" src={require('../../images/bitcoin_PNG48.png')} />
            </span>
            <span>${provider.price.toFixed(2)}</span>
            <span><i className="material-icons">arrow_downward</i> -0.75%</span>
            </div>
                
          
        );
    }
}

export default Display;