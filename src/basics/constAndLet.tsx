export const constAndLet = () => {

  // ! no use var
  
  const name = 'javiko500';
  const lastName = 'Guti';

  let value = 5;
  value = 10;
  console.log({
    name,
    lastName,
    value,
  });
  
  if ( true ) {
    const value = 6;
    console.log(value);
  }

  console.log(value);
  
}