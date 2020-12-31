import React from 'react'
import { Formik, Form } from 'formik'
import FormikControl from './FormikControl'
import * as Yup from 'yup'

function EnrlForm () {
    const Dropoptions = [
        {key : 'Select Course', value: ''},
        {key : 'React', value: 'react'},
        {key : 'Angular', value: 'angular'},
        {key : 'PHP', value: 'php'}
    ]

    const chbxOptions = [
        {key: 'HTML', value :'html'},
        {key : 'CSS', value: 'css'},
        {key : 'JavaScript', value: 'js'}
    ]
    const initialValues = {
        email : '',
        bio : '',
        course : '',
        skills : [], 
        cDate : null
    }

    const validationSchema = Yup.object({
        email : Yup.string().email('Invalid email !!').required('Required !'),
        bio :  Yup.string().required('Required !!'),
        course : Yup.string().required('Required !!'),
         cDate : Yup.string().required('Required !!').nullable()
    })

    const onSubmit = values =>  {
        console.log(' Form data ', values)
    }

    return (
    <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit} >
        {
            formik => {
                return (
                <Form>
                     <FormikControl 
                     control = 'input'
                     type = 'email'
                     name = 'email'
                     label = 'Gmail'
                     />
                    <FormikControl 
                     control = 'textarea' 
                     name = 'bio'
                     label = 'Bio'
                    />
                    <FormikControl 
                     control = 'select'
                     name = 'course'
                     label = 'Course'
                     options = { Dropoptions}
                     />
                    <FormikControl 
                     control = 'checkbox'
                     name = 'skills'
                     label = 'Skills'
                     options={chbxOptions}
                    />
                    <FormikControl 
                     control = 'date'
                     name = 'cDate'
                     label = 'Date'
                     />
                    <button type='submit' disabled={!formik.isValid}>
                        Submit
                    </button>

                </Form> )
            }
        } 
    </Formik> )
}

export default EnrlForm