import React from 'react';
import pdf from '../../Assets/Jarvis Creek Neighborhood .pdf'

const Pdfdownload = () => {
    return (
        <div>

            <a href=' #' target="_blank" download={pdf}>
                <button>
                    PDF of House Info
                </button>
            </a>
        </div>
    );
}

export default Pdfdownload;
