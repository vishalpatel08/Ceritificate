import React from 'react'
import { Field, ErrorMessage} from 'formik'
import TextError from './texterror'
import DateView from 'react-date-picker'


function DatePicker (props) {
    const { label, name, ...rest} = props
    return (
        <div className='divs'>
            <label htmlFor={name}>{label}</label>
            <Field name={name}>
                {
                    ({form, field}) => {
                        const { setFieldValue } = form
                        const { value } = field
                        return( <DateView id={name} {...field} {...rest} selected={value}  onChange={value => setFieldValue( name, value)} /> ) 
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default DatePicker