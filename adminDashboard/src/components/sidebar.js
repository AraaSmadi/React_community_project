import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';



const Sidebar = () => {
  
  const admin_id = sessionStorage.getItem('admin_id');

  const handlClick= () => {
    sessionStorage.clear();
    window.location.href = 'http://localhost:3000/'


  }

  return (
    <>







      {/* side bar */}
      <nav className="sidebar sidebar-offcanvas" id="sidebar"style={{background:'#002642'}} >
        <ul className="nav">
          <li className="nav-item nav-category">Main</li>
          <li className="nav-item">
            <NavLink to='/admin'>

              <div className="nav-link" >
                <span className="icon-bg"><i className="mdi mdi-home-variant menu-icon"></i></span>
                <span className="menu-title">Dashboard</span>
              </div>

            </NavLink>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
              <span className="icon-bg"><i className="mdi mdi-crosshairs-gps menu-icon"></i></span>
              <span className="menu-title">UI Elements</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="ui-basic">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Buttons</a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/dropdowns.html">Dropdowns</a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Typography</a></li>
              </ul>
            </div>
          </li> */}
          <li className="nav-item">

            <NavLink to='/admin/users'>

              <div className="nav-link" >
                <span className="icon-bg"><i className="mdi mdi-contacts menu-icon"></i></span>
                <span className="menu-title">Users</span>
              </div>

            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/admin/services'>

              <div className="nav-link" href="/admin/services">
                <span className="icon-bg" ><i className="mdi mdi-tag-multiple library-books" ></i></span>
                <span className="menu-title" >Services</span>
              </div>

            </NavLink>
          </li>
          <li className="nav-item">

            <NavLink to='/admin/books'>
              <div className="nav-link" >
                <span className="icon-bg"><i className="mdi mdi-table-large menu-icon"></i></span>
                <span className="menu-title">Books</span>
              </div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/admin/categoriese'>
              <div className="nav-link">
                <span className="icon-bg"><i className="mdi mdi-animation menu-icon"></i></span>
                <span className="menu-title">Categoriese</span>
              </div>
            </NavLink>

          </li>
          <li className="nav-item">
            <NavLink to='/admin/posts'>
              <div className="nav-link">
              <span className="icon-bg">
                <i className="mdi mdi-file-document-box menu-icon"></i>
              </span>
                <span className="menu-title">Posts</span>
              </div>
            </NavLink>

          </li>
          {/* <li className="nav-item">
            <NavLink to='/admin/chat'>
              <div className="nav-link">
              <span className="icon-bg">
                <i className="mdi mdi-file-document-box menu-icon"></i>
              </span>
                <span className="menu-title">Chat</span>
              </div>
            </NavLink>

          </li> */}
          {/* <li className="nav-item">
            <a className="nav-link" href="pages/tables/basic-table.html">
              <span className="icon-bg"><i className="mdi mdi-table-large menu-icon"></i></span>
              <span className="menu-title">Tables</span>
            </a>
          </li> */}
          {/* <li className="nav-item">
            <a className="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
              <span className="icon-bg"><i className="mdi mdi-lock menu-icon"></i></span>
              <span className="menu-title">User Pages</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="auth">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <a className="nav-link" href="pages/samples/blank-page.html"> Blank Page </a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/samples/login.html"> Login </a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/samples/register.html"> Register </a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/samples/error-404.html"> 404 </a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/samples/error-500.html"> 500 </a></li>
              </ul>
            </div>
          </li> */}
          {/* <li className="nav-item documentation-link">
            <a className="nav-link" href="http://www.bootstrapdash.com/demo/connect-plus-free/jquery/documentation/documentation.html" target="_blank">
              <span className="icon-bg">
                <i className="mdi mdi-file-document-box menu-icon"></i>
              </span>
              <span className="menu-title">Documentation</span>
            </a>
          </li> */}
          <li className="nav-item sidebar-user-actions">
            <div className="user-details">
              {/* <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="d-flex align-items-center">
                    <div className="sidebar-profile-img">
                      <img src="assets/images/faces/face28.png" alt="image" />
                    </div>
                    <div className="sidebar-profile-text">
                      <p className="mb-1">Henry Klein</p>
                    </div>
                  </div>
                </div>
                <div className="badge badge-danger">3</div>
              </div> */}
            </div>
          </li>
          {/* <li className="nav-item sidebar-user-actions">
            <div className="sidebar-user-menu">
              <a href="#" className="nav-link"><i className="mdi mdi-settings menu-icon"></i>
                <span className="menu-title">Settings</span>
              </a>
            </div>
          </li>
          <li className="nav-item sidebar-user-actions">
            <div className="sidebar-user-menu">
              <a href="#" className="nav-link"><i className="mdi mdi-speedometer menu-icon"></i>
                <span className="menu-title">Take Tour</span></a>
            </div>
          </li> */}
          { admin_id == null ?(
            <>
            
            <li className="nav-item sidebar-user-actions">
               <div className="sidebar-user-menu">
                 <NavLink to="/" onClick={handlClick} className="nav-link"><i className="mdi mdi-logout menu-icon"></i>
                   <span className="menu-title">Log in</span></NavLink>
               </div>
             </li>

            
            </>
           
          ):(
             <>
              <li className="nav-item sidebar-user-actions">
               <div className="sidebar-user-menu">
                 <NavLink to="/" onClick={handlClick} className="nav-link"><i className="mdi mdi-logout menu-icon"></i>
                   <span className="menu-title">Log Out</span></NavLink>
               </div>
             </li>


             </>

          )




          }
       
        </ul>
      </nav>

    </>
  );
}

export default Sidebar;