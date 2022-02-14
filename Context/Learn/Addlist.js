import React ,{useState,useEffect}from 'react'
import { FormControl, FormGroup,Form,Modal, Button} from 'react-bootstrap'




const Addlist = () => {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const[formvalues,setFormValues]=useState("");
    const [input,setInput]=useState([{name:"",number:"",email:"",Address:""}])

// const [items,setItems]=useState([])

    const handelChange=(e)=>{
        setFormValues({...formvalues,[e.target.name]:e.target.value})
    }

    const handelSubmit=(e)=>{
        e.preventDefault();
console.log("a",formvalues)
setInput([...input,formvalues])
setFormValues("")

    }

useEffect(()=>{
    localStorage.setItem("form",JSON.stringify(input))
},[input])
    const{name,Address,number,email}=formvalues
    return (
        <>
           <div>
               <h1>Form details </h1>
               <Form className='form' onSubmit={handelSubmit}>
                   <FormGroup >
                       <FormControl  type="text" placeholder='name' value={name} name="name" onChange={handelChange}/>
                   </FormGroup>
                   <FormGroup>
                       <FormControl  type="number" placeholder='mobileNumber' value={number} name="number"
                       onChange={handelChange}
                       />
                   </FormGroup>
                   <FormGroup>
                       <FormControl  type="email" placeholder='email'onChange={handelChange}  name="email" value={email}/>
                   </FormGroup>
                   <FormGroup>
                       <FormControl  type="Address" placeholder='Address' onChange={handelChange}
                        name="Address" value={Address}
                       row={3}/>
                   </FormGroup>
                   <button  type="submit" value="submit">submit</button>
                 
                   <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Modify the details</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <p></p>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>Close</Button>
                                <Button variant="primary" onClick={handleClose}>Save changes</Button>
                            </Modal.Footer>
                            </Modal>
                
               </Form>
               </div> 
               <table>
                           <thead>
                               <tr>
                                   <th>name</th>
                                   <th>number</th>
                                   <th>email</th>
                                   <th>Address</th>
                               </tr>
                           </thead>
                           </table>
                        
               <div>
                   {input.map((elem,id)=>{
                       return(
                      
                           <tbody>
                                   <td >{elem.name}</td>
                                   <td >{elem.number}</td>
                                   <td>{elem.email}</td>
                                   <td >{elem.Address}</td>
                                   <button  type="Edit" value="Edit"  onClick={handleShow}>Edit</button>
                            
                           </tbody>
                       )
                   })}
                    
               </div>
        </>
    )
}

export default Addlist
