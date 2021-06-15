import React, { useState } from 'react';
import './paragraph.css'

const Paragraph = () => {


    const [readMore, setReadMore] = useState(false)

    const extraContent = <div className='paragraph_expanded'>
         The spacious open living floor plan is enhanced with hardwood floors and plantation shutters. 
         The second level includes a master bedroom connected to a private covered deck and a luxury bath/walk in closet. 
         Accessible to laundry room on second floor for convenience. Oversized garage provides plenty of space for cars, boats or bicycles. 
         This immaculate home is a must see, and is move in ready.

    </div>

    const linkName = readMore ? '' : 'Continue Reading';

    return (

        <div >
            <div className='paragraph_intro'>

            Welcome to Jarvis Creek Club a gated community where 15 Jarvis Creek Lane is conveniently situated near the front entrance. 
            This beautiful home offers several upgrades: including kitchen w/tiled floor, granite countertops and SS appliances.
            </div>


            <a href='#/'
                className='paragraph_read-link'
                onClick={() => { setReadMore(!readMore) }}>
                <h5 className='paragraph_read-h5'>{linkName}</h5>
            </a>
            {readMore && extraContent}
        </div>

    );
}

export default Paragraph;
