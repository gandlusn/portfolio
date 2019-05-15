import React from 'react';
import * as classes from './Project.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import image from '../../../github1600.png';
const Project = (props)=>{
    let k = <div></div>
    let p = <div></div>
    if(props.github)
    {
        k =  <a style={{textDecoration:"None"}} href={props.github} target="_blank"><img src={image}></img></a>
    }
    if(props.website)
    {
        p =  <a style={{textDecoration:"None"}} href={props.website} target="_blank"><img src=" https://s3.us-east-2.amazonaws.com/companynames/Beaconsfieldwebsitedesign.png "></img></a>
    }
    return(
        <div className = {classes.Project}>
            <div className={classes.name}>{props.name}</div>    
            <hr style={{borderColor:'black'}}/>          
            <div className={classes.description}>{props.description}</div>
            {k}
            {p}
        </div>
    )
}
export default Project
