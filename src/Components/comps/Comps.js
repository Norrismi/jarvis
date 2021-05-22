import React from 'react';
import './comps.css'
import jarvis17 from '../../Assets/comps/17Jarvis.jpg'

const Comps = () => {
    return (
        <div className="comps_container">

            <h4 className="comps_title">Nearby Similar Homes</h4>

            <div className="comps_cards-container">

                <div className="card comps_card" >
                    <img className="card-img-top" src={jarvis17} alt="Card image cap" />
                    <div className="card-body">
                        <div className="comps_price">$555,555</div>
                        <div className="comps_row-container">

                            <div className="comps_beds comps_stat">3 Beds</div>
                            <div className="comps_bath comps_stat">2 Bath</div>
                            <div className="comps_sqft comps_stat">2,000 Sq Ft.</div>
                        </div>
                        <div className="comps_address">15 Main Street, Hilton Head, SC 29926</div>
                    </div>
                </div>

                <div className="card comps_card" >
                    <img className="card-img-top" src={jarvis17} alt="Card image cap" />
                    <div className="card-body">
                        <div className="comps_price">$555,555</div>
                        <div className="comps_row-container">

                            <div className="comps_beds comps_stat">3 Beds</div>
                            <div className="comps_bath comps_stat">2 Bath</div>
                            <div className="comps_sqft comps_stat">2,000 Sq Ft.</div>
                        </div>
                        <div className="comps_address">15 Main Street, Hilton Head, SC 29926</div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Comps;
