import React from 'react';
import {render} from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';


describe('Pruebas en <PrimeraApp />', () => {
  test('', () => {
    const saludo = 'Hola, soy Victor';

    const {getByText} = render( <PrimeraApp saludo={saludo} />)

    expect(getByText(saludo)).toBeInTheDocument();
  });
})