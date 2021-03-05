import {getHeroeById} from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Héroes', () => {
 
  test('Debe de retornar un héroe por id', () => {
    
    const id = 2;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find(h => h.id === id);

    expect(heroe).toEqual(heroeData);

    console.log(heroe);
  });

  test('Debe de retornar un héroe por id', () => {
    
    const id = 1;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

})