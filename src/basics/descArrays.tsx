export const descArrays = ( ) => {
  const characters = [
    'Goku',
    'Vegeta',
    'Trunks',
    'Piccolo',
    'Zamasu',
    'King',
    'Gohan',
    'Goten',
    'Super Saiyan',
    'Saiyan',
    'Saiya',
  ];

  const [ , , trunks ] = characters;

  console.log('<--------------- JK DescArrays --------------->');
  console.log(trunks);

  const [ letters, numbers ] = returnArray();
  console.log('<--------------- JK DescArrays --------------->');
  console.log(letters, numbers);

  const [ name, setName ] = actionState('Javi');
  console.log('<--------------- JK DescArrays --------------->');
  console.log(name);
  (setName as () => void)();
}

const actionState = ( value: string ) => {
  return [ value, ()=> { console.log('hello') } ]
}

const returnArray = () => {
  return [ 'ABC', 123]
}