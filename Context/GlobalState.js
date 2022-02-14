import React ,{createContext,useReducer}from 'react'
import AppReducer from './AppReducer'


//inital State;

const initalState={
    users:[
        {id:1,name:"userone"},
        {id:2,name:"userTwo"},
        {id:3,name:"userThree"}
    ]
}

//Create Context


export const GlobalContext= createContext(initalState)

//Provider Component


export const GlobalProvider = ({childern}) => {

    const [state,dispatch]=useReducer(AppReducer,initalState);

    //Actions

    const  removeUser=(id)=>{
        dispatch({
            type:"REMOVE-USER",
            payload: id
        })

    }
    const  AddUser=(user)=>{
        dispatch({
            type:"ADD--USER",
            payload: user
        })

    }


    return (
        <GlobalContext.Provider value={{
            users:state.users,
            removeUser,
            AddUser
        }}>
            {childern}
        </GlobalContext.Provider>
    )
}


