import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({saludo, subtitulo}) => {

  console.log(saludo)

  return ( 
    <Fragment>
      {/*<pre>{JSON.stringify(saludo, null, 3)}</pre>*/}
      <h1>{saludo}</h1>
      <p>{subtitulo}</p>
    </Fragment>
   );
}
PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
  subtitulo: 'Soy un subtitulo'
}
 
export default PrimeraApp;