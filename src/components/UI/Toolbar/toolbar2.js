import React from 'react';
import * as classes from './toolbar12.css';
import {NavLink} from 'react-router-dom';


export default class Example extends React.Component {

  render() {
    return (
    <div className= {classes.nav}>
      <div className={classes.logo}>  <NavLink to='/home' activeClassName={classes.titleActive} style={{fontSize:"40px",textDecoration:"None"}}>PORTFOLIO</NavLink></div>
      <div className={classes.items}>
          <div className={classes.navitems}><NavLink to='/skills' exact activeClassName={classes.navActive}style={{fontSize:'27px'}} className = {classes.navElement}>SKILLS</NavLink></div>
          <div className={classes.navitems}><NavLink to='/Projects' activeClassName={classes.navActive}style={{fontSize:'27px'}}  className = {classes.navElement}>PROJECTS</NavLink></div>
          <div className={classes.navitems}><NavLink to='/exp' activeClassName={classes.navActive}style={{fontSize:'27px'}}  className = {classes.navElement}>EXPERIENCE</NavLink></div>
          <div className={classes.navitems} style={{color:"red"}}><a  href='https://sites.google.com/view/sai-kishan-resume/home'style={{fontSize:'27px'}}  className = {classes.navElement}>RESUME</a></div>
      </div>
    
  </div>
    );
  }
}