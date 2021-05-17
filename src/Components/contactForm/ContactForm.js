import React, { Component } from 'react';
import {db} from '../../firebase'
import {useAlert} from 'react-alert'


let emailRegex =  RegExp(/[^@]+@[^.]+\..+/);


class ContactForm extends Component {

    state = {
        name: '',
        phone: '',
        email:'',
        message: '',
        formErrors: []
    }


    handleChange = event => {
        event.preventDefault();
        const {name, value} = event.target;
        let formErrors = this.state.formErrors;

        // switch(name){
        //     case "email":
        //         formErrors.email = emailRegex.test(value)
        //             ? null  
        //             : "Please enater a valid email address"
        //         break;
            
        //         default:
        //             break;
        // }
        // this.setState({ formErrors, [name]:value })
    }

    handleSubmit = event => {
        event.preventDefault()
        const {name, phone, email, message} = this.state

        if(email){
          db.collection('submissions').add({
              name: name,
              phone: phone,
              email: email,
              message: message
          })
          .then(() => {
            useAlert.success("Message submitted successfully!");
          })
        //   .catch((error)=>{
        //     useAlert.error("Please make sure all fields are completed!");
        //   })

 
        }
    }





    render() {
       
        let {formErrors} = this.state
        console.log(this.state)
        return (
            <div className="contact-form_container">
                <h4 className="contact-form_title">Send a Comment or Question </h4>
                    <div className="contact-form_subtitle">Send a message to the owner's Beckey and Mike Norris</div>
                <form className="contact-form" onSubmit={this.handleSubmit}>
                    <div className="form-name">
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            placeholder="Fist and Last Name"
                        />
                    </div>
                    <br></br>
                    <div className="form-phone">
                        <input
                            type="tel"
                            name="phone"
                            value={this.state.phone}
                            onChange={this.handleChange}
                            placeholder="Cell Phone Number"
                        />
                    </div>
                    {/* {formErrors.phone ? <span>{formErrors.phone}</span> : null} */}
                    <br></br>
                    <div className="form-email ">
                        <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder="Name@email.com"
                            aria-describedby="emailHelp"
                            // required
                        />
                    </div>
                    {/* {formErrors.email ? <span>{formErrors.email}</span> : null} */}
                    <div className="form-message">
                        <textarea
                            name="message"
                            value={this.state.message}
                            onChange={this.handleChange}
                            placeholder="I'd like to know more about 15 Jarvis Creek Lane."
                            rows="20"
                            required
                        ></textarea>
                    </div>
                    <button className="contact-form_button  btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default ContactForm;
