import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'

import './App.css'


import HomePage1 from './components/HomePage1'
import LoginPage1 from './components/LoginPage1'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import CreateUserPage from './components/CreateUserPage'
import DashboardPage from './components/DashboardPage'

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
  
    <Route path='/' element={<HomePage1/>}/>
        <Route path='/LoginPage1' element={<LoginPage1/>}/>

    <Route path='/CreateUser' element={<CreateUserPage/>}/>

    <Route path='/Dashboard' element={<DashboardPage/>}/>




      </Routes>
      </BrowserRouter>
      </>
)
}
export default App

