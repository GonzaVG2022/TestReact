import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('05-funciones', () => {
   test('Recibir un objeto', () => {
     const testObjet = { uid: 'ABC123',
     username: 'El_Papi1502'
    }
    const user = getUser()
    expect(testObjet).toStrictEqual(user)
}); 
    test('getUsuarioActivo debe retornar un objeto', () => { 
    
     const nombre = 'Flavio'
     const activo = getUsuarioActivo(nombre);
     const testActivo = {
            uid: 'ABC567',
            username: nombre
        }
    
     expect(testActivo).toStrictEqual(activo)
     })
     

});