import React,{Component} from 'react';
import {Panel, FormGroup, FormControl, Button, ControlLabel, Row} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Experiance from './Experience/Experiance';

class Experiances extends Component
{    
    render()
    {
        const experiances = this.props.experiances.map(experiance=>{
            return(
            <div style={{padding:'10px'}}>
            <Experiance experiance={experiance}/>
            </div>
            )
        })
        return(     
            <div style={{margin:"center"}}>
                {experiances}
            </div>
        )

    }


}
export default Experiances;