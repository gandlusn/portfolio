import React, { Component } from 'react';
import * as classes from './Toolbar.css';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Dropdown1 extends Component {
  
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  

  render() {
    const inputElement = (
      
    <div><select className={classes.Dropdown}onChange = {this.props.changed} value={this.props.value}>
    {this.props.options.map(option=>{
    return(<option key={option.name} 
    value={option.name}>{option.name}</option>)})}
     </select></div>) 

     
    return (
  <div className={classes.bgc}>
    <nav className="navbar navbar-expand-lg navbar-light" >
      <h1 className="navbar-brand" style={{fontSize:'50px',margin:'0px 0px 60px 0px'}}>
      <div className={classes.OrderButton}>
        <NavLink to='/home' activeClassName={classes.titleActive} style={{textDecoration:"None"}}>Resume</NavLink>
      </div>
      </h1>
   
      <div style={{margin:"0px auto"}}  className="nav justify-content-center">
      <div style={{marginLeft:'-50px'}}>
      <ul style={{justifyContent:'spaceinbetween'}}>
     
     
      
      <li >
         <NavLink to='/skills' exact activeClassName={classes.navActive}style={{fontSize:'27px',margin:'0px 0px 70px 0px'}} className = {classes.navElement}>SKILLS</NavLink>
      </li> 
      <li >
        <NavLink to='/Projects' activeClassName={classes.navActive}style={{fontSize:'27px',padding:'0px 20px',margin:'0px 0px 40px 0px'}}  className = {classes.navElement}>PROJECTS</NavLink>
      </li>
      <li >
        <NavLink to='/exp' activeClassName={classes.navActive}style={{fontSize:'27px',padding:'0px 20px',margin:'0px 0px 40px 0px'}}  className = {classes.navElement}>EXPERIANCE</NavLink>
       
      </li>

      </ul>
      </div>
  </div>
        {/* {inputElement} */}


  </nav>

</div>
    );
  }
}


export default Dropdown1;