

export const getImagen = async() => {

    try {

        // const apiKey = 'BpvUh7u53tVOdei3rAnM2I0ulRaHfK04';
        const apiKeyError = 'BpvUh7u53tVOdei3rAnM2I0ulRaHfK';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // console.error(error)
       return 'no se encontro la img'
    }
    
    
    
}

 getImagen();



