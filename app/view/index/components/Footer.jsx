import React, { PropTypes } from 'react';
import Button from './Button';

function Footer({ todoFilter, handleFilterTodo, $CLEAR_TODO }) {
  return (
    <div>
      <Button
        $click={() => {
          handleFilterTodo('ACTION');
        }}
        isActiveButton={todoFilter === 'ACTION'}
      >
        ACTION
      </Button>
      {'  '}
      <Button
        $click={() => {
          handleFilterTodo('COMPLETE');
        }}
        isActiveButton={todoFilter === 'COMPLETE'}
      >
        COMPLETE
      </Button>
      {'  '}
      <Button
        $click={() => {
          handleFilterTodo('ALL');
        }}
        isActiveButton={todoFilter === 'ALL'}
      >
        ALL
      </Button>
      {'  '}
      <Button
        $click={() => {
          $CLEAR_TODO();
        }}
        isActiveButton={false}
      >
        CLEAR
      </Button>
    </div>
  );
}

Footer.propTypes = {
  todoFilter: PropTypes.string.isRequired,
  handleFilterTodo: PropTypes.func.isRequired,
  $CLEAR_TODO: PropTypes.func.isRequired
};

export default Footer;