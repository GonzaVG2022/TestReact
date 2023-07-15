import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Prueba en CounterApp', () => {
    const initialValue = 10
    test('debe hacer match con el snapshot', () =>{
        const {container} = render(
            <CounterApp
                value= {initialValue}
            />)
    expect(container).toMatchSnapshot()
            }
        );
    test('debe de retornar el valor de 100', () =>{
        render(<CounterApp value={100}/>);
        expect(screen.getByText(100)).toBeTruthy();

    })
    test('debe incrementar con el boton 1', () =>{
        render(<CounterApp value={initialValue}/>);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('11')).toBeTruthy();

    })
    test('debe decrementar con el boton -1', () => {
        render(<CounterApp value={initialValue}/>);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('9')).toBeTruthy();
    })
    test('debe retornar el reset', () => {
        render(<CounterApp value={initialValue}/>);
        fireEvent.click(screen.getByText('Reset'));
        screen.debug()//veo el estado del dom
        expect(screen.getByText('10')).toBeTruthy();
    })
    test('debe funcionar el boton Reset',() => {
        render(<CounterApp value={initialValue}/>);
        fireEvent.click(screen.getByRole('button',{name:'sumar'}))
        expect(screen.getByText('11')).toBeTruthy();
    })
});