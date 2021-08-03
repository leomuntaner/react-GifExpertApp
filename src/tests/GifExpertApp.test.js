import React from 'react';
import {GifExpertApp} from '../GifExpertApp';
import {shallow} from 'enzyme';

describe(' Tests en Gif Expert App ', () => {
    
    
    test('Debe mostrarse crrectamente', () => {
        
        const wrapper = shallow( <GifExpertApp   />);

        expect( wrapper ).toMatchSnapshot();
    })
    
    test('DEBE DE MOSTRAR UNA LISTA DE CATEGORIAS', () => {
        
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow( <GifExpertApp defaultCategories={categories}   />);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe(categories.length);
    })
    

})