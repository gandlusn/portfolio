import React, { Component } from 'react';
import Projects from '../../components/Projects/Projects';
import Experiaces from '../../components/Experiance/Experiances';

class Page3 extends Component{
    state={
        experiances:[
            {
                title:'MAK Technologies',
                start:'Feb 2019',
                end:'May 2019',
                description:[
                    '•	Engineered new API end points to Query and Filter Data by implementing reusable components.',
                    '• Optimized older API’s with minimized response time by 0.3 sec and messages.',
                    `• Deployed the application on to the EBS instance along with configuring Autoscaling groups
                     triggers that can maintain the performance of the application during high traffic.`,
                    '• Created AI Bots using Automation Anywhere to parse Images, PDF’s, CSV’s and XML format.',
                    '• Loaded the data into the My SQL Server Database and Transferred Data in to the RDS instance.',
                    '• Enabled authentication and role-based access by creating custom middle ware functions and JWT tokens.',
                    '• Created S3 instance to store logs of the instance and monitoring Its performance using Cloud Watch.'
                ],
                link:'http://maktechnologiesllc.com/',
                
                image:'https://s3.us-east-2.amazonaws.com/companynames/mak.png'
            },
            {
                title:'Vndly',
                start:'Jun 2018',
                end:'DEC 2018',
                description:[
                    '•	Gained experience in working Agile SDLC, with round the clock deployment. ',
                    '•	Architected Django Rest API’s Endpoint to query data from Postgres SQL and render on to the UI.',
                    `•	Developed single paged responsive UI components with React JS and Redux with excellent state management.`,
                    '•	Created Automated unit and integration test cases using Selenium and Unittest, Jest libraries in python and JS.',
                    '•	Deployed Django application to AWS EC2 along with using GitHub.',
                    '•	Parsed XML, CSV Documents using python scripts and loaded data into Database.',
                    '•	Dealt with AWS cloud watch and cloud trail logs to debug the application.',
                    '•	Worked on S3, API Gateway and Lambda functions to create a pipeline to upload and download files from AWS',
                ],
                link:'https://vndly.com/',
                
                image:'https://s3.us-east-2.amazonaws.com/companynames/final_logo.png'
            },
              
                {
                    title:'CSSI',
                    start:'Aug 2017',
                    end:'Oct 2017',
                    description:['•	Developed on multiple UI pages with Angular 4.',
                    '• Improved the UI design to fill out applications details by 25% by using responsive features of Angular.',
                    '• Modified multiple tables and queries using Mongoose library and decrease the time to retrieve by 10%..',
                    '• Planned and implemented strong data validation pipeline using Joi library in Node Js, and Mongoose custom and inbuilt validation on Model’s schemas.',
                    '• Designed unit test cases and integration in every component using Jest in Node JS.'
                    ],
                    link:'http://www.ecssi.com/',
                    image:'https://s3.us-east-2.amazonaws.com/companynames/CSSI_Logo_180-48.png'
                },
                {
                    title:'L&T Infotech',
                    start:'Jan 2016',
                    end:'Apr 2016',
                    description:['•	Experienced developing intranet web application at L&T InfoTech using ASP.NET MVC and Entity Framework.',
                    '• Gathered information for the business use cases and import data in Excel files into Database and implemented search query screens',
                    '• implemented search query screens on that data by end to end by collaborating with the senior team members',
                    '• Programmed Authentication using ASP.NET MVC 5 Entity framework and SQL Server.',
                    '• Envisioned and Architected BCNF Normalized relational database with employee work and personal data.',
                    '• Created UI pages using HTML, CSS to Razon view Engine to render that data from SQL Server.'
                    ],
                    link:'https://www.lntinfotech.com/',
                    
                    image:'https://s3.us-east-2.amazonaws.com/companynames/LTI_Lets_solve.png'
                }

        ]
    }

    render(){
        return(
        <div style={{textAlign:"center",padding:'10px'}}>
        <Experiaces experiances={this.state.experiances}/>
        </div>)
    }
}

export default Page3;