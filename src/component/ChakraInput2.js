import React from 'react'
import { Field } from 'formik'
import {
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    InputGroup,
    InputLeftElement,
    Icon
    }  from '@chakra-ui/core'

function ChakraInput2 (props) {
    const { name, label, ...rest } = props
    return ( 
        <div className='divs2'>
        <Field name={name} >
            {
                ({ field, form}) => {
                    return <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                        {/* <FormLabel htmlFor={name}> {label} </FormLabel> */}
                        <InputGroup>
                            <InputLeftElement children={<Icon name={name} color="blue.200" />} />
                            <Input id={name} {...rest} {...field} placeholder={label}/>    
                        </InputGroup>
                        <FormErrorMessage > {form.errors[name] } </FormErrorMessage>
                    </FormControl>
                }
            }
        </Field>
        </div>
    )
}

export default ChakraInput2