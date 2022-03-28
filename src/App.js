import logo from './logo.svg'
import './App.css'
import Home from './home'
import Navbar from './navbar'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import Askquestion from './askquestion'
import Signup from './loginsignup/signup'
import Login from './loginsignup/login'
import { loadUser } from './actions/userAction'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'
import Logingoogle from './loginsignup/googlesignin'
import Answerscontainer from './answerscontainer'
import Footer from './footer'

function App() {
  const dispatch = useDispatch()
  const { user, isAuthenticated, loading, error } = useSelector(
    (state) => state.user
  )
  useEffect(() => {
    dispatch(loadUser())
    console.log(user)
  }, [dispatch])
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/askquestion' element={<Askquestion />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/googlelogin' element={<Logingoogle />} />
          <Route path='/answers/:id' element={<Answerscontainer />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
