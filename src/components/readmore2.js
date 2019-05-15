import React, { Component } from 'react';

class ReadMore extends Component{
    state = {
        readmore: this.props.readMore,
        para: "",
    }
    updatePara(string)
    {
        
        this.setState({para:string});
        
    }
    render(){
        console.log(this.props.readMore+" in the child");
        let readMoreButton = null;
        let string = "";
        let showmore1 = () =>{
        string= "";
        console.log("called"+"=================");
        this.state.readmore = false;
        }
       if(this.props.readMore)
       {
           string = this.props.para;
           this.updatePara(string);
           readMoreButton = <button onClick={showmore1}>readmore</button>
       }
        return(
        <div>
            {this.state.para}
            {readMoreButton}
        </div>
        ) 
    }
}

export default ReadMore;