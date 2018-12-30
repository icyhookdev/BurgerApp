import React, { Fragment } from 'react';

import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Spinner from '../Spinner/Spinner';

class Model extends React.Component {
  render() {
    let showModalContent = this.props.children;

    if (this.props.spinner) {
      showModalContent = <Spinner />;
    }
    return (
      <Fragment>
        <Backdrop show={this.props.show} hide={this.props.exitModal} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}
        >
          {showModalContent}
        </div>
      </Fragment>
    );
  }
}

export default Model;
