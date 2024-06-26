import { render, screen, fireEvent } from "@testing-library/react"
import { AddCategory } from "../../components/AddCategory"

describe('Pruebas en <AddCategory/>', () => {
    test('Debe de cambiar el valor de la caja de texto', () => {

        render(<AddCategory onNewCategory = {() => {}}/>)
        const input = screen.getByRole('textbox');

        fireEvent.input(input,{target: {value: 'Saitama'}});
        expect(input.value).toBe('Saitama');
    }),

    test('debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'Saitama'
        render(<AddCategory onNewCategory={() => {}}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);
        // screen.debug();

        expect(input.value).toBe('');
        
    })
    

     
})
