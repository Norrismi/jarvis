import React, { useState } from 'react';
import './paragraph.css'

const Paragraph = () => {


    const [readMore, setReadMore] = useState(false)

    const extraContent = <div className='paragraph_expanded'>
        Tiled kitchen floor with granite countertops and designer
        appliances round out this open concept main level. Upstairs includes 3 BD, Master BD
        w/ensuite &amp; walk-in closet. Two covered decks &amp; patio overlook pond w/fountain for
        your relaxation. Extensive landscape surrounding the home makes it a must see.
    </div>

    const linkName = readMore ? '' : 'Continue Reading';

    return (

        <div >
            <div className='paragraph_intro'>

                Experience coastal living in a single family home located in the gated community of Jarvis Creek Club.
                This home offers brightness with a large spacious
                living area accented with plantation shutters. Hardwood floors and stairway enhance the
                homes many features.
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
