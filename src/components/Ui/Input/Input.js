import React from 'react';

import classes from './Input.module.css';

const Input = ({ type, placeHolder, name, change, style }) => {
  return (
    <input
      onChange={change}
      className={classes.Input}
      type={type}
      placeholder={placeHolder}
      style={{ border: style ? '1px solid red' : '1px solid #ccc' }}
      name={name}
    />
  );
};

export default Input;
