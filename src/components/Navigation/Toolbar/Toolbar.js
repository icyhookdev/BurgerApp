import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import Navigationitems from '../NavigationItems/NavigationItems';
import Menu from '../../Ui/Menu/Menu';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <Menu showMenu={props.show}/>
    <Logo height='80%'/>
    <nav className={classes.DesktopOnly}>
      <Navigationitems />
    </nav>
  </header>
);

export default toolbar;