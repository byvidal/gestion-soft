import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import RegisterPage from './pages/RegisterPage'

function App(){
  return(
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1 className="text-4xl font-bold">Home page</h1>} />
          <Route path='/login' element={<h1 className="text-4xl font-bold">Login</h1>} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/subject' element={<h1 className="text-4xl font-bold">Subject page</h1>} />
          <Route path='/add-subject' element={<h1 className="text-4xl font-bold">new subject</h1>} />
          <Route path='/subjects/:id' element={<h1 className="text-4xl font-bold">update subject</h1>} />
          <Route path='/profile' element={<h1 className="text-4xl font-bold">profile</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider> 
  )
}

export default App