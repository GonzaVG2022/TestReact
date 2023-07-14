import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"

describe('debe devolver un heroe por id y owner', () => {

    test('Heroe por ID', () => {
            const id = 1
            const heroe = getHeroeById(id)
            expect(heroe).toStrictEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            })
    })
    test('Heroe por ID que no exite', () => {
        const id = 6;
        const heroe = getHeroeById(id);
        expect(heroe).toBeFalsy();
    });

    test('Heroe por owner', () => {
        const owner = 'DC';
        
        const heroe = getHeroesByOwner(owner)
        // console.log(heroe.length)
        const length = heroe.length
        // console.log(typeof(length))
        expect(length).toBe(3)
        expect(heroe).toEqual([{
            id: 1,
            name: 'Batman',
            owner: 'DC'
        },
      {
            id: 3,
            name: 'Superman',
            owner: 'DC'
        },
        {
            id: 4,
            name: 'Flash',
            owner: 'DC'
        }]);
    });
    test('Heroes por Owner Marvel', () => {
        const owner= 'Marvel'
        const heroes = getHeroesByOwner(owner)
        expect(heroes).toEqual(heroes.filter(heroe => heroe.owner === owner))

    })
});

