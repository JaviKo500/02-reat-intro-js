export const arrays = () => {
  // const array = new Array(100);

  const array = [ 1, 2, 3, 4, ];
  // array.push(1);
  // array.push(2);

  const array2  = [...array, 5];

  const array3 = array2.map(item => item * 2);
  console.log('<--------------- JK Arrays --------------->');
  console.log(array, array2, array3);
}