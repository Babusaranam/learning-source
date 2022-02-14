export default (state,action)=>{
    switch(action.type){
 case "REMOVE-USER":
     return{
         users:state.users.filter((users)=>  users.id!== action.payload)
     }
     case"ADD-USER":
     return{
         users:[action.payload,state.users]

     }


         default:
             return state
    }
}