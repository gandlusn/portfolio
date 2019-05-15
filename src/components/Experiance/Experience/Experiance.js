import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Panel, FormGroup, FormControl, Button, ControlLabel, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardTitle, CardText, Col} from 'reactstrap';
import * as classes from './Experiance.css';
const Example = (props) => {
    const description = <ul> {props.experiance.description.map(des=>{
        return <li>{des}</li>
    })} 
    </ul>

  return (
    <div className={classes.hovered}>
        <Row  >
          <Col sm="12" md={{ size: 8, offset: 2 }}>
          <Card body inverse style={{backgroundColor:'rgb(194, 191, 191)',borderRadius:'20px'}} className={classes.hovered}>
            <CardTitle style={{color:'black', borderBottom:'1px solid',borderColor:'black'}}>
            <div style={{fontSize:"25px",color:'Red'}}>{props.experiance.title}</div>
            <p style={{paddingBottom:'10px'}}>
                            <span style={{float: "left",padding:"0px 15px"}}>
                                {props.experiance.start}
                            </span>
                            <span style={{float:'right'}}>
                               {props.experiance.end}
                            </span>
            </p>
            </CardTitle>

            <CardText style={{color:'black',minHeight:"40%",margin:'auto',}} >
            {
                description
            }
            </CardText>
           
            <a style={{textDecoration:"None"}} href={props.experiance.link} target="_blank"><img style={{width:'10%',height:'100%'}} src={props.experiance.image}></img></a>
           </Card>
          </Col>
        </Row>
      
    </div>
  );
};

export default Example;