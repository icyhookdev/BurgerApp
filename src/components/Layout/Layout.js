import React, { Fragment } from 'react';

import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = ( props ) => (
  
  <Fragment>
    <Toolbar />
    <main className={classes.Main}>
        { props.children }
    </main>
  </Fragment>
);

export default layout;