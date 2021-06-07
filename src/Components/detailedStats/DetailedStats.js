import React from 'react';
import './detailedStats.css'

const DetailedStats = () => {
    return (
        <div className="card home_card">
                <div className="card-header" id='card-title'>
                    Interior Features
                </div>
                <div className="card-body">

                    <div className="features">

                        <div className="features-column-one">
                            <div id='card-title'>Bathroom Information</div>
                                <ul>
                                    <li id='card-li'># of Full Bathrooms: 2</li>
                                </ul>
                            <div id='card-title'>Room Information</div>
                                <ul>
                                    <li id='card-li'># of Rooms (Total): 5</li>
                                </ul>

                            <div id='card-title'>Laundry Information</div>
                                <ul>
                                    <li id='card-li'>Features: Laundry Room</li>
                                </ul>

                        </div>

                        <div className="features-column-two">
                            <div id='card-title'>Equipment</div>
                                <ul>
                                    <li id='card-li'>Appliances: Electric Appliances, Dishwasher, Electric Water Heater, Disposal, Oven, Refrigerator w/Ice Maker, Range </li>
                                </ul>

                            <div id='card-title'>Interior Features</div>
                                <ul>
                                    <li id='card-li'>Window Features: Double Pane Windows</li>
                                    <li id='card-li'>Other Features: Attic, Breakfast Bar, Breakfast Area, Ceiling Fan(s), Double Vanity, Garden Tub, Master Suite, Pantry, Pull Down Attic Stairs, Separate Shower</li>
                                </ul>

                        </div>
                    </div>
                </div>

                <div className="card-header" id='card-title'>
                    Exterior Features
                </div>
                <div className="card-body">

                    <div className="features">

                        <div className="features-column-one">
                            <div id='card-title'>Siding</div>
                                <ul>
                                    <li id='card-li'>Fiber-Cement Siding</li>
                                </ul>

                            <div id='card-title'>Sprinkler System</div>
                                <ul>
                                    <li id='card-li'>Sprinkler System Surrounding House</li>
                                </ul>

                        </div>

                        <div className="features-column-two">
                            <div id='card-title'>Decks</div>
                                <ul>
                                    <li id='card-li'>Private Master Deck</li>
                                    <li id='card-li'>2 Open Decks & Stone Patio</li>
                                    <li id='card-li'>Both Decks Include Finished Wood Covered Ceilings</li>
                                    <li id='card-li'>Hose Faucets on Both Decks</li>
                                </ul>
                        </div>
                    </div>
                </div>


                <div className="card-header" id='card-title'>
               Parking / Garage
                </div>
                <div className="card-body">

                    <div className="features">

                        <div className="features-column-one">
                            <div id='card-title'>Garage/Carport Information</div>
                                <ul>
                                    <li id='card-li'>Has Garage</li>
                                    <li id='card-li'># of Garage Spaces: +2</li>
                                </ul>

                        </div>

                        <div className="features-column-two">
                            <div id='card-title'>Parking</div>
                                <ul>
                                    <li id='card-li'>Features: Attached</li>
                                    <li id='card-li'>Oversized Tandem Parking</li>
                                </ul>
                             
                            

                        </div>
                    </div>
                </div>


                <div className="card-header" id='card-title'>
                    Homeowners Association, School / Neighborhood, Location Details
                </div>
                <div className="card-body">

                    <div className="features">

                        <div className="features-column-one">
                            <div id='card-title'>HOA Information</div>
                                <ul>
                                    <li id='card-li'>Has Home Owners Association</li>
                                    <li id='card-li'>Association Fee: $1,250</li>
                                    <li id='card-li'>Annually</li>
                                </ul>
                            <div id='card-title'>School</div>
                                <ul>
                                    <li id='card-li'>Middle Or Junior School: Hilton Head Island Middle School</li>
                                    <li id='card-li'>High School: Hilton Head H.S.</li>
                                </ul>

                        </div>

                        <div className="features-column-two">
                            <div id='card-title'>Community Information</div>
                                <ul>
                                    <li id='card-li'>Community Features: Gated Community, Community Pool, and Walking/Biking Trails Nearby</li>
                                </ul>

                        </div>
                    </div>
                </div>

                <div className="card-header" id='card-title'>
                Utilities
                </div>
                <div className="card-body">

                    <div className="features">

                        <div className="features-column-one">
                            <div id='card-title'>Heating & Cooling</div>
                                <ul>
                                    <li id='card-li'>Has Cooling</li>
                                    <li id='card-li'>Cooling: Central Air, Electric</li>
                                    <li id='card-li'>Has Heating</li>
                                    <li id='card-li'>Heating: Central, Electric</li>
                                </ul>
                      

                        </div>

                        <div className="features-column-two">
                            <div id='card-title'>Utility Information</div>
                                <ul>
                                    <li id='card-li'>Utilities: Cable Available, Underground Utilities</li>
                                    <li id='card-li'>Sewer: Public Sewer</li>
                                    <li id='card-li'>Water Source: Public</li>
                                </ul>

                    

                        </div>
                    </div>
                </div>

                <div className="card-header" id='card-title'>
                Property / Lot Details
                </div>
                <div className="card-body">

                    <div className="features">

                        <div className="features-column-one">
                            <div id='card-title'>Lot Information</div>
                                <ul>
                                    <li id='card-li'>Lot Size: 4,443 sq. ft.</li>
                                    <li id='card-li'>Lot Features: Back Yard, Private</li>
                                    <li id='card-li'>Driveway Type: Concrete</li>
                                    <li id='card-li'>Road Surface Type: Asphalt</li>
                                </ul>
                      

                        </div>

                        <div className="features-column-two">
                            <div id='card-title'>Property Information</div>
                                <ul>
                                    <li id='card-li'>Has View of Pond w/ Fountain</li>
                                    <li id='card-li'>Foundation Details: Slab</li>
                                    <li id='card-li'>Ownership: Homeowner/Owner</li>
                                </ul>

                    

                        </div>
                    </div>
                </div>
            </div>
    );
}

export default DetailedStats;
