export const literalObjects = () => {
  const person = {
    name: 'javiko500',
    lastName: 'Guti',
    age: 26,
    address: {
      city: 'Cuenca',
      country: 'Ecuador',
      zip: 12345,
      lat: 10.1234,
      long: 10.1234,
    }
  };

  // const person2 = {...person};
  const person2 = structuredClone(person);
  person2.name = 'Javi';
  person2.address.city = 'Loja';
  console.log('<--------------- JK LiteralObjects --------------->');
  console.log({person, person2});
  console.log(person.name);
}