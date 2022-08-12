import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Booking() {
    const { id } = useParams();
    const [email, setemail] = useState({});
    const [phone, setphone] = useState({});
    const [date, setdate] = useState({});
    const [hour, sethour] = useState({});
    // const user_id =sessionStorage.getItem('user_id');
    // const [serviceid, setid] = useState({});
    //  start Add books
    const [error, serError] = useState('');

    const booking = async (e) => {
        e.preventDefault();

        const user_id = sessionStorage.getItem('user_id');

        if (user_id == null) {
            swal({
                title: "Please You Need To Login",
                text: " Login!",
                icon: "warning",
                button: "ok!",
            }).then(function () {
                window.location = "/login";
            })
            document.getElementById('log').innerHTML = 'Login'


        } else {
            const response = await fetch(`http://127.0.0.1:8000/api/book`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: email, phone: phone, date: date, hour: hour, costumer_id: user_id, service_id: id }),

            });

            if (response.ok) {
                swal({
                    title: "Good job!",
                    text: " Booked successfully!",
                    icon: "success",
                    button: "ok!",
                }).then(function () {
                    window.location = "/";
                })
            }

        }

    }


    const disablePastDate = () => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };


    const onKeyPressed = (e) => {
        e.preventDefault()
    }


    return (
        <div>
            <section class="wpo-contact-section section-padding">

                <div class="container">

                    <div class="wpo-contact-section-wrapper">
                        <div class="wpo-contact-form-area">

                            <div class="wpo-section-title">
                                {/* {user_id == null ?(
                                    <>
                                      <Link to="/login">Login</Link>
                                    </>
                                ):(
                                    <>
                                  
                                    </>
                                )} */}
                                <span className='logg' style={{ color: "red", fontSize: "15px" }}>{error} <Link id='log' to='/login'></Link></span>
                                <h2>Appointment</h2>
                                <div class="section-title-img">
                                    <img src="assets/images/section-title.png" alt="" />
                                </div>
                            </div>
                            <form class="contact-validation-active" id="contact-form-main">
                                <div>
                                    <input type="email" class="form-control" name="email" id="name" placeholder="Email" onChange={(e) => setemail(e.target.value)} />
                                </div>
                                <div>
                                    <input type="number" class="form-control" name="phone" id="email"
                                        placeholder="Phone" onChange={(e) => setphone(e.target.value)} />
                                </div>
                                <div>
                                    <input type="time" class="form-control" name="hour" id="Hour"
                                        placeholder="Hour" onChange={(e) => sethour(e.target.value)} onKeyDown={onKeyPressed} />
                                </div>
                                <div>
                                    <input type="date" class="form-control" name="date" id="Date"
                                        placeholder="Date" onChange={(e) => setdate(e.target.value)} min={disablePastDate()} onKeyDown={onKeyPressed} />
                                </div>
                                {/* <div>
            <select name="service" class="form-control">
                <option disabled="disabled" selected>Services</option>
                <option>Photography</option>
                <option>The Rehearsal Dinner</option>
                <option>The Afterparty</option>
                <option>Videographers</option>
                <option>Perfect Cake</option>
                <option>All Of The Above</option>
            </select>
        </div>
        <div>
            <select name="guest" class="form-control">
                <option disabled="disabled" selected>Number Of Guests</option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
            </select>
        </div> */}
                                {/* <div>
            <select name="meal" class="form-control last">
                <option disabled="disabled" selected>Meal Preferences</option>
                <option>Chicken Soup</option>
                <option>Motton Kabab</option>
                <option>Chicken BBQ</option>
                <option>Mix Salad</option>
                <option>Beef Ribs </option>
            </select>
        </div> */}
                                <div class="submit-area">
                                    <button type="submit" class="theme-btn-s3" onClick={booking}>Make appointment</button>
                                    <div id="c-loader">
                                        <i class="ti-reload"></i>
                                    </div>
                                </div>
                                <div class="clearfix error-handling-messages">
                                    <div id="success">Thank you</div>
                                    <div id="error"> Error occurred while sending email. Please try again later.
                                    </div>
                                </div>
                            </form>
                            <div class="border-style"></div>
                        </div>
                        {/* <div class="vector-1">
    <img src="assets/images/contact/1.png" alt=""/>
</div> */}
                        <div class="vector-2">
                            <img src="../assets/images/contact/2.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Booking
