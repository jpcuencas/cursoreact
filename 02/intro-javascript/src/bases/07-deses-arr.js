
// #region
const personajes = ['Goku','Vegeta','Trunks'];
console.log(personajes);
const [ p1, , p3 ] = personajes;
console.log( p3 );
// endregion
/* #region  */
const retornaArreglo = () =>{
    return ['ABC', 123];
}
/* #endregion */
const [ letras, numeros ] = retornaArreglo(); 
console.log(letras, numeros);


// Tarea
// 1. el primer valor del arr se llamará nombre
// 2. se llamará setNombre
const runarr = ( valor ) => {
    return [ valor, ()=>{ return 'Hola Mundo'; } ];
}
const arr =  runarr( 'Goku' );
let result = arr[1]();

console.log(result);
const useState = ( valor ) => {
    return [ valor, ()=>{ console.log('Hola Mundo'); } ];
}
const [ nombre, setNombre ] = useState( 'Goku' );

console.log( nombre );
setNombre();





