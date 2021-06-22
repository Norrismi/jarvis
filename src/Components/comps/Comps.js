import React from 'react';
import './comps.css'
import jarvis17 from '../../Assets/comps/jarvis17.jpg'
import jarvis87 from '../../Assets/comps/87Jarvis.jpg'

const Comps = () => {
    return (
        <div className="comps_container">

            <h4 className="comps_title">Nearby Similar Homes</h4>

            <div className="comps_cards-container">
                <a className="card comps_card" 
                target="_blank" 
                rel="noreferrer" 
                href='https://www.zillow.com/homedetails/17-Jarvis-Creek-Ln-Hilton-Head-Island-SC-29926/2075310809_zpid/'>
                    <img className="card-img-top" src={jarvis17} alt="Card cap" />
                    <div className="card-body">
                        <div className="comps_price">$555,555</div>
                        <div className="comps_row-container">

                            <div className="comps_beds comps_stat">3 Beds</div>
                            <div className="comps_bath comps_stat">2 Bath</div>
                            <div className="comps_sqft comps_stat">2,000 Sq Ft.</div>
                        </div>
                        <div className="comps_address">15 Main Street, Hilton Head, SC 29926</div>
                    </div>
                </a>

                <a className="card comps_card" 
                target="_blank" 
                rel="noreferrer" 
                href='https://www.zillow.com/homedetails/87-Jarvis-Creek-Ln-Hilton-Head-Island-SC-29926/98840964_zpid/'>
                    <img className="card-img-top" src={jarvis87} alt="Card cap" />
                    <div className="card-body">
                        <div className="comps_price">$499,700</div>
                        <div className="comps_row-container">

                            <div className="comps_beds comps_stat">3 Beds</div>
                            <div className="comps_bath comps_stat">2 Bath</div>
                            <div className="comps_sqft comps_stat">1,889 Sq Ft.</div>
                        </div>
                        <div className="comps_address">87 Jarvis Creek Ln, Hilton Head, SC 29926</div>
                    </div>
                </a>


                <a className="card comps_card" target="_blank" rel="noreferrer" href='https://www.zillow.com/homedetails/17-Jarvis-Creek-Ln-Hilton-Head-Island-SC-29926/2075310809_zpid/'>
                    <img className="card-img-top" src={jarvis17} alt="Card cap" />
                    <div className="card-body">
                        <div className="comps_price">$555,555</div>
                        <div className="comps_row-container">

                            <div className="comps_beds comps_stat">3 Beds</div>
                            <div className="comps_bath comps_stat">2 Bath</div>
                            <div className="comps_sqft comps_stat">2,000 Sq Ft.</div>
                        </div>
                        <div className="comps_address">15 Main Street, Hilton Head, SC 29926</div>
                    </div>
                </a>

  

       
            </div>


        </div>
    );
}

export default Comps;
