import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1 className="text-4xl font-bold">Home page</h1>}> </Route>
        <Route path='/login' element={<h1 className="text-4xl font-bold">Login</h1>}> </Route>
        <Route path='/register' element={<h1 className="text-4xl font-bold">Register</h1>}> </Route>
        <Route path='/subject' element={<h1 className="text-4xl font-bold">Subject page</h1>}> </Route>
        <Route path='/add-subject' element={<h1 className="text-4xl font-bold">new subject</h1>}> </Route>
        <Route path='/subjects/:id' element={<h1 className="text-4xl font-bold">update subject</h1>}> </Route>
        <Route path='/profile' element={<h1 className="text-4xl font-bold">profile</h1>}> </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App