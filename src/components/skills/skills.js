import React from 'react';
import Skill from './skill/skill'
import classes from './skills.css'
import { TabContainer } from 'react-bootstrap';



const Skills = (props)=>{

    const skillings = props.skills.map(skill=>{
        return(<Skill key={skill} name={skill}></Skill>)
    })
    console.log(props.skills)
    return (
        <div className={classes.border}>
            <div>
            <h3 style={{padding:'0px 0px 20px', fontSize:'30px', fontWeight:'bold'}}>{props.name}</h3>
            </div>
            <div className={classes.skills}>
                {skillings}
            </div>        
        </div>
 
    );
}

export default Skills;

