import {getHeroeById, getHeroesByOwner} from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Héroes', () => {
 
  test('Debe de retornar un héroe por id', () => {
    
    const id = 2;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find(h => h.id === id);

    expect(heroe).toEqual(heroeData);

    console.log(heroe);
  });
  
  test('Debe de retornar undefined si héroe no existe', () => {
    
    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  test('Debe de retornar un arreglo con los héroes de DC', () => {
    // Debe de retornar un arreglo con los héroes de DC 
    // owner   
    const owner = 'DC'
    const heroesFromDC = getHeroesByOwner(owner);

    const heroesData = heroes.filter(h => h.owner === owner);

    //toEqual al arreglo filtrado
    expect(heroesFromDC).toEqual(heroesData);
    

  })

  test('Debe de retornar un arreglo con los héroes de Marvel', () => {

    //debe de retornar un arreglo con los héroes de Marvel
    const owner = 'Marvel'
    const heroesFromMarvel = getHeroesByOwner(owner);

    const heroesData = heroes.filter(h => h.owner === owner);

    expect(heroesFromMarvel.length).toBe(2);
    // length = 2

  })

})