
// Desestructuración
// Asignación Desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    test: 'prueba',
};

 const { edad, clave, nombre:nombre2, } = persona;
 
 console.log( nombre2 );
 console.log( edad );
 console.log( clave );

const retornoPersona = ({ edad, clave, nombre, test='test'}) => {
 
    console.log( nombre );
    console.log( edad );
    console.log( test );
    console.log( clave );
}
retornoPersona(persona);

// desectructuracion en parametros (valor por defecto)
const useContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {

    // console.log( nombre, edad, rango );
    
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        },
        test: 'prueba'
    };
}

// desectructuracion en el retorno
const { nombreClave, anios, latlng: { lat, lng }, test='test', test2='test' } = useContext( persona );

console.log(nombreClave, anios);
console.log( lat, lng );
console.log( test );
console.log( test2 );

