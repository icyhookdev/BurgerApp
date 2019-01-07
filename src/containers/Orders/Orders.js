import React, { Fragment } from 'react';

import Order from '../../components/Order/Order';

class Orders extends React.Component {
  render() {
    return (
      <Fragment>
        <Order />
        <Order />
      </Fragment>
    );
  }
}

export default Orders;
