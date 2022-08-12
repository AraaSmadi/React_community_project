import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';




const Header = () => {

const namess=sessionStorage.getItem('admin_name') ;



  const navigate = useNavigate();
  // const hist =useHistory();

  // if(!sessionStorage.getItem('admin_id')){


  //   return navigate('/');
  //   window.location.reload(false);
  //   // return <Redirect to="/login"/>
  // }

  useEffect(() => { check(); },)
  function check() {

    if (!(sessionStorage.getItem('admin_id'))) {


      navigate('/')

    }
  }

  

  const handlClick= () => {
    sessionStorage.clear();
    window.location.href = 'http://localhost:3000/'


  }



  return (
    <>
      <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center" style={{background:'#002642'}}>
          {/* <a className="navbar-brand brand-logo" href="index.html"><img src="%PUBLIC_URL%logo.png" width='100px' alt="logo" /></a>
          <a className="navbar-brand brand-logo-mini" href="index.html"><img src="logo.png" width='100px' alt="logo" /></a> */}
          <h2 className="navbar-brand brand-logo text-white" >Memory</h2>
          <h2 className="navbar-brand brand-logo-mini text-white" >M</h2>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-stretch">
          <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
            <span className="mdi mdi-menu"></span>
          </button>
          <div className="search-field d-none d-xl-block">
            {/* <form className="d-flex align-items-center h-100" action="#">
              <div className="input-group">
                <div className="input-group-prepend bg-transparent">
                  <i className="input-group-text border-0 mdi mdi-magnify"></i>
                </div>
                <input type="text" className="form-control bg-transparent border-0" placeholder="Search products" />
              </div>
            </form> */}
          </div>
          <ul className="navbar-nav navbar-nav-right">
            {/* <li className="nav-item  dropdown d-none d-md-block">
              <a className="nav-link dropdown-toggle" id="reportDropdown" href="#" data-toggle="dropdown" aria-expanded="false"> Reports </a>
              <div className="dropdown-menu navbar-dropdown" aria-labelledby="reportDropdown">
                <a className="dropdown-item" href="#">
                  <i className="mdi mdi-file-pdf mr-2"></i>PDF </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  <i className="mdi mdi-file-excel mr-2"></i>Excel </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  <i className="mdi mdi-file-word mr-2"></i>doc </a>
              </div>
            </li> */}
            {/* <li className="nav-item  dropdown d-none d-md-block">
              <a className="nav-link dropdown-toggle" id="projectDropdown" href="#" data-toggle="dropdown" aria-expanded="false"> Projects </a>
              <div className="dropdown-menu navbar-dropdown" aria-labelledby="projectDropdown">
                <a className="dropdown-item" href="#">
                  <i className="mdi mdi-eye-outline mr-2"></i>View Project </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  <i className="mdi mdi-pencil-outline mr-2"></i>Edit Project </a>
              </div>
            </li> */}
            {/* <li className="nav-item nav-language dropdown d-none d-md-block">
              <a className="nav-link dropdown-toggle" id="languageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                <div className="nav-language-icon">
                  <i className="flag-icon flag-icon-us" title="us" id="us"></i>
                </div>
                <div className="nav-language-text">
                  <p className="mb-1 text-black">English</p>
                </div>
              </a>
              <div className="dropdown-menu navbar-dropdown" aria-labelledby="languageDropdown">
                <a className="dropdown-item" href="#">
                  <div className="nav-language-icon mr-2">
                    <i className="flag-icon flag-icon-ae" title="ae" id="ae"></i>
                  </div>
                  <div className="nav-language-text">
                    <p className="mb-1 text-black">Arabic</p>
                  </div>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  <div className="nav-language-icon mr-2">
                    <i className="flag-icon flag-icon-gb" title="GB" id="gb"></i>
                  </div>
                  <div className="nav-language-text">
                    <p className="mb-1 text-black">English</p>
                  </div>
                </a>
              </div>
            </li> */}
            <li className="nav-item nav-profile dropdown">
              <a className="nav-link dropdown-toggle" id="profileDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                <div className="nav-profile-img">

                </div>
                <div className="nav-profile-text">
                  <p className="mb-1 text-black"> {namess}</p>
                </div>
              </a>
              <div className="dropdown-menu navbar-dropdown dropdown-menu-right p-0 border-0 font-size-sm" aria-labelledby="profileDropdown" data-x-placement="bottom-end">

                <div className="p-2">

                  <NavLink to='/' onClick={handlClick} className="dropdown-item py-1 d-flex align-items-center justify-content-between">
                    <span>Log Out</span>
                    <i className="mdi mdi-logout ml-1"></i>
                  </NavLink>
                </div>
              </div>
            </li>
            {/* <li className="nav-item dropdown">
              <a className="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                <i className="mdi mdi-email-outline"></i>
                <span className="count-symbol bg-success"></span>
              </a>
              <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                <h6 className="p-3 mb-0 bg-primary text-white py-4">Messages</h6>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img src="assets/images/faces/face4.jpg" alt="image" className="profile-pic" />
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Mark send you a message</h6>
                    <p className="text-gray mb-0"> 1 Minutes ago </p>
                  </div>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img src="assets/images/faces/face2.jpg" alt="image" className="profile-pic" />
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Cregh send you a message</h6>
                    <p className="text-gray mb-0"> 15 Minutes ago </p>
                  </div>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img src="assets/images/faces/face3.jpg" alt="image" className="profile-pic" />
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Profile picture updated</h6>
                    <p className="text-gray mb-0"> 18 Minutes ago </p>
                  </div>
                </a>
                <div className="dropdown-divider"></div>
                <h6 className="p-3 mb-0 text-center">4 new messages</h6>
              </div>
            </li> */}
            <li className="nav-item dropdown">
              {/* <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
                <i className="mdi mdi-bell-outline"></i>
                <span className="count-symbol bg-danger"></span>
              </a> */}
              <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                <h6 className="p-3 mb-0 bg-primary text-white py-4">Notifications</h6>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-success">
                      <i className="mdi mdi-calendar"></i>
                    </div>
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject font-weight-normal mb-1">Event today</h6>
                    <p className="text-gray ellipsis mb-0"> Just a reminder that you have an event today </p>
                  </div>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-warning">
                      <i className="mdi mdi-settings"></i>
                    </div>
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject font-weight-normal mb-1">Settings</h6>
                    <p className="text-gray ellipsis mb-0"> Update dashboard </p>
                  </div>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-info">
                      <i className="mdi mdi-link-variant"></i>
                    </div>
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject font-weight-normal mb-1">Launch Admin</h6>
                    <p className="text-gray ellipsis mb-0"> New admin wow! </p>
                  </div>
                </a>
                <div className="dropdown-divider"></div>
                <h6 className="p-3 mb-0 text-center">See all notifications</h6>
              </div>
            </li>
          </ul>
          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Header;
