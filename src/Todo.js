import React,{useState,useEffect} from 'react'





const getlocalItems = () => {
    let restored = localStorage.getItem("list");
    if (restored) {
      return JSON.parse(localStorage.getItem("list"));
    } else {
      return [];
    }
  };
console.log("b",JSON.parse)
const Todo = () => {
    const[todos,setTodos]=useState("");
    const [tasks,setTasks]=useState(getlocalItems())

    const handelChange=(e)=>{
  
    setTodos(e.target.value)
    }

    const handelSubmit=(e)=>{
        e.preventDefault();
if(!todos){

}else{
    setTasks([...tasks,todos])
    
    setTodos("")
}   
    }

    // const handelDelete=(id)=>{
    //     const newTasks=tasks.filter((elem,index)=> index!==id)
    //     setTasks(newTasks)
        
    // }
    const handelDelete = (id) => {
        console.log({ id });
        const updatedItems = tasks.filter((elem, index) => index !== id);
        setTasks(updatedItems);
      };

      useEffect(() => {
          
         localStorage.setItem("list",JSON.stringify(tasks))
      }, [tasks])
console.log(tasks)
    return (
        <>
        <div style={{margin:"20px"}}>
            Todo List
            <form onSubmit={handelSubmit}>
                <input type="text" onChange={handelChange} value={todos} name="todos" />&nbsp;&nbsp;
                <button type="submit" value="Add">Add</button>
            </form>
            <div>
                {tasks.map((elem,index)=>{
                    return(
                        <div key={index}>{elem}
                        <button type="submit" value="edit" style={{backgroundColor:"blue"}}>edit</button>
                        <button  type="submit" value="delete"style={{backgroundColor:"red"}}
                        onClick={()=>handelDelete(index)}
                        
                        >delete</button>
                         {/* <button type="button" onClick={() => handelDelete(index)}>
                  delete
                </button> */}
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default Todo
