import React, { Fragment } from 'react';

import classes from './Layout.module.css';

const layout = ( props ) => (
  
  <Fragment>
    <div>
      tollbar, sideNav, Backdrop
    </div>
    <main className={classes.Main}>
        { props.children }
    </main>
  </Fragment>
);

export default layout;