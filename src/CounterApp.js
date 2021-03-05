import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {

  // Hooks 
  const [counter, setCounter] = useState(0);

  // handleAdd 
  const handleAdd = () => {
    setCounter(counter + 1 );
    console.log(counter);
  }

  const handleSubtract = () => {
    setCounter(counter - 1 );
    console.log(counter);
  }

  return ( 
    <Fragment>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button onClick={handleAdd}>+1</button>
      <button onClick={()=> setCounter(value)}>Reset</button>
      <button onClick={handleSubtract}>-1</button>
    </Fragment>
   );
}
CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
  value: 0
}

export default CounterApp;