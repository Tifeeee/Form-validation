import { useFormik } from 'formik'
import React from 'react'
import * as yup from 'yup'

const SignUp = () => {
    let formik = useFormik({
        initialValues:{
            firstname: "",
            lastname: "",
            email:"",
            password:"",
        },
        onSubmit:(values)=>{
            console.log(values);
            
        },
        validationSchema: yup.object({
            firstname: yup.string().required("First name is required!"),
            lastname: yup.string().required("Last name is required!"),
            email: yup.string().required("Email is required!").email("Kindly enter a valid email address!"),
            password: yup.string().required("Password is required!"),  
        })
    })
    console.log(formik.errors);

    // console.log(formik.values);

  return (
    <>
    <div className='myContainer'>
        <h1>Form Validation</h1>
    <form onSubmit={formik.handleSubmit}>
    <input type="text" placeholder='First name' name='firstname' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
    <small >{formik.touched.firstname && formik.errors.firstname}</small>
    <input type="text" placeholder='Last name' name='lastname' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
    <small >{formik.touched.lastname && formik.errors.lastname}</small>
    <input type="text" placeholder='Email' name='email' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
    <small >{formik.touched.email && formik.errors.email}</small>
    <input type="text" placeholder='Password' name='password' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
    <small >{formik.touched.password && formik.errors.password}</small>
    <button type='submit'>Submit</button>
    </form>
    </div>
    
    </>
  )
}

export default SignUp