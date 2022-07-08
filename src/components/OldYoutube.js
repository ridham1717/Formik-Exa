//import React from 'react'

import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'


function OldYoutube() {

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Required'),
    channel: Yup.string().required('Required')
  })
 const formik =  useFormik({
  initialValues:{
    name:'ridham',
    email:'',
    channel:''
  },
  onSubmit:values => {
    console.log('form data',values)
  },
  validationSchema
  
 })

 

 

 
 //console.log('Form values',formik.values)
 console.log('Form error',formik.errors)
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className='form-control'>
        <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='name' {...formik.getFieldProps('name')} />
          {formik.errors.name ? <div>{formik.errors.name}</div> : null }
          </div>
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input type='text' id='email' name='email' {...formik.getFieldProps('email')} />
          {formik.errors.email ? <div>{formik.errors.email}</div> : null }
          </div>
        <div className='form-control'>


          <label htmlFor='channel'>Channel</label>
      
          <input type='text' id='channel' name='channel' {...formik.getFieldProps('channel')}/>
          {formik.errors.channel ? <div>{formik.errors.channel}</div> : null }
        </div>
          <button>Submit</button>
        </form>
    </div>
  )
}

export default YoutubeForm
