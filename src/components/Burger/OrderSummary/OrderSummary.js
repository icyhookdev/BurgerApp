import React, { Fragment } from 'react';

import Button from '../../Ui/Button/Button';

const orderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients)
    .map((ing) => {
      return (
        <li key={ing}>
          <span style={{textTransform: 'capitalize'}}>{ing}</span>: {props.ingredients[ing]}
        </li>
      )
    })

  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientsSummary}
      </ul>
      <p style={{fontSize: '2rem'}}>Sub total: <strong>${props.totalPrice.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button 
        clicked={props.hideModal}
        btnType='Danger'>CANCEL</Button>
      <Button btnType='Success'>CONTINUE</Button>
    </Fragment>
  )

}

export default orderSummary;