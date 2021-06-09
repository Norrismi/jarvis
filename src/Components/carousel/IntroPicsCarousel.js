import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import one from '../../Assets/carouselPics/one.png'
import two from '../../Assets/carouselPics/two.jpg'
import three from '../../Assets/carouselPics/three.jpg'

class introPicsCarousel extends Component {
    render() {
        return (
            <Carousel className='carousel'>
                <div>
                    <img src={one} alt='one' />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={two} alt='two' />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={three} alt='three' />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        );
    }
}


export default introPicsCarousel