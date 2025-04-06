import { getHeroById } from "./importExport";

export const promisesExample = () => {
  // const promise = new Promise( ( resolve, reject ) => {
  //   setTimeout( () => {
  //     const hero = getHeroById( 1 );
  //     if ( hero ) {
  //       return resolve( hero );
  //     }
  //     reject( 'Not found' );
  //   }, 2000 );
  // } );

  // promise.then( ( value ) => {
  //   console.log( value );
  // })
  // .catch( ( error ) => {
  //   console.log( error );
  // });

  getHeroByIdAsync( 5 )
    .then( console.log )
    .catch( console.warn );
}

const getHeroByIdAsync = ( id: number ) => {
  return new Promise( ( resolve, reject ) => {
    setTimeout( () => {
      const hero = getHeroById( id );
      return hero 
        ? resolve( hero )
        : reject( 'Not found' );
    }, 2000 );
  });

}