import React from 'react'

// import Input from './Input'
// import Select from './Select'
// import TextArea from './TextArea'
// import RadioButtons from './RadioButtons'
// import CheckBox from './CheckBox'
// import DatePicker from './DatePicker'

import ChakraInput from './ChakraInput'
import ChakraInput2 from './ChakraInput2'



function FormikControl (props){
    const { control, ...rest } = props
    switch (control){

        // case 'input' : return <Input {...rest} />
        // case 'textarea': return <TextArea {...rest} />
        // case 'select': return <Select {...rest} />
        // case 'radio': return <RadioButtons {...rest} />
        // case 'date': return<DatePicker {...rest} />
        // case 'checkbox':return <CheckBox {...rest} />
        
        case 'chakrainput' : return <ChakraInput {...rest} />
        case 'chakrainput2' : return <ChakraInput2 {...rest} />
        default : return null
    }
}

export default FormikControl