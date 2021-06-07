import React from 'react';
import './introStats.css'

const IntroStats = () => {
    return (
        <div className="home_stat-container-two">
            <div className="home_stat-title">
                <b>Home Facts</b>
            </div>
            <div className="stat-two-row">
                <div className="stat-column">

                    <div className="stat_container">
                        <div id='stat_name'>Status</div>
                        <div>Active Off Market</div>

                    </div>
                    <div className="stat_container">
                        <div id='stat_name'>Property Type</div>
                        <div>Single Family Residential</div>

                    </div>
                    <div className="stat_container">
                        <div id='stat_name'>Year Built</div>
                        <div>2014</div>

                    </div>
                    <div className="stat_container">
                        <div id='stat_name'>Community</div>
                        <div>Jarvis Creek Club</div>

                    </div>
                </div>
                <div className="stat-column">

                    <div className="stat_container">
                        <div id='stat_name'>Featured</div>
                        <div>Gated Community</div>

                    </div>
                    <div className="stat_container">
                        <div id='stat_name'>Style</div>
                        <div>House near the beach</div>

                    </div>
                    <div className="stat_container">
                        <div id='stat_name'>Lot Size</div>
                        <div>4,443 Sq. Ft.</div>

                    </div>
                </div>
            </div>

            <div className="home_stat-title">
                <b>Featured Destination Distances</b>
            </div>
            <div className="stat-two-row">
                <div className="stat-column">

                    <div className="stat_container">
                        <div id='stat_name'>Folly Field Beach</div>
                        <div>3.4 miles</div>

                    </div>
                    <div className="stat_container">
                        <div id='stat_name'>Coligny Plaza</div>
                        <div>5.8 miles</div>

                    </div>
                    <div className="stat_container">
                        <div id='stat_name'>Publix & Walmart</div>
                        <div>1.9 miles</div>

                    </div>
            
                </div>
                <div className="stat-column">

                    <div className="stat_container">
                        <div id='stat_name'>Hilton Head Hospital</div>
                        <div>3.5 miles</div>

                    </div>
                    <div className="stat_container">
                        <div id='stat_name'>Hilton Head H.S.</div>
                        <div>1.1 miles</div>

                    </div>
                    <div className="stat_container">
                        <div id='stat_name'>Resurrection Church</div>
                        <div>0.7 miles</div>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default IntroStats;
