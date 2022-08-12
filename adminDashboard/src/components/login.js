import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { userContext } from '../App';
import { useContext } from 'react';

const Login = () => {



  const navigate = useNavigate();


  useEffect(() => { check(); },)
  function check() {

    if (sessionStorage.getItem('admin_id')) {


      navigate('/admin')

    }
  }





  const { adminData, setAdminData } = useContext(userContext)

  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState([]);

  const handleLogin = (e) => {
    e.preventDefault();

    axios({

      method: "post",
      url: "http://localhost:8000/api/loginAdmin",
      data: admin

    }).then((res) => {
      setAdminData(res.data)
      // console.log(adminData);
      if (res.data.errors) {
        setError(res.data.errors)
      } else {
        sessionStorage.setItem("admin_id", res.data.id);
        sessionStorage.setItem("admin_name", res.data.name);
        navigate("/admin");
      }
    }).catch((error) => {
      console.log(error.response.data.message);
    });






  }
  console.log(adminData)




  return (
    <>

      <div class="container-scroller">
        <div class="container-fluid page-body-wrapper full-page-wrapper">
          <div class="content-wrapper d-flex align-items-center auth">
            <div class="row flex-grow">
              <div class="col-lg-4 mx-auto">
                <div class="auth-form-light text-left p-5">
                  <div class="brand-logo">
                    <img src="logo.png" />
                  </div>
                  <h4>Hello! let's get started</h4>
                  <h6 class="font-weight-light">Sign in to continue.</h6>
                  <div style={{ color: "red" }}>{error[0]}</div>
                  <form class="pt-3" onSubmit={handleLogin}>
                    <div class="form-group">
                      <input
                        onChange={(e) => setAdmin((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                        }

                        type="email"
                        class="form-control form-control-lg"
                        id="exampleInputEmail1"
                        placeholder="Username" />
                    </div>
                    <div class="form-group">
                      <input
                        onChange={(e) => setAdmin((prev) => ({
                          ...prev,
                          password: e.target.value,
                        }))}
                        type="password"
                        class="form-control form-control-lg"
                        id="exampleInputPassword1"
                        placeholder="Password" />
                    </div>
                    <div class="mt-3">
                      <button type='submit' class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" >SIGN IN</button>
                    </div>

                    {/* <div class="text-center mt-4 font-weight-light"> Don't have an account? <a href="register.html" class="text-primary">Create</a>
                  </div> */}
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </>
  );
}

export default Login;