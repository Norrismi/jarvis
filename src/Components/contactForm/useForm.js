import { useState, useEffect } from 'react';
import { db } from '../../firebase'
import firebase from "firebase/app";
import emailjs from 'emailjs-com'


const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };



    const handleSubmit = e => {
        e.preventDefault();

        const { name, phone, email, message } = values

        const YOUR_SERVICE_ID = process.env.REACT_APP_EmailJS_YOUR_SERVICE_ID;
        const YOUR_TEMPLATE_ID = process.env.REACT_APP_EmailJS_YOUR_TEMPLATE_ID;
        const YOUR_USER_ID = process.env.REACT_APP_EmailJS_YOUR_USER_ID;

        let templateParams = {
            name,
            message,
            email,
            phone,
        }

        emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams, YOUR_USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });




        console.log(Object.keys(errors))

        setErrors(validate(values));

        db.collection('submission').add({
            ...values,
            messageSent: firebase.firestore.FieldValue.serverTimestamp()
        })


        setIsSubmitting(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();

        }
    },
        [errors]
    );

    return { handleChange, handleSubmit, values, errors };
};

export default useForm;
