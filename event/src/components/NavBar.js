import React from 'react';
import { Link, NavLink } from 'react-router-dom';








import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';

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

























const NavBar = () => {
    const user_id = sessionStorage.getItem('user_id');

    const firebasestate = sessionStorage.getItem('user_id');

    const handleClick = () => {
        if (firebasestate) {
            auth.signOut();
            sessionStorage.clear();
    
            window.location.href = 'http://localhost:3000/'
    
        }
        
        sessionStorage.clear();
        window.location.href = 'http://localhost:3000/'
    }




    //    let isLoggedIn = JSON.parse(localStorage.getItem("user"));

    return (
        <>

            <section class="topbar">
                <h2 class="hidden">some</h2>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col col-lg-7 col-md-12 col-12">
                            <div class="contact-intro">
                                <ul>
                                    <li><i class="fi flaticon-email"></i>Nay@gmail.com</li>
                                    <li><i class="fi flaticon-phone-call"></i> +962 (079) 869523</li>
                                    {/* <li><i class="fi flaticon-maps-and-flags"></i> Irbid – 1075 Firs Avenue</li> */}
                                </ul>
                            </div>
                        </div>
                        <div class="col col-lg-5 col-md-12 col-12">
                            <div class="contact-info">
                            <ul>
                                    <li><a href="https://www.facebook.com/"><i class="fi flaticon-facebook-app-symbol"></i></a></li>
                                    <li><a href="https://twitter.com/i/flow/login"><i class="fi flaticon-twitter"></i></a></li>
                                    <li><a href="https://www.linkedin.com/feed/"><i class="fi flaticon-linkedin"></i></a></li>
                                    <li><a href="https://www.instagram.com/"><i class="fi flaticon-instagram-1"></i></a></li>
                                    {/* <li><a href="https://www.pinterest.com/"><i class="fi flaticon-pinterest"></i></a></li>
                                    <li><a href="https://www.google.com/"><i class="fi flaticon-youtube"></i></a></li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <header id="header">
                <div class="wpo-site-header">
                    <nav class="navigation navbar navbar-expand-lg navbar-light">
                        <div class="container-fluid">
                            <div class="row align-items-right">
                                <div class="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                    <div class="mobail-menu">
                                        <button type="button" class="navbar-toggler open-btn">
                                            <span class="sr-only">Toggle navigation</span>
                                            <span class="icon-bar first-angle"></span>
                                            <span class="icon-bar middle-angle"></span>
                                            <span class="icon-bar last-angle"></span>
                                        </button>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-6 col-6">
                                    <div class="navbar-header">
                                        <a class="navbar-brand" href="/"><img src="../assets/images/logo.png"
                                            alt="" style={{ marginTop: "15px" , width:"150px"}} /></a>
                                    </div>
                                </div>
                                <div class="col-lg-10 col-md-1 col-1">
                                    <div id="navbar" class="collapse navbar-collapse navigation-holder">
                                        <button class="menu-close"><i class="ti-close"></i></button>
                                        <ul class="nav navbar-nav mb-2 mb-lg-0">
                                            {user_id == null ? (
                                                <>
                                                    <li class="menu-item-has-children">

                                                        <NavLink to="/" >Home</NavLink>

                                                    </li>
                                                    <li class="menu-item-has-children">
                                                        <NavLink to="/about" >About</NavLink>


                                                    </li>

                                                    <li class="menu-item-has-children">

                                                        <NavLink to="/contact" >Contact</NavLink>

                                                    </li>
                                                </>
                                            ) : (
                                                <>
                                                    <li class="menu-item-has-children">

                                                        <NavLink to="/" >Home</NavLink>

                                                    </li>
                                                    <li class="menu-item-has-children">
                                                        <NavLink to="/about" >About</NavLink>


                                                    </li>

                                                    <li class="menu-item-has-children">

                                                        <NavLink to="/contact" >Contact</NavLink>

                                                    </li>
                                                    <li class="menu-item-has-children">
                                                        <NavLink to="/share" >Post</NavLink>

                                                    </li>
                                                </>
                                            )}

                                            <li class="menu-item-has-children" style={{ marginLeft: "220px" }}>
                                                <a className="nav-link" style={{ color: "#1a3b55", marginLeft: "10px" }}><svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16" >

                                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                                </svg></a>
                                                <ul class="sub-menu">
                                                    {user_id == null ? (
                                                        <>
                                                            <li >
                                                                <NavLink to="/login" >Login</NavLink>
                                                            </li>
                                                            <li >
                                                                <NavLink to="/register" >Register</NavLink>
                                                            </li>

                                                        </>


                                                    ) : (
                                                        <>

                                                            <li >
                                                                <NavLink to="profile" >Account</NavLink>
                                                            </li>

                                                            <li >
                                                                <NavLink onClick={handleClick} to="/" >LogOut</NavLink>
                                                            </li>

                                                        </>

                                                    )}

                                                </ul>
                                            </li>


                                        </ul>


                                        {/* <div class="col-lg-2 col-md-2 col-2"> */}
                                       
                                    </div>
                                </div>
                                {/* </div> */}
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default NavBar;