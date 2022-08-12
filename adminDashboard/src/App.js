
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';

import Login from './components/login';

import Admin from './admin';
import {createContext, useState} from 'react';

export const userContext = createContext();



function App() {

  const [adminData, setAdminData] = useState([]);



  // function check(){

  //   if(sessionStorage.getItem('admin_id')){
    

  //    navigate('/admin')
     
  //   }
  // }

  return (
    <>

      <Router>
      <userContext.Provider value={{ adminData, setAdminData }}>
            <Routes>

              <Route path="/admin/*" element={<Admin />} />

              <Route path="/" element={<Login />} />

            </Routes>

       </userContext.Provider>
      </Router>

      
    </>

  );
}

export default App;
