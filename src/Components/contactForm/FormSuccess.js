import React from 'react';
import mailPic from '../../Assets/m-sent.png'
import './formSuccess.css'

const FormSuccess = () => {
    return (
        <div className ='success_container'>
            <div className='success_pic-container'>
                <img className='success_pic' src={mailPic} alt="message successfully sent" />
            </div>
            Your message was successfully submitted! 
        </div>
    );
}

export default FormSuccess;
