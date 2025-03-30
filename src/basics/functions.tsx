export const functions = () => {
  
  const greeting = (name: string)  => `Hello World, ${name}`;
    
  const greet = function (name: string)  {
    return `Hello World, ${name}`;
  }

  const greeting2 = (name: string)  => {
    return `Hello World, ${name}`;
  }

  const greeting3 = () => 'Hello World';

  const getUser = () => ({
    uuid: '12345',
    name: 'javiko500',
  });
  const name = 'javiko500';

  console.log('<--------------- JK Functions --------------->');
  console.log(greeting(name));
  console.log(greet('Amy'));
  console.log(greeting2('Suly'));
  console.log(greeting3());
  console.log(getUser());


  // function getActiveUser(name: string) {
  //   return {
  //     uuid: '1234567',
  //     name,
  //   };
  // }
  const getActiveUser = (name: string) => ({
    uuid: '1234567',
    name,
  });

  const activeUser = getActiveUser('javiko500');

  console.log(activeUser);

}