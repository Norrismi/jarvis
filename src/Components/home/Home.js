import React from 'react';
import IntroPicsCarousel from '../carousel/IntroPicsCarousel'
import Comps from '../comps/Comps'
import IntroStats from '../introStats/IntroStats'
import DetailedStats from '../detailedStats/DetailedStats'
import './home.css'
import FormControl from '../contactForm/FormControl'
import Map from '../map/Map'
import Paragraph from '../paragraph/Paragraph'

const Home = () => {
    return (
        <div className='home_container'>
            <div className='home_carousel'>
                <IntroPicsCarousel />
            </div>

            <div className='home_intro_container'>
                <div className="address">
                    <b>15 Jarvis Creek Lane,</b>
                    <span id='stat_name'> Hilton Head, SC 29926</span>
                </div>

                <div className="stat_row">
                    <div className="price_container">

                        <div className="price" id='stat_number'>
                            <b>$550,000</b>
                        </div>
                        <div className="price" id='stat_name'>
                            Price
                            </div>
                    </div>

                    <div className="bed_container">

                        <div className="bed" id='stat_number'>
                            <b>3</b>

                        </div>
                        <div className="bed" id='stat_name'>
                            Beds
                            </div>
                    </div>

                    <div className="bath_container">

                        <div className="bath" id='stat_number'>
                            <b>2</b>

                        </div>
                        <div className="bath" id='stat_name'>
                            Baths
                            </div>
                    </div>

                    <div className="square-feet_container">

                        <div className="square_feet" id='stat_number'>
                            <b>1,889</b>

                        </div>
                        <div className="square_feet" id='stat_name'>
                            Sq Ft
                            </div>
                    </div>
                </div>
            </div>

            {/* <Map/> */}


            <Paragraph/>

            <IntroStats/>

            <DetailedStats/>

            <Comps/>

            <FormControl/>

        </div>
    );
}

export default Home;
