import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-async-await.js', () => {
    // test('getImagen debe  de retornar una URL de la img', async() => { 
        
    //     const url = await getImagen();
    //     console.log(url)

    //     expect( typeof url ).toBe('string')

    //  });
     test('getImagen debe  de retornar un Error', async() => { 
        
        const url = await getImagen();
        console.log(url)

        expect( url ).toBe('no se encontro la img')

     });
     
});