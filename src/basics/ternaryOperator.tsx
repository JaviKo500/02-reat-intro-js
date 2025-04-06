
export const ternaryOperator = () => {
  const active = true;
  const message = active ? 'active' : 'inactive';
  console.log('<--------------- JK TernaryOperator --------------->');
  console.log(message);

  const message2 = active && 'active';
  console.log(message2);
}