import logo from './logo.svg';
import './App.css';
import Home from './home'
import Navbar from './navbar'
import { Routes,Route,Link,BrowserRouter } from 'react-router-dom';
import Askquestion from './askquestion';
import Signup from './loginsignup/signup'
import Login from './loginsignup/login'
function App() {
  return (
  <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/askquestion' element={<Askquestion/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/login' element={<Login/>}/>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
