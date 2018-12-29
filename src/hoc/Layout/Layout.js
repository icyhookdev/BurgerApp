import React, { Fragment, Component } from 'react';

import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideBar from '../../components/Navigation/SideBar/SideBar';

class Layout extends Component {
  state = {
    showSideBar: false
  };

  sideBarToggleHandler = () => {
    this.setState(prevState => {
      return { showSideBar: !prevState.showSideBar };
    });
  };

  render() {
    return (
      <Fragment>
        <Toolbar show={this.sideBarToggleHandler} />
        <SideBar
          show={this.state.showSideBar}
          closed={this.sideBarToggleHandler}
        />
        <main className={classes.Main}>{this.props.children}</main>
      </Fragment>
    );
  }
}

export default Layout;
