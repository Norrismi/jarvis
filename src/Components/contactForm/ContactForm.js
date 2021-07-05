// import React from 'react';
// import emailjs from 'emailjs-com'

// const ContactForm = () => {

//     function sendEmail(e) {
//         e.preventDefault();


//         const YOUR_SERVICE_ID = process.env.REACT_APP_EmailJS_YOUR_SERVICE_ID;
//         const YOUR_TEMPLATE_ID =  process.env.REACT_APP_EmailJS_YOUR_TEMPLATE_ID;
//         const YOUR_USER_ID = process.env.REACT_APP_EmailJS_YOUR_USER_ID;

    
//         emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
//           .then((result) => {
//               console.log(result.text);
//           }, (error) => {
//               console.log(error.text);
//           });
//       }



//     return (
//         <div>
            
//         </div>
//     );
// }

// export default ContactForm;







/////////////////////////////////////////////////////////////////


import './contactForm.css'
import useForm from './useForm'
import validate from './Validation'
import emailjs from 'emailjs-com'




const ContactForm = ({submitForm}) => {

    const { handleChange, handleSubmit, values, errors } = useForm(submitForm, validate)


    function sendEmail(e) {
        e.preventDefault();


        const YOUR_SERVICE_ID = process.env.REACT_APP_EmailJS_YOUR_SERVICE_ID;
        const YOUR_TEMPLATE_ID =  process.env.REACT_APP_EmailJS_YOUR_TEMPLATE_ID;
        const YOUR_USER_ID = process.env.REACT_APP_EmailJS_YOUR_USER_ID;

    
        emailjs.sendForm('', '', e.target, '')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }


    return (
        <div className="contact-form_container">
            <h4 className="contact-form_title">Send a Comment or Question </h4>
            <form className="contact-form" 
            onSubmit={
                sendEmail 
                //handleSubmit
            }
            >
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
