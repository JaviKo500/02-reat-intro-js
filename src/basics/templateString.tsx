export const templateString = () => {
  const name = 'javiko500';
  const lastName = 'Guti';

  const completeName = `
  ${name} 
  ${lastName}
  ${1 + 1}`;
  console.log('<--------------- JK TemplateString --------------->');
  console.log(completeName);
  console.log(`Greeting: ${greeting(name)}`);
}

const greeting = (name: string)  => `Hello World ${name}`;
