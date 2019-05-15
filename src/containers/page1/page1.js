import React, { Component } from 'react';
import Skills from '../../components/skills/skills';
import classes from './page1.css'

class Page1 extends Component {
  state = {
    skills:{
      programming:['Python','Java','C++','C#',"Tensorflow"],
      web:["JS","CSS","Bootstrap",'React JS','Node JS',"Express JS",'Django'],
      ide:[ 'Spyder', 'Eclipse', 'Tableau', 'Visual Code',' Visual Studio',' Post man', 'SQL server'],
      databases:['Microsoft SQL Server',' Mongo DB']
    },
    skills2:[
      {
      name:'PROGRAMMING',
      elements:['Python','Java','C++','C#',"Tensorflow"]
      },
      {
        name:'WEB',
        elements:["JS","Bootstrap",'React JS','Node JS',"Express JS",'Django']
      },
      {
        name:'IDE',
        elements:[ 'Spyder', 'Eclipse', 'Tableau', 'Visual Code','Visual Studio']
      },
      {
        name:'DATABASES',
        elements:['Transact SQL','Mongo DB']
      },
  ]

 }

    render() {
      const skillset= this.state.skills2.map(type=>{
        console.log(type)
        return(<Skills stytle={{padding:'100px 100px'}}key={type.name} skills={type.elements} name={type.name}/>)
      })
      return (
        <div className={classes.skills}>
          {skillset}
        </div>
      );
    }
  }

export default Page1;