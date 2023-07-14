import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp/>', () => { 
    const title = 'Hola soy Flavio';
    const subTitle= 'Hola soy un Subtitle';
    test('debe de hacer match con el snapshot', () => { 
        const {container} = render(
        <FirstApp 
            title={title}
        />);
        expect(container).toMatchSnapshot();
    });
    test('debe de mostrar el mensaje "Hola soy Flavio"', () => {
       
        render(
            <FirstApp 
                title={title}
            />);
        screen.debug() //nos da el dom
        expect(screen.getByText(title)).toBeTruthy();
    });
    test('debe de mostrar el texto en un h1', () =>{
        render(
            <FirstApp 
                title={title}
            />);
        expect( screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);
    });
    test('debe mostrar subTitle enviado por props', () => { 
        render(
            <FirstApp
                title={title}
                subTitle={subTitle}
            />)
        expect(screen.getAllByText(subTitle).length).toBe(2);
       
    });
 })