import { Formik, Form } from 'formik'
import React from 'react'
import FormikControl from './FormikControl'
import * as Yup from 'yup'

function LoginForm () {
    const initialValues = {
        email : '',
        name : 'vishal',
        city : '',
        cname : '',
        yop : '',
        sfid : '',
        phone : ''
    }
 
    const validationSchema = Yup.object({
        email : Yup.string().email('Invalid Email Formate !!!').required(' Email Required'),
        name : Yup.string().required(' Name Required !'),
        city : Yup.string().required(' City Required !'),
        cname : Yup.string().required(' Collage Name Required !'),
        yop : Yup.string().required(' Year Of Passing Required !'),
        phone : Yup.string().required(' Contact Number Required !'),

    })
    const onSubmit =  values => {
        console.log(' Form data', values )
        
    }
    return ( 
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {
            formik =>  {
                return <Form>
                <FormikControl 
                control = 'chakrainput'
                type='text'
                label='Name'
                name='name'
                />
                <FormikControl 
                control='chakrainput2'
                type='email'  
                label='EMAIL'
                name='email'
                />
                <FormikControl 
                control='chakrainput'
                type='text'
                label='City'
                name= 'city'  /> 
                <FormikControl 
                control = 'chakrainput'
                type='text'
                label='Collage name'
                name='cname'
                />
                <FormikControl 
                control = 'chakrainput'
                type='number'
                label='Year of passing'
                name='yop'
                />
                <FormikControl 
                control = 'chakrainput2'
                type='number'
                label='Contact no.'
                name='phone'
                />
                <FormikControl 
                control = 'chakrainput'
                type='text'
                label='SF ID Of Campus Ambassador (Optional)'
                name='sfid'
                />
                <button type='submit'  disabled={!formik.isValid}> Submit </button>
            </Form>
            }
        }
    </Formik>
    )
}

export default LoginForm