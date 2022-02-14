import React from 'react'
import { Form,FormControl,FormGroup } from 'react-bootstrap'
const EditUser = () => {
    return (
        <div>
            <h1>Edit</h1>
            <Form className='form' >
                   <FormGroup >
                       <FormControl  type="text" placeholder='name'  />
                   </FormGroup> &nbsp; &nbsp;
                
                   <button  type="submit" value="submit">EditName</button>
                   </Form>
        </div>
    )
}

export default EditUser
