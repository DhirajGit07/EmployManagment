import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login'
import AdminLogin from './Components/AdminLogin'
import Admindb from './Components/Admindb'
import Home from './Components/Home'
import Category from './Components/Category';
import Profile from './Components/Profile';
import Employee from './Components/Employee';
import Employeedb from './Components/Employeedb';
import AddCategory from './Components/AddCategory'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/adminlogin' element={<AdminLogin />}></Route>
        <Route path='/employeelogin' element={<Login />}></Route> 
        <Route path='/employeedb' element={<Employeedb />}></Route>
        <Route path='/admindb' element={<Admindb />}>
        <Route index element={<Home />} />
          <Route path='Category' element={<Category />} />
          <Route path='profile' element={<Profile />} />
          <Route path='Employee' element={<Employee />} />
          <Route path='add_category' element={<AddCategory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
