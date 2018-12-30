import React, { Component, Fragment } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/Ui/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import burger from '../../api/burger';
import Spinner from '../../components/Ui/Spinner/Spinner';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    spinner: false
  };

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(ing => {
        return ingredients[ing];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({ purchasable: sum > 0 });
  }

  addIngredientHandler = type => {
    const totalIngredients = this.state.ingredients[type] + 1;
    const totalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    const updatedIngredient = {
      ...this.state.ingredients
    };

    updatedIngredient[type] = totalIngredients;
    this.setState({ totalPrice: totalPrice, ingredients: updatedIngredient });
    this.updatePurchaseState(updatedIngredient);
  };

  removeIngredientHandler = type => {
    if (parseInt(this.state.ingredients[type]) !== 0) {
      const totalIngredients = this.state.ingredients[type] - 1;
      const totalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
      const updatedIngredient = {
        ...this.state.ingredients
      };

      updatedIngredient[type] = totalIngredients;
      this.setState({ totalPrice: totalPrice, ingredients: updatedIngredient });
      this.updatePurchaseState(updatedIngredient);
    }
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  removeModalHandler = () => {
    this.setState({ purchasing: false });
  };

  onPurchasingHandler = async () => {
    this.setState({ spinner: true });

    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Cristihan A.',
        zipCode: '1010',
        country: 'Venezuela',
        email: 'cristihan...@gmail.com'
      }
    };

    try {
      await burger.post('/orders.json', order);
      setTimeout(() => {
        this.setState({ spinner: false, purchasing: false });
      }, 3000);
    } catch (error) {
      setTimeout(() => {
        this.setState({ spinner: false, purchasing: false });
      }, 3000);
    }
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };

    for (let di in disabledInfo) {
      disabledInfo[di] = disabledInfo[di] <= 0;
    }

    let orderSummary = (
      <OrderSummary
        ingredients={this.state.ingredients}
        hideModal={this.removeModalHandler}
        totalPrice={this.state.totalPrice}
        onPurchase={this.onPurchasingHandler}
      />
    );
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Fragment>
        <Modal
          show={this.state.purchasing}
          spinner={this.state.spinner}
          exitModal={this.removeModalHandler}
        >
          {orderSummary}
        </Modal>

        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          ordered={this.purchaseHandler}
          purchasable={this.state.purchasable}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
