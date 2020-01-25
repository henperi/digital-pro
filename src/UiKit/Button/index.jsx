import React from 'react';
import PropsTypes from 'prop-types';
import './Button.scss';
// import { bgColors } from '../../styles/bgColors';

/**
 * @typedef {{
 *  onClick: Function,
 *  fullWidth: boolean
 *  className?: string,
 *  children?: any,
 *  radius?: 5 | 10 | 20 | 40 | 60 | 100,
 * }} buttonProps
 */

/**
 *
 * @param {buttonProps} buttonProps
 * @returns {JSX.Element} Button
 */
export const Button = ({
  className, children, onClick, radius, fullWidth,
}) => (
  <button
    onClick={() => onClick()}
    className={`button ${className} ${radius} ${
      fullWidth ? 'button--full-width' : ''
    }`}
    type="button"
  >
    {children}
  </button>
);

Button.propTypes = {
  className: PropsTypes.string,
  children: PropsTypes.node,
  onClick: PropsTypes.func,
  radius: PropsTypes.number,
  fullWidth: PropsTypes.bool,
};

Button.defaultProps = {
  className: '',
  children: PropsTypes.objectOf,
  onClick: () => {},
  radius: 5,
  fullWidth: false,
};
