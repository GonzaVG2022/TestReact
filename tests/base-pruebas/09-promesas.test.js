import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Prueba 09 promesas', () => {
    test('getHeroeByIdAsync debe retornar un héroe', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then( hero => {
                expect(hero).toEqual({
                    id:1,
                    name:'Batman',
                    owner:'DC'    
                });
                done();
            });

    });
    test('getHeroeByIdAsync debe retornar error con Id', (done) => {
        const id = 100;
        getHeroeByIdAsync(id)
            .catch( error => {
                    console.log(error);
                    done();
                });
                
            });

    });
