import React from 'react';
import classes from './skill.css'
import {Row} from 'react-bootstrap';
const skill = (props)=>{
    let url = "https://s3.us-east-2.amazonaws.com/companynames/"+props.name+'.png';
    if(props.name === "C++")
    {
     url =  "https://s3.us-east-2.amazonaws.com/companynames/C%2B%2B.png"
    }
    if(props.name === "C#")
    {
     url =  "https://s3.us-east-2.amazonaws.com/companynames/C%23.jpg"
    }
    if(props.name === "Bootstrap")
    {
     url =  "https://s3.us-east-2.amazonaws.com/companynames/Bootstrap.jpg"
    }
 
    if(props.name === "Transact SQL")
    {
    url = "https://s3.us-east-2.amazonaws.com/companynames/Transact+SQl.png"
    }
    if(props.name === "Mongo DB")
    {
    url = "https://s3.us-east-2.amazonaws.com/companynames/Mongo+DB.jpg"
    }
    if(props.name === "Visual Studio")
    {
     url =  "https://s3.us-east-2.amazonaws.com/companynames/Visual+Studio.png"
    }

    return(
    <div className={classes.skill1} style={{fontSize:'20px',}}>
        {/* <Row style={{padding:'0px 40% 10px', width:'600px'}}>{props.name}</Row> */}
        <p><img src={url} style={{width:'30px',height:'30px'}}></img>  {props.name}</p>
        <div style={{margin:'auto',alignContent:'center',padding:'0px 130px '}}></div>
    </div>
    )
}

export default skill;







