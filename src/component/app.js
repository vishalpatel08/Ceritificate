import React from 'react'
import FormikContainer from './FormikContainer'
import YtForm from './Form1'
import RegForm from './RegForm'
import LoginForm from './EventReg'
import EnrlForm from './EnrollmentForm'
import Landing4 from './Certi_F'
import { theme, ThemeProvider } from '@chakra-ui/core'

function APP(){
    return(
        <ThemeProvider theme={theme} >
        <div className="App">
            {/* <FormikContainer /> */}
            {/* <YtForm /> */}
            {/* <LoginForm /> */}
            <Landing4 />
            {/* <RegForm /> */}
            {/* <EnrlForm /> */}
        </div>
        </ThemeProvider>
    )
}

export default APP


