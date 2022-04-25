import './contactForm.css'
import useForm from './useForm'
import validate from './Validation'


const ContactForm = ({submitForm}) => {

    const { handleChange, handleSubmit, values, errors } = useForm(submitForm, validate)

    return (
        <div className="contact-form_container">
            <h4 className="contact-form_title">Submit Your Offer</h4>
            <form className="contact-form" 
            onSubmit={handleSubmit}>
                <div className="form-name">
                    <input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        placeholder="First and Last Name"
                    />
                     {errors.name && <div className="formError">{errors.name}</div>}
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
                        {errors.email && <div className="formError">{errors.email}</div>}
                </div>

                <div className="form-message">
                    <textarea
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        placeholder="Submit your offer or ask a question"
                        rows="5"
                    ></textarea>
                </div>
                <button className="contact-form_button " type="submit">Submit Offer</button>
            </form>
        </div>
    );

}

export default ContactForm;
