import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad'},
  { label: 'Bacon', type: 'bacon'},
  { label: 'Cheese', type: 'cheese'},
  { label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>Current Price:  <strong>${props.price.toFixed(2)}</strong></p>
    {controls.map((ctrl) => (
      <BuildControl 
        label={ctrl.label} 
        key={ctrl.label} 
        add={() => props.addIngredient(ctrl.type)}
        remove={() => props.removeIngredient(ctrl.type)}
        disabled={props.disabled[ctrl.type]}/>
    ))}
    <button 
      disabled={!props.purchasable} 
      onClick={props.ordered}
      className={classes.OrderButton}>ORDER NOW</button>
  </div>
);

export default buildControls;