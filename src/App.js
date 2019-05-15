import React, { PureComponent } from 'react';
import classes from './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';
import Page1 from './containers/page1/page1';
import Page2 from './containers/page2/page2';
import Page3 from './containers/page3/page31';
import K from '../src/components/UI/Toolbar/toolbar2';
import Example from './components/transitions';
import Home from './containers/Home/home';

class App extends PureComponent {
  constructor(props){
    super(props)
    this.state =
    {
      options:[
        {name:"SKILLS",url:"/"},
        {name:"PROJECTS",url:"/Projects"}],
      value:"Select",
    };
    this.onChangeDropDown =this.onChangeDropDown.bind(this);     
  }
  onChangeDropDown(event){
    console.log("hi")
    console.log("sai",this.state.value,this.state.options)
    console.log(event.target.value)
    this.setState({value:event.target.value})
    const k = this.state.options.filter(option1=>option1.name === event.target.value)
    console.log(k[0].url) 
    this.setState({value:event.target.value})
    this.props.history.push(k[0].url)

  }

  render() {

    return (
      <div className={classes.App}>
      <div style={{height:'100px'}}>
      {console.log("sai",console.log(window.innerWidth+")))))))))))))))))))))))))))))))))))))))))))))))))))0"))}
        <K options={this.state.options} changed={this.onChangeDropDown} value={this.state.value}/>
      </div>
        <Switch>

            <Route path="/skills" exact component={Page1}/>
            <Route path="/Projects" exact component={Page2}/>
            <Route path="/exp" exact component={Page3}/>
            <Route path="/"  component={Home} />
        </Switch>      
      </div>
      );

  }

}

export default withRouter(App);