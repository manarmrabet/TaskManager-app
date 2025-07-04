import React from 'react'
import{BrowserRouter as Router,Routes,Route,}from "react-router-dom";
import SignUp from './pages/Auth/SignUp';
import ManageTasks from './pages/Admin/ManageTasks';
import CreateTask from './pages/Admin/CreateTask';
import ManageUsers from './pages/Admin/ManageUsers';
import Dashboard from './pages/Admin/Dashboard';
import Login from './pages/Auth/login';
import UserDashboard from './pages/User/UserDashboard';
import MyTasks from './pages/User/MyTasks';
import ViewTaskDetails from './pages/User/ViewTaskDetails';
import PrivateRoute from './routes/PrivateRoute';
import Welcome from './pages/welcome';
const App =()=>{
  return(
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          {/*Admin Routes */}
          <Route  element={<PrivateRoute allowedRoles={["admin"]}/>}>
          <Route path="/admin/dashboard" element={<Dashboard/>}/>
          <Route path="/admin/Tasks" element={<ManageTasks/>}/>
          <Route path="/admin/create-task" element={<CreateTask/>}/>
          <Route path="/admin/Users" element={<ManageUsers/>}/>
          </Route>



          {/*User Routes */}
          
          <Route path="/user/dashboard" element={<UserDashboard/>}/>
          <Route path="/user/tasks" element={<MyTasks/>}/>
          <Route path="/user/task-details/:id" element={<ViewTaskDetails/>}/>
         
         

        </Routes>
      </Router>
      
    </div>
  )
}
export default App 