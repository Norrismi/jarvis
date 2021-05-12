import React from 'react';
import JarvisCarousel from '../carousel/carousel'
import './home.css'

const Home = () => {
    return (
        <div className='home_container'>
            <div className='home_carousel'>
                <JarvisCarousel />
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Massa enim nec dui nunc mattis enim ut tellus. Eu non diam phasellus vestibulum lorem.
                    
                </p>

                <p>
                    <a  data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Continue reading
                    </a>
         
                </p>
                <div class="collapse" id="collapseExample">
                    <div>
                    Aliquam faucibus purus in massa tempor nec feugiat nisl. Iaculis urna id volutpat lacus laoreet. Sed enim ut sem
                    viverra aliquet eget sit. Massa id neque aliquam vestibulum morbi. Convallis posuere morbi leo urna. Molestie at
                    elementum eu facilisis sed odio morbi. Tempus iaculis urna id volutpat. Sit amet porttitor eget dolor morbi non.
                    Dolor sed viverra ipsum nunc aliquet bibendum. Laoreet id donec ultrices tincidunt arcu non sodales neque. Fermentum
                    odio eu feugiat pretium. Sit amet consectetur adipiscing elit pellentesque habitant morbi.
                    </div>
                </div>

            </div>

            <div className="home_stat-container-two">
                    <div className="home_stat-title">
                        <b>Home Facts</b>
                    </div>
                    <div className="stat-two-row">
                        <div className="stat-column">

                            <div className="status">
                                <div id='stat_name'>Status</div>
                                <div>Active Off Market</div>
                                
                            </div>
                            <div className="prop-type">
                                <div id='stat_name'>Property Type</div>
                                <div>Single Family Residential</div>
                              
                            </div>
                            <div className="year-built">
                                <div id='stat_name'>Year Built</div>
                                <div>0000</div>
                               
                            </div>
                            <div className="community">
                                <div id='stat_name'>Community</div>
                                <div>Jarvis Creek Club</div>
                                
                            </div>
                        </div>
                        <div className="stat-column">

                            <div className="hoa">
                                <div id='stat_name'>HOA Dues</div>
                                <div>$000.00/month</div>
                                
                            </div>
                            <div className="style">
                                <div id='stat_name'>Style</div>
                                <div>House near the beach</div>
                                
                            </div>
                            <div className="lot-size">
                                <div id='stat_name'>Lot Size</div>
                                <div>00000 Sq. Ft.</div>
                                
                            </div>
                        </div>
                    </div>
            </div>


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
                                    <li id='card-li'>Appliances: Some Electric Appliances, Dishwasher, Electric Water Heater, Disposal, Oven, Plumbed For Ice Maker, Range, Range Hood</li>
                                </ul>

                            <div id='card-title'>Interior Features</div>
                                <ul>
                                    <li id='card-li'>Window Features: Double Pane Windows</li>
                                    <li id='card-li'>Other Features: Attic, Breakfast Bar, Breakfast Area, Tray Ceiling(s), Ceiling Fan(s), Double Vanity, Garden Tub/Roman Tub, High Ceilings, Main Level Master, Master Suite, Pantry, Pull Down Attic Stairs, Separate Shower</li>
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
                                    <li id='card-li'># of Garage Spaces: 2</li>
                                </ul>

                        </div>

                        <div className="features-column-two">
                            <div id='card-title'>Parking</div>
                                <ul>
                                    <li id='card-li'>Features: Attached</li>
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
                                    <li id='card-li'>Association Fee: $*********</li>
                                    <li id='card-li'>Annually</li>
                                </ul>
                            <div id='card-title'>School</div>
                                <ul>
                                    <li id='card-li'>Elementary School: Gould</li>
                                    <li id='card-li'>Middle Or Junior School: West Chatham</li>
                                    <li id='card-li'>High School: Beach</li>
                                </ul>

                        </div>

                        <div className="features-column-two">
                            <div id='card-title'>Community Information</div>
                                <ul>
                                    <li id='card-li'>Community Features: Clubhouse, Community Pool, Shopping, Street Lights, Sidewalks, Trails/Paths</li>
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
                            <div id='card-title'>Utility Information</div>
                                <ul>
                                    <li id='card-li'>Utilities: Cable Available, Underground Utilities</li>
                                    <li id='card-li'>Sewer: Public Sewer</li>
                                    <li id='card-li'>Water Source: Public</li>
                                </ul>
                      

                        </div>

                        <div className="features-column-two">
                            <div id='card-title'>Heating & Cooling</div>
                                <ul>
                                    <li id='card-li'>Has Cooling</li>
                                    <li id='card-li'>Cooling: Central Air, Electric</li>
                                    <li id='card-li'>Has Heating</li>
                                    <li id='card-li'>Heating: Central, Electric</li>
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
                                    <li id='card-li'>Lot Size Area: 0.19</li>
                                    <li id='card-li'>Lot Size Acres: 0.19</li>
                                    <li id='card-li'>Lot Size Dimensions: 60 x 110</li>
                                    <li id='card-li'>Lot Features: Back Yard, Private</li>
                                    <li id='card-li'>Road Surface Type: Asphalt</li>
                                </ul>
                      

                        </div>

                        <div className="features-column-two">
                            <div id='card-title'>Property Information</div>
                                <ul>
                                    <li id='card-li'>Has View</li>
                                    <li id='card-li'>Foundation Details: Slab</li>
                                    <li id='card-li'>Development Status: Under Construction</li>
                                    <li id='card-li'>Under Construction</li>
                                    <li id='card-li'>Ownership: Homeowner/Owner</li>
                                    <li id='card-li'>Is Human Modified</li>
                                </ul>

                    

                        </div>
                    </div>
                </div>


                



            </div>






        </div>
    );
}

export default Home;
