import { useFormik } from 'formik'
import React, { FC } from 'react'
import * as Yup from "yup";
import './Signup.css'
const Signup:FC = () => {
    const formik=useFormik({
        initialValues:{
            firstName:"",
            lastName:"",
            email:""
        },
        validationSchema:Yup.object({
            firstName:Yup.string().max(15,"Must be 15 characters or less").required("required"),
            lastName:Yup.string().max(15,"Must be 15 characters or less").required("required"),
            email:Yup.string().email("invalid email address").required("required")
        }),
        onSubmit:(values)=>{
            console.log(values);
            
        }
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="input-container">
                <input id="firstName"
                name="firstName"
                placeholder="first Name"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                onBlur={formik.handleBlur}
                type="text"/>
                {formik.touched.firstName &&formik.errors.firstName?<p>{formik.errors.firstName}</p>:null}
            </div>
            <div className="input-container">
                <input id="lastName"
                name="lastName"
                placeholder="last Name"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                onBlur={formik.handleBlur}
                type="text"/>
                {formik.touched.lastName && formik.errors.lastName?<p>{formik.errors.lastName}</p>:null}
            </div>
            <div className="input-container">
                <input id="email"
                name="email"
                placeholder="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                type="text"/>
                {formik.touched.email && formik.errors.email?<p>{formik.errors.email}</p>:null}
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Signup
