import React, { Fragment } from 'react';

import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideBar from '../Navigation/SideBar/SideBar';

const layout = ( props ) => (
  
  <Fragment>
    <Toolbar />
    <SideBar />
    <main className={classes.Main}>
        { props.children }
    </main>
  </Fragment>
);

export default layout;