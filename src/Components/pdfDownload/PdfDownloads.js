import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Neighborhood from '../../Assets/infoPics/Neighborhood .png'
import IncludedFeat from '../../Assets/infoPics/IncludedFeatures.png'
import IncludedFeatInt from '../../Assets/infoPics/IncludedFeaturesInterior .png'
import PlotMap from '../../Assets/infoPics/plotMap.png'
import './PdfStyles.css'


const Pdfdownload = () => {
    return (
        <div>

            <div className="carouselInfo-title" >
                <b>Original Neighborhood Brochure and Maps</b>
            </div>
            <Carousel className='carouselInfo'  >
                <div data-testid='carousel-test'>
                    <img src={IncludedFeat} alt='one' />
                </div>
                <div data-testid='carousel-test'>
                    <img src={IncludedFeatInt} alt='one' />
                </div>
                <div data-testid='carousel-test'>
                    <img src={Neighborhood} alt='one' />
                </div>
                <div data-testid='carousel-test'>
                    <img src={PlotMap} alt='one' />
                </div>
            </Carousel>
        </div>

    );
}

export default Pdfdownload;
