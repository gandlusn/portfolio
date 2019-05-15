import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Panel, FormGroup, FormControl, Button, ControlLabel, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardTitle, CardText, Col,Container} from 'reactstrap';
import * as classes from "./home.css";
import ReadMore from '../../components/ReadMore';
class Home extends Component {

    state={
        INTERESTS:[{"DATA SCIENCE & ML":400},{"Front End WEB DEVELOPMENT": 170},{"Back End WEB DEVELOPMENT":150}],
        introduction:   `Enthusiastic Engineer with Knowledge and Professional Experiance on
                        "Multiple Fronts". Willing to take up an oppurtunity to work on 
                        Exciting projects with new Technologies and build a strong & unique skills set. 
                        Even though I am a fledgling to this field, I will make it up for that with my
                        enthusiasm and strong work Ethic. a good team worker, with a courage to take up
                        Leadership stand when needed`,
        CARRER:`Passionate Developer with experiance in multiple internships. Worked on company's SAS software with Django, JS and Python 
        & assited in building company's regression Data Model. A AWS developer associate with knowlege in various AWS services and how to integrate them.
        Finally a Developer with a Keen interest and Good knowledge in JS and Core JAVA`,
        Quote: `It always seems impossible until it's done`,
        readmore: false,
        }
    
        throttledHandleWindowResize = () =>
        {
            this.setState({ readmore: window.innerWidth < 700 });
        }
        
          componentDidMount() 
          {
            window.addEventListener('resize', this.throttledHandleWindowResize);
          }
        
          componentWillUnmount() {
            window.removeEventListener('resize', this.throttledHandleWindowResize);
          }
   
    render() {
        let count=0
        if(this.state.readmore)
        {
            console.log("hi this is recongnised in parent")
        }
      return (
      <div className={classes.row1}>
            <div className={classes.elements}>
                <img className={classes.img}src="https://s3.us-east-2.amazonaws.com/companynames/0.jpg"></img>
            </div>      
            <div className={classes.elements}>
                     <h1 style={{color:'orange'}}>
                        INTRODUCTION
                        </h1>
                    <p style={{fontSize:'20px'}} className={classes.para}>
                    <ReadMore para = {this.state.introduction} readMore = {this.state.readmore}></ReadMore>
                    </p>
                    
                    <h1 style={{color:'orange'}}>
                        PROFFESIONAL SUMMARY
                    </h1>
                    <p style={{fontSize:'20px'}} className={classes.para}>
                    {this.state.CARRER}
                    </p>
                    <h1 className={classes.quote}>
                    {this.state.Quote}
                
                    </h1>
                    <p style={{marginLeft:"50%",color:'red',fontWeight:'bold'}}>- Nelson Madela</p>
            </div>
      </div>
      
      );
    }
  }

export default Home;