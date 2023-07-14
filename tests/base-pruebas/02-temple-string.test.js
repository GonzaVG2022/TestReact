import { getSaludo } from "../../src/base-pruebas/02-template-string";


describe('Prueba en 02-javaScript', () => { 

    test('getSaludo debe de retornar  "Hola Gonza"', () =>{
        const name = 'Gonza';
        const message = getSaludo(name);
        
        expect( message ).toBe(`Hola ${name}`)

    });
    
});