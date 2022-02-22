import React from 'react';
import './App.css';
import { useFormik} from 'formik'

// test for valid email is from http://zparacha.com/validate-email-address-using-javascript-regular-expression
function validateEmail(elementValue){      
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(elementValue); 
} 

function App() {
  const formik = useFormik({
    initialValues: {
      emailField: '',
      pswField: ''      
    },
    onSubmit: values =>{
      console.log('form:',values);
      alert("Login Successful");
    },
    validate: values =>{
      let errors = {};
      if(!values.emailField) errors.emailField = 'Field required';
      else if(!validateEmail(values.emailField)) errors.emailField = 'Username should be an email';

      if(!values.pswField) errors.pswField = 'Field Required';
      return errors;
    }
  });
  
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email:</div>
        <input id="emailField" type="text" name="emailField" onChange={formik.handleChange} value={formik.values.emailField}/>
        {formik.errors.emailField ? <div id="emailError" style={{color:'red'}}>{formik.errors.emailField}</div> : null}

        <div>Password:</div>
        <input id="pswField" type="text" name="pswField" onChange={formik.handleChange} value={formik.values.pswField}/><br/>
        {formik.errors.pswField ? <div id="pswError" style={{color:'red'}}>{formik.errors.pswField}</div> : null}
        
        <button id="submitBtn" type="submit">Submit</button>
      </form>      
    </div>
  );
}

export default App;
