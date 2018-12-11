import React, { Fragment } from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideBar.module.css'
import Backdrop from '../../Ui/Backdrop/Backdrop';

const sideBar = (props) => {
  let hideOrShow = [classes.SideBar, classes.Close];

  if (props.show) {
    hideOrShow = [classes.SideBar, classes.Open];
  }

  return (
    <Fragment>
      <Backdrop show={props.show} hide={props.closed}/>
      <div className={hideOrShow.join(' ')}>
        <Logo height='11%' mb='2rem'/>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Fragment>
    
  )
}

export default sideBar;