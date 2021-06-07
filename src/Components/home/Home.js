import React from 'react';
import IntroPicsCarousel from '../carousel/IntroPicsCarousel'
import Comps from '../comps/Comps'
import IntroStats from '../introStats/IntroStats'
import DetailedStats from '../detailedStats/DetailedStats'
import './home.css'
import FormControl from '../contactForm/FormControl'

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


            <div className="home_paragraph-container">
                <p>
                Experience coastal living in a single family home located in the gated
                    community of Jarvis Creek Club.
                    
                </p>

                <p>
                    <a  data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Continue reading
                    </a>
         
                </p>
                <div className="collapse" id="collapseExample">
                    <div>
                     This home offers brightness with a large spacious
                    living area accented with plantation shutters. Hardwood floors and stairway enhance the
                    homes many features. Tiled kitchen floor with granite countertops and designer
                    appliances round out this open concept main level. Upstairs includes 3 BD, Master BD
                    w/ensuite &amp; walk-in closet. Two covered decks &amp; patio overlook pond w/fountain for
                    your relaxation. Extensive landscape surrounding the home makes it a must see.
                    </div>
                </div>

            </div>

            <IntroStats/>

            <DetailedStats/>

            <Comps/>
            
            <FormControl/>

        </div>
    );
}

export default Home;
