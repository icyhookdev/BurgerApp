import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.module.css';

class BurgerIngredient extends Component {
  
  render() {
    ingredient = null;

    switch (this.props.type) {
      case ('bread-bototm'):
        ingredient = <div className={classes.breadBottom}></div>;
        break;
      case ('bread-top'): 
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        );
        break;
      case ('meat'): 
        ingredient = <div className={classes.Meat}></div>
        break;
      case ('cheese'):
        ingredient = <div className={classes.Cheese}></div>
        break;
      case ('salad'):
        ingredient = <div className={classes.Salad}></div>
        break;
      case ('bacon'):
        ingredient = <div className={classes.Bacon}></div>
        break;
      default:
        ingredient = null;
    }

    return ingredient;
  }
}

BurgerIngredient.PropTypes = {
  type: PropTypes.string
}

export default BurgerIngredient;