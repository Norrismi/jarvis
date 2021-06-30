import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import front from '../../Assets/carouselPics/JarvisCreekP.jpeg'
import sittingArea from '../../Assets/carouselPics/JarvisCreekS-L.jpeg'
import pond from '../../Assets/carouselPics/JarvisCreekP-L.jpeg'

class introPicsCarousel extends Component {
    render() {
        return (
            <Carousel className='carousel'>
                <div>
                    <img src={front} alt='one' />
                </div>
                <div>
                    <img src={sittingArea} alt='two' />
                    <p className="legend">Sitting area in front of pond</p>
                </div>
                <div>
                    <img src={pond} alt='three' />
                </div>
            </Carousel>
        );
    }
}


export default introPicsCarousel