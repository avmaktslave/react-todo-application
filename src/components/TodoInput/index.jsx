import React from 'react';
import { string, shape } from 'prop-types';
import cx from 'classnames';
import {
  initial,
  invalid,
  valid,
  textarea,
  container,
  checkmark,
} from './styles.css';

const getValidityClassName = meta => {
  const name = !meta.dirty ? invalid : valid;
  return name;
};

export const customInput = ({ input, type, meta }) => (
  <div>
    <input
      className={cx(initial, getValidityClassName(meta))}
      {...input}
      type={type}
    />
    {!meta.touched &&
      meta.error && <div style={{ color: 'red' }}>{meta.error}</div>}
  </div>
);

customInput.propTypes = {
  type: string,
  input: shape().isRequired,
  meta: shape().isRequired,
};

customInput.defaultProps = {
  type: '',
};

export const customTextArea = ({ input, value }) => (
  <textarea className={textarea} value={value} {...input} cols="30" rows="5" />
);

customTextArea.propTypes = {
  input: shape().isRequired,
  value: string.isRequired,
};

export const customCheckbox = ({ input }) => (
  <label className={container}>
    <input type="checkbox" {...input} />
    <span className={checkmark} />
  </label>
);

customCheckbox.propTypes = {
  input: shape().isRequired,
};
