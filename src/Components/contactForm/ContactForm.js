import React, {useState} from 'react';
import {db} from '../../firebase'
import { useAlert } from "react-alert";
import './contactForm.css'




const ContactForm = () =>  {


    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    // const handleChange = event => {
    //     event.preventDefault();
    //     const {name, value} = event.target;
    //     let formErrors = this.state.formErrors;

    //     // switch(name){
    //     //     case "email":
    //     //         formErrors.email = emailRegex.test(value)
    //     //             ? null  
    //     //             : "Please enater a valid email address"
    //     //         break;
            
    //     //         default:
    //     //             break;
    //     // }
    //     // this.setState({ formErrors, [name]:value })
    // }

    const handleSubmit = event => {
        event.preventDefault()
        // let message =()=> {

            if(email){
                db.collection('submissions').add({
                    name: name,
                    phone: phone,
                    email: email,
                    message: message
                })
                // .then(() => {
                //     useAlert.success("Message submitted successfully!");
                // })
                // .catch((error)=>{
                //     alert(error.message);
                // })
                
                setName('')
                setPhone('')
                setEmail('')
                setMessage('')
                
            }
 
        // }
    }






        const alert = useAlert();
        // let {formErrors} = this.state
  
        return (
            <div className="contact-form_container">
                <h4 className="contact-form_title">Send a Comment or Question </h4>
                    {/* <div className="contact-form_subtitle">Send a message to the owners</div> */}
                <form className="contact-form" 
                 onSubmit={handleSubmit}
                >
                    <div className="form-name">
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e)=> setName(e.target.value)}
                            placeholder="First and Last Name"
                        />
                    </div>
                    {/* <br></br> */}
                    <div className="form-phone">
                        <input
                            type="tel"
                            name="phone"
                            value={phone}
                            onChange={(e)=> setPhone(e.target.value)}
                            placeholder="Cell Phone Number"
                        />
                    </div>
                    {/* {formErrors.phone ? <span>{formErrors.phone}</span> : null} */}
                    {/* <br></br> */}
                    <div className="form-email ">
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            placeholder = "Name@email.com"
                            aria-describedby="emailHelp"
                            required
                        />
                    </div>
                    {/* {formErrors.email ? <span>{formErrors.email}</span> : null} */}
                    <div className="form-message">
                        <textarea
                            name="message"
                            value={message}
                            onChange={(e)=> setMessage(e.target.value)}
                            placeholder="I'd like to know more about 15 Jarvis Creek Lane."
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <button className="contact-form_button " type="submit"
                             onClick={ 
                                handleSubmit
                                //  message()
                             
                              }
                    >Ask a Question</button>
                </form>
            </div>
        );
 
}

export default ContactForm;
