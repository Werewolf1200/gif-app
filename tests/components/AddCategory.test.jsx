import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en Add category', () => {

    test('Debe cambiar el valor de la caja de texto/input', () => {
        render(<AddCategory onNewCategory={() => { }} />); // Se crea el Sujeto de Pruebas
        const input = screen.getByRole('textbox'); // Extraemos el imput del HTML

        fireEvent.input(input, { target: { value: 'Saitama' } }); // Dispara el evento en el input

        expect(input.value).toBe('Saitama'); // Realizamos la prueba
    });

    test('Debe llamar onNewCategory si el input tiene un valor', () => {
        
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: 'Saitama' } });
        fireEvent.submit(form);

        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('No debe llamar onNewCategory si el input está vacio', () => { 
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(onNewCategory).not.toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(0);
     })
});