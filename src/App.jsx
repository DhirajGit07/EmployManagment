// import './App.css'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import Login from './Components/Login'
// import AdminLogin from './Components/AdminLogin'
// import Admindb from './Components/Admindb'
// import Home from './Components/Home'
// import Category from './Components/Category';
// import Profile from './Components/Profile';
// import ApprovalStart from './Components/ApprovalStart';
// import Employeedb from './Components/Employeedb';
// import AddCategory from './Components/AddCategory'
// // import Approval from './Components/Approval'
// import Start from './Components/Start'
// import GetLeave from './Components/GetLeave'
// import Approve_History from './Components/Approve_History' 
// import EmpHome from './Components/EmpHome'
// // import UpdateCategory from './Components/UpdateCategory'



// function App () {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Start />} />
//         {/* <Route path="/" element={<Login />} /> */}
//         <Route path='/adminlogin' element={<AdminLogin />}></Route>
//         <Route path='/employeelogin' element={<Login />}></Route> 
//         <Route path='/employeedb' element={<Employeedb />}>
//         <Route path="get_leave" element={<GetLeave />} />
       

//         <Route path="approve_history" element={<Approve_History />} />

        
//         </Route>
//         <Route path='/admindb' element={<Admindb />}>

//         <Route index element={<Home />} />
//           <Route path='Category' element={<Category />} />
//           <Route path='profile' element={<Profile />} />
//           <Route path='ApprovalStart' element={<ApprovalStart />} />
//           <Route path='add_category' element={<AddCategory />} />
//           <Route path="EmpHome" element={<EmpHome />} />
         
//           {/* <Route path='get_Approval/:id' element={<Approval />} /> */}
//           <Route path='Get_Leave' element={<GetLeave />} />

//         </Route>
//         {/* <Route path='/Category/update/:id' element={<UpdateCategory />} /> */}
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App



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
import EmpHome from './Components/EmpHome'; // Import your EmpHome component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/employeelogin" element={<Login />} /> 
        <Route path="/employeedb" element={<Employeedb />}>
          <Route path="get_leave" element={<GetLeave />} />
          <Route path="ApproveHistory" element={<Approve_History />} />
          <Route index element={<EmpHome />} />
        </Route>

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
        {/* <Route path='/Category/update/:id' element={<UpdateCategory />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
