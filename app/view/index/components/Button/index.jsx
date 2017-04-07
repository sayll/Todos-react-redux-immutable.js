import React, { PropTypes } from 'react';
import ActiveButton from './ActiveButton';
import DefaultButton from './DefaultButton';

function Button({ children, $click, isActiveButton }) {
  const Node = isActiveButton ? ActiveButton : DefaultButton;
  return (
    <Node className={isActiveButton ? 'activeButton' : 'myButton'} onClick={$click}>
      {children}
    </Node>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  $click: PropTypes.func.isRequired,
  isActiveButton: PropTypes.bool.isRequired
};

export default Button;