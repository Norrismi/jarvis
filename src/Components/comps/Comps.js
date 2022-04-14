import React from 'react';
import './comps.css'
import Data from '../../Data'


const Comps = () => {
    return (
        <div className="comps_container">
            <h4 className="comps_title">Nearby Similar Homes</h4>

            <div className="comps_cards-container">
                {Data.map(property => (
                    <a key={property.id} className="card comps_card"
                        target="_blank"
                        rel="noreferrer"
                        href={property.href}>
                        <img className="card-img-top" src={property.src} alt="Card cap" />
                        <div className="card-body">
                            <div className="comps_price">{property.price}</div>
                            <div className="comps_row-container">

                                <div className="comps_beds comps_stat">{property.beds}</div>
                                <div className="comps_bath comps_stat">{property.baths}</div>
                                <div className="comps_sqft comps_stat">{property.sqft}</div>
                            </div>
                            <div className="comps_address">{property.address}</div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Comps;
