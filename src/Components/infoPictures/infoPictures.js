import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Neighborhood from '../../Assets/infoPics/Neighborhood .png'
import IncludedFeat from '../../Assets/infoPics/IncludedFeatures.png'
import IncludedFeatInt from '../../Assets/infoPics/IncludedFeaturesInterior .png'
import PlotMap from '../../Assets/infoPics/plotMap.png'
import './infoPictures.css'


const InfoPictures = () => {
    return (
        <div className=''>

            <div className='infoPictures-title-container'>
                <b className=''>Original Neighborhood Brochure and Maps</b>
            </div>


           

                <Carousel className='infoPictures-carousel'  >
                    <div data-testid=''>
                        <img src={IncludedFeat} alt='one' />
                    </div>
                    <div data-testid=''>
                        <img src={IncludedFeatInt} alt='two' />
                    </div>
                    <div data-testid=''>
                        <img src={Neighborhood} alt='three' />
                    </div>
                    <div data-testid=''>
                        <img src={PlotMap} alt='four' />
                    </div>
                </Carousel>
            
        </div>

    );
}

export default InfoPictures;
