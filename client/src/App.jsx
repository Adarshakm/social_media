import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './Pages/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from './Components/HeaderComponent'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import CreateProfilePage from './Pages/CreateProfilePage'
import ProfilePage from './Pages/ProfilePage'
import Apply_Job from './Pages/Apply_Job'
import Company_Profile from './Pages/Company_Profile'
import Company_Register from './Pages/Company_Register'
import HomeCompany from './Pages/HomeCompany'
// import UserList from './Pages/UserList'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomeCompany />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create_profile_page" element={<CreateProfilePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/apply_job" element={<Apply_Job />} />
          <Route path="/company_profile" element={<Company_Profile />} />
          <Route path="/company_register" element={<Company_Register />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
