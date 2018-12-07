import React, { Fragment } from 'react';

const layout = ( props ) => (
  <Fragment>
    <div>
      tollbar, sideNav, Backdrop
    </div>
    <main>
        { props.children }
    </main>
  </Fragment>
);

export default layout;