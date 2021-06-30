import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
// import one from '../../Assets/carouselPics/one.png'
// import two from '../../Assets/carouselPics/two.jpg'
// import three from '../../Assets/carouselPics/three.jpg'

import front from '../../Assets/carouselPics/JarvisCreekP.jpeg'
import sittingArea from '../../Assets/carouselPics/JarvisCreekS-L.jpeg'
import pond from '../../Assets/carouselPics/JarvisCreekP-L.jpeg'

class introPicsCarousel extends Component {
    render() {
        return (
            <Carousel className='carousel'>
                <div>
                    <img src={front} alt='one' />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={sittingArea} alt='two' />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={pond} alt='three' />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        );
    }
}


export default introPicsCarousel