import React from 'react';

import classes from './Order.module.css';

const onDisplayIngredients = ings => {
  const ingredients = [];

  for (let ing in ings) {
    ingredients.push({ name: ing, amount: ings[ing] });
  }

  return ingredients.map(ing => (
    <span key={ing.name} className={classes.span}>
      {ing.name} <strong>({ing.amount})</strong>
    </span>
  ));
};

const Order = ({ ingredients, price, customer, delivery }) => {
  return (
    <div className={classes.Order}>
      <p style={{ display: 'inline-block' }}>Ingredients</p>
      {onDisplayIngredients(ingredients)}

      <h4>Customer:</h4>
      <ul>
        <li>
          Name: <strong>{customer.name}</strong>
        </li>
        <li>
          Email: <strong>{customer.email}</strong>
        </li>
        <li>
          Street: <strong>{customer.street}</strong>
        </li>
        <li>
          Zip: <strong>{customer.postalCode}</strong>
        </li>
      </ul>
      <p className={classes.delivery}>
        Delivery: <strong>{delivery}</strong>
      </p>
      <p className={classes.total}>
        Total: <strong>USD {price.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default Order;
