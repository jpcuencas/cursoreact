

const activo = true;
let msg = 'Test';
// let mensaje = '';

// if ( !activo ) {
//     mensaje = 'Activo';
// } else {
//     mensaje = 'Inactivo';
// }
// const mensaje = ( activo ) ? 'Activo' : 'Inactivo'; 
// const mensaje = ( activo ) ? 'Activo' : null; 
const mensaje = activo && 'Activo';
const mensaje2 = msg || 'Vacion'

console.log(mensaje);


