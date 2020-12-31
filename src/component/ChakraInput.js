import React from 'react'
import { Field } from 'formik'
import {
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Stack
    }  from '@chakra-ui/core'
    
function ChakraInput (props) {
    const { name, label, ...rest } = props
    return ( 
        <div className='divs'>
        <Field name={name} >
            {
                ({ field, form}) => {
                    return <FormControl isInvalid={form.errors[name] && form.touched[name]} >
                        {/* <FormLabel htmlFor={name}>{label}</FormLabel> */}
                        <Input  variant='filled' id={name} {...rest} {...field} placeholder={label} />  
                        <FormErrorMessage > {form.errors[name] } </FormErrorMessage>
                    </FormControl>
                }
            }
        </Field>
        </div>
    )
}



export default ChakraInput
