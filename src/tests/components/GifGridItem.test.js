
import React from 'react';
import {GifGridItem} from '../../components/GifGridItem';
import {shallow} from 'enzyme';



describe('Test de Gif Grid Item', () => {

    const title = 'Soy el titulo';
    const url = 'http://lapaginadecarlos.com';
    const wrapper = shallow( <GifGridItem title={ title } url={ url } />);

    test('Debe mostrar Counter App correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe tener title en p ', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title )  

    });

    test('Debe tener title y url ', () => {
        
        const img = wrapper.find('img');
        expect( img.prop('alt')).toBe( title );
        expect( img.prop('src')).toBe( url );

    });
    
    test('Div ebe tener animate__fadeIn class ', () => {
        const clase = 'animate__fadeIn';
        const div = wrapper.find('div');
        expect( div.prop('className').includes(clase)).toBe( true );

    });








});
