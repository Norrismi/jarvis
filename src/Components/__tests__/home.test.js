import {render, screen, cleanup} from '@testing-library/react'
import Home from '../../Components/home/Home'
import Carousel from '../../Components/carousel/IntroPicsCarousel'


test('should render home component', () => {
    render(<Home/>);
    const home = screen.getByTestId('home-test');
    expect(home).toBeInTheDocument()
    expect(home).toHaveTextContent('Jarvis')
})




// test('should render carousel component', () => {
//     render(<Carousel/>);
//     const carousel = screen.getByTestId('carousel-test');
//     expect(carousel).toBeInTheDocument()
// })