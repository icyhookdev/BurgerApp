import React from 'react';

import classes from './BuildControl.module.css';

const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <button 
      className={classes.Less}
      onClick={props.remove}
      disabled={props.disabled}>-</button>
    <div className={classes.Label}>{props.label}</div>
    <button 
      className={classes.More}
      onClick={props.add}>+</button>
  </div>
);

export default buildControl;