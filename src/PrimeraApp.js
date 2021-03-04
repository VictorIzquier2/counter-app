import React, { Fragment } from 'react';

const PrimeraApp = () => {

  const saludo = {
    nombre: "paco",
    edad: 34
  };

  return ( 
    <Fragment>
      {/*<pre>{JSON.stringify(saludo, null, 3)}</pre>*/}
      <p>Mi primera aplicación</p>
    </Fragment>
   );
}
 
export default PrimeraApp;