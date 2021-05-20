import React from 'react';
import { useAlert } from "react-alert";
import './contactForm.css'
import useForm from './useForm'
import validate from './Validation'




const ContactForm = ({submitForm}) => {

    const { handleChange, handleSubmit, values, errors } = useForm(submitForm, validate)


    const alert = useAlert();
    // let {formErrors} = this.state

    return (
        <div className="contact-form_container">
            <h4 className="contact-form_title">Send a Comment or Question </h4>
            {/* <div className="contact-form_subtitle">Send a message to the owners</div> */}
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-name">
                    <input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        placeholder="First and Last Name"
                    />
                     {errors.name && <div>{errors.name}</div>}
                </div>
       
                <div className="form-phone">
                    <input
                        type="tel"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        placeholder="Cell Phone Number"
                    />
                </div>
    
                <div className="form-email ">
                    <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        placeholder="Name@email.com"
                        aria-describedby="emailHelp"
                    />
                   {errors.email && <div>{errors.email}</div>}
                </div>

                <div className="form-message">
                    <textarea
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        placeholder="I'd like to know more about 15 Jarvis Creek Lane."
                        rows="5"
                    ></textarea>
                </div>
                <button className="contact-form_button " type="submit">Ask a Question</button>
            </form>
        </div>
    );

}

export default ContactForm;
