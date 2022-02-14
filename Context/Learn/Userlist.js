import React,{useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'
import {ListGroupItem,ListGroup, } from 'reactstrap'
import { Link } from 'react-router-dom'



const Userlist = () => {
    const{users,removeUser}= useContext(GlobalContext)
    console.log(users)
    return (
        <div>
            {users.map((user)=>{
                return(
                    <ListGroup>
                    <ListGroupItem>
                        <strong>{user.name}</strong>
                       <Link to={`/EditUser/${user.id}`}>  <button  >Edit</button></Link>
                       <Link to="/Delete"> <button onClick={()=>removeUser(user.id)}>delete</button></Link>
                        </ListGroupItem>
                </ListGroup>
                )
            })}
        
        </div>
    )
}

export default Userlist
