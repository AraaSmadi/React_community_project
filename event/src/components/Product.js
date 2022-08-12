
import React, { useState, useEffect } from 'react';
import '../Posts.css';
import axios from "axios";
import { useParams } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
export default function Product() {
    const { id } = useParams();
    const [all, setAll] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch(`http://127.0.0.1:8000/api/services/${id}`)
            const respdata = await resp.json()
            setAll(respdata);
        }

        fetchData()
    }, []);
    console.log(all);
    return (
        
            <div class="container">
                <section class="m-5 col-12">

                    <div className="row">
                        <div class="col-6">
                            <h1>{all.title}</h1>
                            <p class="d-flex justify-content" >{all.description}
                            </p>
                            <h4 style={{ color: "#848892" }}> Price: {all.price} JD </h4>
                            <div class="submit-area" >
                                <br />
                                <br />
                                <button type="submit" class="theme-btn-s4" name='like' style={{ color: "white" }}>  <NavLink to={`/book/${all.id}`} style={{ textDecoration: " none", color: "white" }} >Booking Now</NavLink> </button>


                            </div>
                        </div>


                        <div class="col-6">
                            <div class="">
                                <a href="assets/images/portfolio/10.jpg" class="fancybox"
                                    data-fancybox-group="gall-1">
                                    <img src={`http://127.0.0.1:8000/${all.picture_four}`} alt class="img img-responsive" />

                                </a>
                            </div>
                        </div>

                    </div>

                </section>

                <section class="wpo-portfolio-section-s3 tb-padding section-padding">
                    <div class="container">
                        <div class="row">
                            <div class="wpo-section-title-s2">
                                <div class="section-title-simg">
                                    <img src="assets/images/section-title2.png" alt="" />
                                </div>
                                <h2> {all.title} Service </h2>
                                <div class="section-title-img">
                                    <div class="round-ball"></div>
                                </div>
                            </div>
                        </div>
                        <div class="sortable-gallery">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="portfolio-grids gallery-container clearfix">
                                        <div class="grid">
                                            <div class="">
                                                <a href="assets/images/portfolio/13.jpg" class="fancybox"
                                                    data-fancybox-group="gall-1">
                                                    <img src={`http://127.0.0.1:8000/${all.picture}`} alt class="img img-responsive" style={{ height: "250px" }} />

                                                </a>
                                            </div>
                                        </div>
                                        <div class="grid">
                                            <div class="">
                                                <a href="assets/images/portfolio/8.jpg" class="fancybox"
                                                    data-fancybox-group="gall-1">
                                                    <img src={`http://127.0.0.1:8000/${all.picture_two}`} alt class="img img-responsive" style={{ height: "250px" }} />

                                                </a>
                                            </div>
                                        </div>
                                        <div class="grid">
                                            <div class="">
                                                <a href="assets/images/portfolio/9.jpg" class="fancybox"
                                                    data-fancybox-group="gall-1">
                                                    <img src={`http://127.0.0.1:8000/${all.picture_three}`} alt class="img img-responsive" style={{ height: "250px" }} />

                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

            </div>
            );
}
