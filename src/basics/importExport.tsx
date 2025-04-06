import { heroes, owners } from '../data/heroes';

export const importExport = () => {
  const heroesList = heroes;
  
  console.log('<--------------- JK ImportExport --------------->');
  console.log(heroesList);
  
  const hero = getHeroById(1);
  console.log('<--------------- JK ImportExport --------------->');
  console.table(hero ? hero : 'No hero found');

  const hero2 = getHeroesByOwner('DC');
  console.log('<--------------- JK ImportExport --------------->');
  console.table(hero2 ? hero2 : 'No hero found');

  console.log('<--------------- JK ImportExport --------------->');
  console.log(owners);
}

export const getHeroById = ( id: number ) => {
  return heroes.find(hero => hero.id === id);
}

export const getHeroesByOwner = ( owner: string ) => {
  return heroes.filter(hero => hero.owner === owner);
}