

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );
//es lo mismo es como una promesa
const getImagen1 = async() => {
    return 'http://prueba.es';
}

const getImagen = async() => {

    try {

        const apiKey = '35Y9C6OuztNEykOWLiUEpI47FB5CRv18';
        // espera que la promesa termine y devueve la respuesta (no la promesa)
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );

    } catch (error) {
        // manejo del error
        console.error(error)
    }
    
    
    
}

 getImagen();



