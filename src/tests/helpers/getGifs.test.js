import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs FETCH ', () => {
    
    test('Debe de traer 10 elementos', async() => {
        
        const gifs = await getGifs('');

        expect( gifs.length ).toBe( 0 );

    })
    

});
