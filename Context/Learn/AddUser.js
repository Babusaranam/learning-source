import React,{useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'
import { Form,FormControl,FormGroup } from 'react-bootstrap'
import { Link,usehistory } from 'react-router-dom'
const AddUser = () => {

    const {AddUser}=useContext(GlobalContext);
    
   const history=usehistory();
   
    const onSubmit=()=>{

    }


    return (

    
        <>
            <div>
                <h1>ADD</h1>
                <Form className='form' >
                   <FormGroup >
                       <FormControl  type="text" placeholder='name'  />
                   </FormGroup> &nbsp; &nbsp;
                
                   <button  type="submit" value="submit">submit</button>&nbsp;&nbsp;
                   <Link    to="/Home">< button type="submit" onSubmit={(()=>AddUser())} className="bg-danger" value="submit"> Cancle</button></Link>
                   </Form>
            </div>
        </>
    )
}

export default AddUser
