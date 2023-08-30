import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components"

describe('Pruebas en el AddCategory', () => {

    test('debe de cambiar el valor de la caja de texto', () => {
        
      const inputValue = 'Valor';

        render( <AddCategory onNewCategory={ () => {} }/>);
        const input = screen.getByRole('textbox');//text-box para los input

        fireEvent.input( input, { target: { value: inputValue } });
        expect(input.value).toBe('Valor');

    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => {

        const onNewCategory = jest.fn();
        const inputValue = 'Valor';
        
        render( <AddCategory onNewCategory={ onNewCategory } />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
    
        fireEvent.input( input, { target: { value: inputValue } });
        fireEvent.submit( form );
        //se espera que después del submit el inputValue sea un string vacío
        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

    });

    test('no debe llamar el onNewCategory si el input está vacío', () => {

        const onNewCategory = jest.fn();
        
        render( <AddCategory onNewCategory={ onNewCategory } />);
        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();

    })
});