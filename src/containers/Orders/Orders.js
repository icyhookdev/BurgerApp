import React, { Fragment } from 'react';

import Order from '../../components/Order/Order';
import burger from '../../api/burger';

class Orders extends React.Component {
  state = {
    orders: [],
    loading: true
  };

  componentDidMount() {
    burger
      .get('/orders.json')
      .then(res => {
        const orders = [];
        for (let order in res.data) {
          orders.push({ ...res.data[order], id: order });
        }
        this.setState({ loading: false, orders });
      })
      .catch(err => this.setState({ loading: false }));
  }

  displayOrdersHandler = ({ orders }) =>
    orders.length > 0 &&
    orders.map(order => (
      <Order
        key={order.id}
        ingredients={order.ingredients}
        customer={order.customer}
        price={+order.price}
        delivery={order.deliveredMethod}
      />
    ));

  render() {
    return <Fragment>{this.displayOrdersHandler(this.state)}</Fragment>;
  }
}

export default Orders;
