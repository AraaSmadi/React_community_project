import React, { useState, useEffect } from 'react';
import '../Posts.css';
import axios from "axios";
import { useParams } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
export default function Products() {
   
    const { id } = useParams();
    const [all, setAll] = useState([]);
    const [Load, setLoad] = useState(true);
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/catogry/${id}`)
            .then((response) => response.json())
            .then(data => {
                setAll(data);
                setLoad(false);
            });
    }, []);
    console.log(all);
    return (
        <div>
            <section class="wpo-service-section-s3 section-padding">
                <div class="container">
                    <div class="wpo-service-wrap">
                        <div class="row">
                            {Load && <h1>Loading .... </h1>}
                            {all.length > 0 && all.map((p) => {
                                return (
                                    <div class="col-lg-4 col-md-6 col-12">
                                        <div class="wpo-service-item">
                                            <div class="wpo-service-text">
                                                <div class="s-icon">
                                                <img src={`http://127.0.0.1:8000/${p.picture_two}`} alt class="img img-responsive" style={{height:"200px"}}/>
                                               
                                                </div>
                                                <div>
                                                <h2>{p.title}</h2>
                                                <h5 style={{color:"#848892"}}>Price: {p.price}JD</h5>
                                                    </div>
                                                <div class="submit-area" >
                                                    <br />
                                                    <br />
                                                    <button type="submit" name='like' class="theme-btn-s4" style={{color:"white"}}>  <NavLink to={`/product/${p.id}`} style={{ textDecoration: " none",color:"white", fontSize:"12px" }}>Show services</NavLink> </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                )
                            }
                            )}    </div>
                    </div>


                </div>
            </section >
        </div >
    );
}
