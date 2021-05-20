

export default function validation(values) {
    let errors = {};


    if (!values.name) {
        errors.name = 'Name required'
    }
  
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }

    if (!values.message) {
        errors.message = 'Message required'
    }
 
  

    return errors;
  }


