import { render, screen } from '@testing-library/react'
import { GifItem } from "../../components/GifItem"

describe('Test in <GifItem/>', () => {

    const title = 'One Punch'
    const url = 'https://one-punch.com/one-puch.jpg'

    test('debe hacer match con el snapshot ', () => {
        
        const {container} = render(<GifItem title={title} url={url}/>)
        expect(container).toMatchSnapshot();
      
    }),

    test('debe mostrar la imagen con el URL y el ALT iNDICADO', () => {
        render(<GifItem title={title} url={url}/>);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(src);
        expect(alt).toBe(alt);
    }),
    test('should ', () => {
        render(<GifItem title={title} url={url}/>)
        expect(screen.getByText(title)).toBeTruthy();
    }) 
})
