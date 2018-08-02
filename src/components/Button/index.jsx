import React from 'react';
import { string, func } from 'prop-types';
import { button } from './Button.css';

const Button = ({ text, onClick }) => (
  <button className={button} type="submit" onClick={onClick}>
    {text}
  </button>
);

Button.propTypes = {
  text: string.isRequired,
  onClick: func,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
