import React from 'react'
import { Field , ErrorMessage} from 'formik'
import TextError from './texterror'


function Input(props) {
    const { label, name, ...rest } = props
    return (
        <div className='divs' >
            <label htmlfor={name}>{label}</label>
            <Field id={name} name={name} {...rest} /> 
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Input 