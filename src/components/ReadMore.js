import React from 'react';
import { type } from 'os';

const Example = (props1) => {
    let readMoreButton = null;
    let props = {...props1};
    let string = "";
    let boolean1 = props.readMore;
    let showmore1 = () =>{
        string= "s";
        console.log("called"+"=================")
        boolean1 = false;
    }
   if(boolean1)
   {
       string = props.para.substring(1,250);
       readMoreButton = <button onClick={showmore1}>readmore</button>
   }
   else
   {
       string = props.para;
   }
  return (
    <div>
        {string}
        {readMoreButton}
    </div>
  );
};

export default Example;