import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Learn/Home'
import AddUser from './Learn/AddUser'
import EditUser from './Learn/EditUser'
import {GlobalProvider} from './Context/GlobalState'

import "./App.css"
const App = () => {
  return (
    <>
    <div>
     <GlobalProvider>
     <Router>
        <Routes>
        <Route path="/Home" element={<Home/>}/>
       <Route path="/AddUser" element={<AddUser/>}/>
        <Route path="/EditUser" element={<EditUser/>}/>
        </Routes>
      </Router>
     </GlobalProvider>
     </div>
    </>
  )
}

export default App
