
console.log({});

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321,
    },
};


const persona1 = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321,
    },
//    addYear: () => {
//        console.log(this)
//        this.edad = this.edad + 1;
//    }
};
console.table( persona1 );
//persona1.addYear();
console.table( persona1 );
// lo mismo
console.log( {
    persona:persona
    } );
console.log( {
    persona
    } );

// mostrar el objeto
console.table( persona );

const persona2 = { ...persona };
persona2.nombre = 'Peter';


console.log( persona );
console.log( persona2 )







