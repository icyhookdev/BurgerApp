import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../Ui/Button/Button';
import classes from './CheckoutSummary.module.css';

const CheckoutSummary = ({ checkoutCancel, checkoutContinue, ingredients }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{ width: '100%', height: '300px', margin: 'auto' }}>
        <Burger ingredients={ingredients} />
      </div>
      <Button btnType="Danger" clicked={checkoutCancel}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={checkoutContinue}>
        CONTINUE
      </Button>
    </div>
  );
};

export default CheckoutSummary;
