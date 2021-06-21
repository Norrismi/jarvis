import { useState, useEffect, useCallback } from 'react';
import { db } from '../../firebase'
import firebase from "firebase/app";


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
