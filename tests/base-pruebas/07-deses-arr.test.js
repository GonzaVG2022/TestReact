
import { retornaArreglo, usState } from "../../src/base-pruebas/07-deses-arr"

describe('Prueba 07-deses-arr', () => {
    test('retorna strig y numero', () => {
        const [letter, numbers] = retornaArreglo();
        expect( typeof letter ).toBe('string'); //esperamos recibir un tipo de palabra aleatorea
        expect(typeof numbers).toBe('number');
        expect(letter).toEqual(expect.any(String));
        
    });    

    
   
    // expect(funcion).toBe(()=>{ console.log('Hola Mundo') })


});