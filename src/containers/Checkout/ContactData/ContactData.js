import React, { Component, Fragment } from 'react';

import Button from '../../../components/Ui/Button/Button';
import classes from './ContactData.module.css';
import burger from '../../../api/burger';
import Spinner from '../../../components/Ui/Spinner/Spinner';

class ContactData extends Component {
  state = {
    customer: {
      name: '',
      email: '',
      address: {
        street: '',
        postalCode: ''
      }
    },
    spinner: false
  };

  orderHanlder = async e => {
    e.preventDefault();
    this.setState({ spinner: true });
    const order = {
      ingredients: this.props.ingredients,
      customer: this.state.customer,
      price: this.props.price
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
  };

  displayForm = () => {
    if (this.state.spinner) {
      return <Spinner />;
    }

    return (
      <form className={classes.ContactData}>
        <h4>Enter your Contact Info</h4>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="street" />
        <input type="text" placeholder="Postal Code" />
        <Button clicked={this.orderHanlder} btnType="Success">
          ORDER
        </Button>
      </form>
    );
  };

  render() {
    return <Fragment>{this.displayForm()}</Fragment>;
  }
}

export default ContactData;
