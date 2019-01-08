import React, { Component, Fragment } from 'react';

import Button from '../../../components/Ui/Button/Button';
import classes from './ContactData.module.css';
import burger from '../../../api/burger';
import Spinner from '../../../components/Ui/Spinner/Spinner';
import Input from '../../../components/Ui/Input/Input';

class ContactData extends Component {
  state = {
    orderForm: {
      customer: {
        name: '',
        email: '',
        street: '',
        postalCode: ''
      },
      deliveredMethod: 'fasted'
    },
    spinner: false,
    error: {
      message: ''
    }
  };

  isFormEmpty = ({ name, email, street, postalCode }) =>
    !name.trim() || !email.trim() || !street.trim() || !postalCode.trim();

  changeHandler = e => {
    const orderForm = { ...this.state.orderForm };

    orderForm.customer[e.target.name] = e.target.value;

    this.setState({ orderForm });
  };

  setError = errorMsg => {
    const error = { ...this.state.error };

    error.message = errorMsg;

    this.setState({ error });
  };

  setInputErr = ({ orderForm, error }, input) => {
    if (!orderForm.customer[input] && error.message) {
      return true;
    }

    return false;
  };

  orderHanlder = async e => {
    e.preventDefault();
    if (this.isFormEmpty(this.state.orderForm.customer)) {
      this.setError('Please fill in all fields!');
    } else if (
      this.state.orderForm.customer.postalCode.length < 4 ||
      this.state.orderForm.customer.postalCode.length > 6
    ) {
      this.setError('The postal code should be at least 4 - 6 characters');
    } else {
      this.setState({ spinner: true });
      const order = {
        ingredients: this.props.ingredients,
        customer: this.state.orderForm.customer,
        price: this.props.price,
        deliveredMethod: this.state.orderForm.deliveredMethod
      };

      try {
        await burger.post('/orders.json', order);
        setTimeout(() => {
          this.setState({ spinner: false });
          this.props.history.push('/');
        }, 3000);
      } catch (error) {
        setTimeout(() => {
          this.setState({ spinner: false });
        }, 3000);
        console.log(error.message);
      }
    }
  };

  displayForm = () => {
    if (this.state.spinner) {
      return <Spinner />;
    }

    const { orderForm, error } = this.state;

    const err = error.message ? (
      <p className={classes.red__alert}>{error.message}</p>
    ) : null;

    return (
      <form onSubmit={this.orderHanlder} className={classes.ContactData}>
        <h4>Enter your Contact Info</h4>
        <Input
          change={this.changeHandler}
          type="text"
          name="name"
          style={this.setInputErr(this.state, 'name')}
          placeHolder="Name"
          value={orderForm.customer.name}
        />
        <Input
          change={this.changeHandler}
          type="email"
          name="email"
          placeHolder="Email"
          style={this.setInputErr(this.state, 'email')}
          value={orderForm.customer.email}
        />
        <Input
          change={this.changeHandler}
          type="text"
          name="street"
          placeHolder="Street"
          style={this.setInputErr(this.state, 'street')}
          value={orderForm.customer.street}
        />
        <Input
          change={this.changeHandler}
          type="number"
          name="postalCode"
          placeHolder="Postal Code"
          style={this.setInputErr(this.state, 'postalCode')}
          value={orderForm.customer.postalCode}
        />
        {err}
        <Button btnType="Success">ORDER</Button>
      </form>
    );
  };

  render() {
    return <Fragment>{this.displayForm()}</Fragment>;
  }
}

export default ContactData;
