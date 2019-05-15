import React,{Component} from 'react';
import Project from './Project/project';
import * as classes from './Projects.css';
import {Panel, FormGroup, FormControl, Button, ControlLabel, Row} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Example from '../transitions';


class Projects extends Component
{    
    render()
    {
        
        const projects = this.props.projects.map(project=>{
            return(
                <div style={{padding:"10px"}}>
                    <Project
                        name = {project.name}
                        description={project.description}
                        github ={project.github}
                        website={project.website}
                    />
                </div>
            )
        })


        return(
            <div className={classes.Projects}>
                {projects}
            </div>
        )

    }


}
export default Projects;