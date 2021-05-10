import React from 'react';
import JarvisCarousel from '../carousel/carousel'
import './home.css'

const Home = () => {
    return (
        <div>
            <div className='home_carousel'>
                <JarvisCarousel/>
            </div>
            <div className='home_info_container'>
                <div className='home_quick-stats'>
                    <div className="address">
                        15 Jarvis Creek Lane, Hilton Head, SC 29926
                    </div>

                    <div className="stat_row">

                        <div className="price">
                            $550,000
                        </div>
                        <div className="bed">
                            3
                        </div>
                        <div className="bath">
                            2
                        </div>
                        <div className="square_feet">
                            5,555
                        </div>
                    </div>
                    <div className="label_row">

                        <div className="price">
                            Price
                        </div>
                        <div className="bed">
                            Beds
                        </div>
                        <div className="bath">
                            Baths
                        </div>
                        <div className="square_feet">
                            Sq Ft
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Home;
