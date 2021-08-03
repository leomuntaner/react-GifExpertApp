import React, { PureComponent } from 'react';
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe(' Se prueba el Add category', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories }/> )
    const input = wrapper.find('input');
    const value = 'Hola mundo';
    
    beforeEach = ( () => {
        jest.clearAllMocks();
         wrapper = shallow( <AddCategory setCategories={ setCategories }/> )

    } )
    
    test('que reciba una funcion', () => {
        expect( wrapper ).toMatchSnapshot;
    })
    
    test('Debe cambiar la caja de texto ', () => {
        input.simulate('change', { target: { value } } );

        expect( wrapper.find('p').text().trim() ).toBe( value );

    })
    
    test('No debe mostrar la informacio cons submit', () => {
        
        wrapper.find('form').simulate( 'submit', { preventDefault(){} });

        expect( setCategories ).toHaveBeenCalled();
    })
    
    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {

        input.simulate('change', { target: { value } } );
        wrapper.find('form').simulate( 'submit', { preventDefault(){} });

        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function));
        expect( wrapper.find('input').prop('value') ).toBe( '' );
        
    })
    

})
