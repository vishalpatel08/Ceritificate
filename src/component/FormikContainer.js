import React from 'react'
import { Formik , Form } from 'formik'
import FormikControl from './FormikControl.js'
import * as Yup from 'yup'

function FormikContainer () {
    const defOptions = [
        { key: 'Select one option', value: 'option0'},
        { key: 'Option_1', value: 'option1'},
        { key: 'Option_2', value: 'option2'},
        { key: 'Option_3', value: 'option3'}
    ]
    const chkOptions = [
        { key: 'Option_0', value: 'c_Option0'},
        { key: 'Option_1', value: 'c_Option1'},
        { key: 'Option_2', value: 'c_Option2'},
        { key: 'Option_3', value: 'c_Option3'}
    ]
    const initialValues = {
        email : '',
        description : '',
        selectOption : '',
        radioOption: '',
        CheckBox : [],
        Date : null
    }
    const validationSchema = Yup.object({
        email : Yup.string().required('Email Required !!!!'),
        description : Yup.string().required('Description Required !!!!'),
        selectOption : Yup.string().required('Requied Options'),
        radioOption :  Yup.string().required('Requied Options'),
        CheckBox : Yup.string().required('Options Required !!!'),
        Date :  Yup.string().required('Date required !!').nullable()
    })
    const onSubmit =( values )=> {
        console.log(' Form Values : ', values ) 
        console.log(' Saved Values : ', JSON.parse(JSON.stringify(values)))
    }
    return (
        <Formik
        initialValues ={initialValues}
        validationSchema = {validationSchema}
        onSubmit = {onSubmit}
        >
            {formik => (
                <Form>
                    <FormikControl  control='input' type='email' label='Email' name='email' />
                    <FormikControl control='textarea' label='Description' name='description' />
                    <FormikControl control='select' label='Select an Option' name='select' options={defOptions} />
                    <FormikControl control='radio' label='Select Radio button' name='radioOption' options={defOptions} />
                    <FormikControl control='checkbox' label='Select an Option' name='CheckBox' options={chkOptions} />
                    <FormikControl control='date' label='Choose a date' name='Date' />
                    <button type='submit' > Submit... </button>
                </Form>
            )}

        </Formik>
    )
}

export default FormikContainer