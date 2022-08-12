
import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { userContext } from "../App";
import { useContext } from "react";


import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
import { useNavigate } from "react-router-dom";



import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyCVLpIwIDmd0Ds0Zfc0kORoOB5QbJCDqCY",
    authDomain: "event-e0433.firebaseapp.com",
    projectId: "event-e0433",
    storageBucket: "event-e0433.appspot.com",
    messagingSenderId: "967239756286",
    appId: "1:967239756286:web:32c693829eabbe5c1438af",
    measurementId: "G-5Q2B2NK8LY"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();



// import userContext

function Login() {


    const [user] = useAuthState(auth);
    const user1 = auth.currentUser
    const navigate = useNavigate();
  

    const { userData, setUserData } = useContext(userContext)

    const [userlog, setUser] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios({
            method: "post",
            url: "http://localhost:8000/api/login",
            data: userlog
        }).then((res) => {
            setUserData(res.data)
            if (res.data.errors) {
                setError(res.data.errors)
            } else {
                sessionStorage.setItem("user_id", res.data.id);
                
                navigate(`/`);
            }
        }).catch((error) => {
            console.log(error.response.data.message);
        });


    }
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider).then(()=>{
            sessionStorage.setItem("user_id", auth.currentUser.uid);
            sessionStorage.setItem("ures_name", auth.currentUser.displayName);
            sessionStorage.setItem("firebasestate", '1')

            navigate(`/`);

            window.location.href = 'http://localhost:3000/'
        });
       


        




        if (auth.currentUser) {
            sessionStorage.setItem("user_id", auth.currentUser.uid);
            sessionStorage.setItem("ures_name", auth.currentUser.defualtname);
            sessionStorage.setItem("firebasestate", '1')
            
            navigate(`/`);
            // console.log('from aut', sessionStorage.getItem('user_id'))

        }



    }
    // if(user1.uid){
    //     console.log('among us',user1.uid)
    // }

    if (auth.currentUser) {
        sessionStorage.setItem("user_id", auth.currentUser.uid);
        sessionStorage.setItem("firebasestate", '1');
        // console.log(auth.currentUser)
        // console.log('from aut', sessionStorage.getItem('user_id'))
        // return navigate(`/`);

    }

    console.log(userData)



    return (
        <>

            <div class="wpo-login-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                           
                            <form class="wpo-accountWrapper" action="#" onSubmit={handleSubmit}>
                                <div class="wpo-accountInfo">
                                    <div class="wpo-accountInfoHeader">
                                        {/* <a href="#"><img src="assets/images/logo.png" alt="" /></a> */}
                                    </div>
                                    <div class="image">
                                        <img src="undraw_special_event_-4-aj8.svg" alt="" />
                                    </div>
                                    <div class="back-home">

                                        <NavLink className="wpo-accountBtn" to="/">
                                            <span class="">Back To Home</span>
                                        </NavLink>
                                    </div>
                                </div>
                                <div class="wpo-accountForm form-style">
                                    <div class="fromTitle">
                                        <h2>Login</h2>
                                        <p>Sign into your pages account</p>
                                        <p style={{ color: "red" }}>{error[0]}</p>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12 col-12">
                                            <label>Email</label>
                                            <input
                                                onChange={(e) => setUser((prev) => ({
                                                    ...prev,
                                                    email: e.target.value,
                                                }))
                                                }
                                                value={userlog.email}
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="Your Email"
                                                required />
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-12">
                                            <div class="form-group">
                                                <label >Password</label>
                                                <input onChange={(e) => setUser((prev) => ({
                                                    ...prev,
                                                    password: e.target.value,

                                                }))
                                                }
                                                    value={userlog.password}
                                                    class="pwd6"
                                                    type="password"
                                                    placeholder="Your Password"
                                                    name="password"
                                                    required />
                                                <span class="input-group-btn">
                                                    <button class="btn btn-default reveal6" type="button"><i class="fa fa-eye"></i></button>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-12">
                                            <button type="submit" class="wpo-accountBtn">Login</button>
                                        </div>
                                    </div>
                                    <h4 class="or"><span>OR</span></h4>
                                    <ul class="wpo-socialLoginBtn">
                                    <li><button class="google+" onClick={signInWithGoogle}><span><i class="fa fa-google" style={{color:'red'}}></i></span></button></li>
                                        <li><button class="facebook" tabindex="0" type="button"><span><i class="fa fa-facebook"></i></span></button></li>
                                        <li><button class="twitter" tabindex="0" type="button"><span><i class="fa fa-twitter"></i></span></button></li>
                                        <li><button class="linkedin" tabindex="0" type="button"><span><i class="fa fa-linkedin"></i></span></button></li>
                                    </ul>
                                    <p class="subText">Don't have an account?<NavLink to="/register"> Create free account</NavLink></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </>

    );
}


export default Login;