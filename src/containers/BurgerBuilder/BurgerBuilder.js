import React, { Component, Fragment } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4
  }

  addIngredientHandler = (type) => {
    const totalIngredients = this.state.ingredients[type] + 1;
    const totalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    const updatedIngredient = {
      ...this.state.ingredients
    }
    console.log(updatedIngredient);

    updatedIngredient[type] = totalIngredients;
    this.setState({ totalPrice: totalPrice, ingredients: updatedIngredient});
  }

  removeIngredientHandler = (type) => {
    
    if (parseInt(this.state.ingredients[type]) !== 0) {
      const totalIngredients = this.state.ingredients[type] - 1;
      const totalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
      const updatedIngredient = {
        ...this.state.ingredients
      }
  
      updatedIngredient[type] = totalIngredients;
      this.setState({ totalPrice: totalPrice, ingredients: updatedIngredient});
    }
    
  }

  render() {  
    const disabledInfo = {
      ...this.state.ingredients
    }

    for (let di in disabledInfo) {
      disabledInfo[di] = disabledInfo[di] <= 0;
    }

    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls 
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}/>
      </Fragment>
    );
   
  }
}

export default BurgerBuilder;