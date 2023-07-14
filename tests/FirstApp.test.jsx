import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp/>', () => { 
    test('debe de hacer match con el snapshot', () => { 
        const title= 'Hola soy Flavio';
        // render(<FirstApp title={title}/>)
        const {container} = render(<FirstApp title={title}/>)//
        expect(container).toMatchSnapshot();

     })
 })