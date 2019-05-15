import React, { Component } from 'react';
import Projects from '../../components/Projects/Projects'
class Page2 extends Component{
    state={
        Projects:[           
            {
                name: "Firsher Man's Market",
                description:"Designed and developed Website for Busying fishes. Created Login with GitHub, Facebook, Twitter using Firebase OAuth module. Used React JS with ES6 features. Connected to Firebase database to store, retrieve data and sync the state of the react App. Used Multiple React life cycle methods to maintain App intact.",
                github: "https://github.com/gandlusn/Fisheman-s-Market",
                website: "https://fisher-95edf.firebaseapp.com/"
            },
            {   
                name:"React Burger",
                description:"Developed web application using React-JS and Redux, which includes multiple JSX, CSS Modules. Website assists with selecting ordering burgers with animated user interface with connection to Firebase Database using axios library in JS.",
                github: "https://github.com/gandlusn/React-project",
                website: "https://burger-order-9e6d9.firebaseapp.com/"
            },
            {
                name:"Django Website",
                description:" Developed a Django Website which is like a reddit website, this web site designed in multiple views and models, and used SQL-Lite database to store user and their posts related data and hosted it in Heroku using",
                github: "https://github.com/gandlusn/Django",
                website:"https://redditclone-anin.herokuapp.com"
            },
            {
                name: "Movie Rental API",
                description:"Designed an API for movie rentals using Node and Express JS. Used Winston library to log Errors in files and Mongo DB. Mongoose library to interact with Mongo DB and Used JOI to design Model validations. Create authentication endpoints with role-based access to the URL endpoints using JWT tokens.",
                github: "https://github.com/gandlusn/Node-JS-API/tree/master"
            },            
            
            {
                name:"Flask API",
                description:" Developed a Rest API using python’s Flask, Flask-Restful libraries, implemented Security to the API using Flask-JWT_Extended library, connected it to an SQLite database, and manipulated it with a SQLALCHEMY library.",
                github:"https://github.com/gandlusn/test-repository.git"
            },
            {
                name:"AWS Server Less Website",
                description:"Designed a Website to convert text in to multiple voices to listen and download the MP3 Files, using AWS Polly Service to convert text in to multiple different voices. Designed AWS Lambda and API Gateways to handle the API requests without server. Along with Few other services like Dynamo DB, S3 bucket and SNS to store the MP3 files and generate notification to coordinate between multiple lambda function",
            },
            {
                name: "Node API",
                description:" Designed an API for movie rental, Used Winston library to log Errors in files and Mongo DB, Mongoose library to interact with Mongo DB and Used JOI to design Model validations, Create authentication endpoints with role based access to the URL endpoints using JWT tokens",
                github:"https://github.com/gandlusn/Node-JS-API/tree/master"
            },
            {
              name:"Document Search",
              description:":  Developed Java Program that Use TF-IDF to retrieve important words, then used K-means based on those words to form clusters using cosine similarity search document. Then used Bernoulli Naive Bayes to classify the test document in to the cluster and then used Jaccard similarity to find the most similar ones among that cluster’s documents. ",
              github:"https://github.com/gandlusn/Document-Search.git"  
            },
            
            {
                name:"Data Processing and Visualization",
                description:"Performed Data analysis on the raw data of “Black Friday” sales using Python libraries like scikit-learn, Pandas, Seaborn libraries for preprocessing, Analyzing, visualizing the data, and retrieved key insights from the data.",
            },
            {
                name:"Tableau Dashboard",
                description:"Designed an interactive tableau dashboard with actions of filters and highlights, Exploring Canadian Bankruptcies based on Gender and Age differences spanned across multiple economic sectors"
            },
        ]
    }

    render(){
        return(
            <div style={{textAlign:"center",padding:'10px'}}>
        <Projects projects={this.state.Projects}/>
        </div>)
    }
}

export default Page2;