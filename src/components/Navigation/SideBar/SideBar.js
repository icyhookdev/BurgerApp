import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideBar.module.css'

const sideBar = (props) => {
  return (
    <div className={classes.SideBar}>
      <Logo height='11%' mb='2rem'/>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  )
}

export default sideBar;