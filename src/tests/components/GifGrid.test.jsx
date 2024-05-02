import { render, screen } from "@testing-library/react";
import {GifGrid} from '../../components/GifGrid';

describe('Pruebas en <GifGrid/>', () => {
    const category = 'One Punch';

    test('debe de mostrar el loading inicalmente', () => {
        render(<GifGrid category={category}/>)
        expect(screen.getByText('cargando...'));
        expect(screen.getByText(category));
    })
    
})
