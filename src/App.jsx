import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import AdminLogin from './Components/AdminLogin';
import Admindb from './Components/Admindb';
import Home from './Components/Home';
import Category from './Components/Category';
import Profile from './Components/Profile';
import ApprovalStart from './Components/ApprovalStart';
import Employeedb from './Components/Employeedb';
import AddCategory from './Components/AddCategory';
import Start from './Components/Start';
import GetLeave from './Components/GetLeave';
import Approve_History from './Components/Approve_History';
import EmpHome from './Components/EmpHome';
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Start />} />
        
      {/* Employee Section */}
        <Route path="/employeelogin" element={<Login />} />
        <Route path="/employeedb" element={<Employeedb />}>
          <Route path="get_leave" element={<GetLeave />} />
          <Route path="ApproveHistory" element={<Approve_History />} />
          <Route index element={<EmpHome />} />
        </Route>

      {/* admin Section */}
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/admindb" element={<Admindb />}>
          <Route index element={<Home />} />
          <Route path="Category" element={<Category />} />
          <Route path="profile" element={<Profile />} />
          <Route path="ApprovalStart" element={<ApprovalStart />} />
          <Route path="add_category" element={<AddCategory />} />

          <Route path="Get_Leave" element={<GetLeave />} />
        </Route>
        <Route path="/EmpHome" element={<EmpHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
