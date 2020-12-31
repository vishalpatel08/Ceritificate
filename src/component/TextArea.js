import React from 'react'
import TextError from './texterror'
import { Field , ErrorMessage } from 'formik'

function TextArea (props) {
    const { label, name, ...rest} = props
    return (
        <div className='divs'>
            <label htmlFor={name}>{label}</label>
            <Field as='textarea' name={name} id={name} {...rest} />
            <ErrorMessage name={name} component={TextError} /> 
        </div>
    )
}
export default TextArea