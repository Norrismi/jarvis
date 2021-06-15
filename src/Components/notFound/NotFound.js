import React from 'react';
import './notFound.css'

const NotFound = () => {
    return (
        <div className='nf_container'>
            404: Page Not Found
            <div className='nf_link-contianer'>
                <a
                    rel="noreferrer"
                    href='/'>
                        <button type="button" class="btn btn-secondary">Back to Home</button>
                </a>
            </div>
        </div>
    );
}

export default NotFound;


