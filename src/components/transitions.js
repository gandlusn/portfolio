import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classes from './transition.css';

const Example = (props) => {
  return (
    <div>
    {console.log(props)}
      <ReactCSSTransitionGroup transitionName={classes.example} transitionEnterTimeout={700} transitionLeaveTimeout={700}>
        {props.items.map(function(item) {
          return (
            <div className={classes.todo-item}>
              {item.name}
            </div>
          );
        })}
      </ReactCSSTransitionGroup>
    </div>
  );
};

export default Example;