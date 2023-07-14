import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp/>', () => { 
    // test('debe de hacer match con el snapshot', () => { 
    //     const title= 'Hola soy Flavio';
    //     // render(<FirstApp title={title}/>)
    //     const {container} = render(<FirstApp title={title}/>)//
    //     expect(container).toMatchSnapshot();

    //  })
    test('debe mostrar el titulo en un h1', () => { 
            const title= 'Hola soy Flavio';
            // render(<FirstApp title={title}/>)
            const {getByText, getByTestId} = render(<FirstApp title={title}/>)//
            expect(getByText).toBeTruthy();
            expect(getByTestId('test-title').innerHTML).toContain(title)
    });
    test('debe mostrar el titulo en un h1', () => { 
        const title= 'Hola soy Flavio';
        const subTitle= 'Hola soy un Subtitle';
        // render(<FirstApp title={title}/>)
        const {getAllByText} = render(<FirstApp
             title={title}
             subTitle={subTitle}
             />)
        expect(getAllByText(subTitle).length).toBe(2);
       
    })
 })