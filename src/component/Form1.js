import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray ,FastField } from 'formik'
import  * as Yup from 'yup'
import TextError from './texterror'


const validationSchema = Yup.object({
     name : Yup.string().required('Required !!!') ,
     email : Yup.string().email('INvalid email formate !!!').required('Required !!'),
     channel : Yup.string().required('Required !')
})

const initialValues = {
    name :'vishal',
    email :'',
    channel :'',
    comments : '',
    address : '',
    social : {
        facbook :'',
        insta : ''
    },
    phn :['',''],
    phns :['']
} 

const ref_Values = {
    name :'Tony Stark',
    email :'Tony@marvel.com',
    channel :'Iron_Man',
    comments : 'Avenger',
    address : '',
    social : {
        facbook :'',
        insta : ''
    },
    phn :['',''],
    phns :['']
} 


// const validate = values => {
//     let errors = {}
//     if(!values.name){
//         errors.name ='Required'
//      }
//     if(!values.email){
//         errors.email = 'Required'
//     }
//     if(!values.channel){
//         errors.channel = 'Required'
//     }
//     return errors
// }
const onSubmit = (values, onsubmitprops )=>{
    console.log("Form values : ",values)
    console.log(" Submiting props ", onsubmitprops )
    onsubmitprops.setSubmitting(false)
    onsubmitprops.resetForm()
}

function YtForm (){
    const [formValues, setFormValues] = useState(null)
    return(
        <Formik validationSchema={validationSchema}
                initialValues={formValues || initialValues}
                onSubmit={onSubmit}
                enableReinitialize
                >
            {formik => {
                console.log('Formikkk properties',formik)
                return (
                <Form>
                <div className="divs">
                    <label htmlFor='name'>Name</label>
                    <Field type='text' name='name'/>
                    <ErrorMessage name='name' component={TextError} />
                </div>

                <div className="divs">
                    <label htmlFor='email'>E-mail</label>
                    <Field type="email" name='email'/>
                    <ErrorMessage name='email' >
                     {(errmsg) => <div className='error1'>{errmsg}</div>}
                    </ErrorMessage>
                </div>

                <div className="divs">
                    <label htmlFor='channel'>Channel</label>
                    <Field type="text" name='channel'/>
                    <ErrorMessage name='channel' />
                </div>

                <div className="divs">
                    <label htmlFor='comments'>Comments</label>
                    <Field as="textarea" name='comments'/>
                </div>

                <div className="divs">
                    <label htmlFor='address'>Address</label>
                    <FastField name='address'>
                        {
                            (props) => {
                                const { field, form, meta} = props 
                                return (
                                    <div>
                                    <input type='text' id="address" {...field}/>
                                    {meta.touched && meta.error ? <div>{meta.error}</div>:null}
                                    </div>)
                            }
                        }
                    </FastField>
                </div>

                <div className="divs">
                    <label htmlFor='facebook'>Facebook profile</label>
                    <Field type='text' name='social.facebook'/>
                </div>

                <div className="divs">
                    <label htmlFor='twitter'>twitter profile</label>
                    <Field type='text' name='social.twitter'/>
                </div>

                <div className="divs">
                    <label htmlFor='ph1'>Phone_1</label>
                    <Field type='text' name='phn[0]'/>
                </div>

                <div className="divs">
                    <label htmlFor='ph2'>Phone_2</label>
                    <Field type='text' name='phn[1]'/>
                </div>

                <div className="divs">
                    <label htmlFor='phlist'>Phone_list</label>
                    <FieldArray  name='phns'>
                        {fieldArrayprops => {
                            const { push, remove, form } = fieldArrayprops 
                            const { values } = form
                            const { phns } = values       
                            console.log('Form errors', form.errors )                  
                            return (
                                <div>
                                {phns.map((phn, index) => 
                                    (<div key={index}>
                                       <Field name={`phns[${index}]`} />
                                        {   index >  0 && ( <button type='button' onClick={() => remove(index)}> - </button>) }
                                       <button type='button' onClick={() => push('')}> + </button>
                                      
                                    </div>) 
                                )}
                                </div>
                                )
                        }}
                    </FieldArray>
                </div>
                {/* <button type='button'
                 onClick={() => formik.validateField('comments') }
                >validate comments</button>
                <button type='button'
                 onClick={() => formik.validateForm() }
                >Validate all</button>
                <button type='button'
                 onClick={() => formik.setFieldTouched('comments') }
                >Visit comments </button>
                <button type='button'
                 onClick={() => formik.setTouched({
                     name: true,
                     email : true,
                     channel : true,
                     comments : true
                 }) }
                >Visit Fields</button> */}

                <button type='button' onClick={() => setFormValues(ref_Values)}>Put refrence data</button>
                <button type='reset' > Reset </button>
                <button className="btncls" disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
            </Form>
                )
            }}
        </Formik>
    )
}

export default YtForm