import React from 'react'
import { Formik, Form } from 'formik'
import FormikControl from './FormikControl'
import * as Yup from 'yup'

function RegForm () {
    const options = [
        {key : 'Email', value: 'emailmoc'},
        {key : 'Phone', value: 'tphone'}
    ]
    const initialValues = {
        email : '',
        password : '',
        cpassword : '',
        moc : '',
        phone : ''
    }

    const validationSchema = Yup.object({
        email : Yup.string().email('Invalid email !!').required('Required !'),
        password : Yup.string().required(' Required password'),
        cpassword : Yup.string().oneOf([Yup.ref('password'), ''], 'Password must be same ').required('Confirmation Required !!'),
        moc : Yup.string().required(' MOC Required !!'),
        phone : Yup.string().when('moc', {
            is : 'tphone',
            then: Yup.string().required(' Phone num required ')
        })
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
                     control = 'input'
                     type = 'password'
                     name = 'password'
                     label = 'Password'
                    />
                    <FormikControl 
                     control = 'input'
                     type = 'password'
                     name = 'cpassword'
                     label = 'Confirm_Password'
                     />
                    <FormikControl 
                     control = 'radio'
                     name = 'moc'
                     label = 'Mode_Of_Contact'
                     options={options}
                    />
                    <FormikControl 
                     control = 'input'
                     type = 'text'
                     name = 'phone'
                     label = 'Contact_Number'
                     />
                    <button type='submit' disabled={!formik.isValid}>
                        Submit
                    </button>

                </Form> )
            }
        } 
    </Formik> )
}

export default RegForm