export const desObjects = () => {
  const person = {
    name: 'Javier',
    age: 26,
    key: 'javiko500',
  };

  const { name, age: agePerson, key } = person;
  console.log('<--------------- JK DesObjects --------------->');
  console.log(name, agePerson, key);
  
  const getPerson = ( { name, key, age, range = 'boss' } : any ) => {
    console.log('<--------------- JK DesObjects --------------->');
    console.log(name, age, range);

    return {
      nameKey: key,
      age,
      latLang: {
        lat: 10.1234,
        long: 10.1234,
      }
    }
  };

  const { nameKey, latLang: { lat, long } } = getPerson(person);
  console.log('<--------------- JK DesObjects --------------->');
  console.log(nameKey);
  console.log(lat, long);
}