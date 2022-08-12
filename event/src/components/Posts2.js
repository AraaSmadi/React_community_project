import React, { useState, useEffect } from 'react';
import '../Posts.css';
import axios from "axios";
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

function Posts2() {

    const [post, setPost] = useState('');

    const id = sessionStorage.getItem('user_id');

    // const navigate = useNavigate();
    // let id = JSON.parse(localStorage.getItem("user_id"));
    // if (!id) {
    //   navigate("/login");
    // }
    const [posts, setPosts] = useState([]);
    const [Load, setLoad] = useState(true);
    console.log(id);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/posts')
            .then((response) => response.json())
            .then(data => {
                setPosts(data);
                setLoad(false);
                console.log(data);
            });

    }, []);


    //  start Add post
    const add_Posts = async (e) => {
        e.preventDefault();


        var wordInput = post
        wordInput = wordInput.toLowerCase();

        // split the words by spaces (" ")
        var arr = wordInput.split(" ");
        // bad words to look for, keep this array in lowercase
        var badWords = ["legos", "cloud", "manifold",'pull'];

        // .toLowerCase will do the case insensitive match!
        var foundBadWords = arr.filter(el => badWords.includes(el));

        console.log(foundBadWords.join(", "));
        console.log(foundBadWords.length)

        if(foundBadWords.length > 0){
            return  window.alert("The post has not been registered. * It contains words that violate our Community Standards ")
        }




        const response = await fetch(`http://127.0.0.1:8000/api/post`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ post: post, costumer_id: id }),

        });
        console.log(post);
        if (response.ok) {
            window.alert("your post will be posted after admin acceptance")
        }
        window.location.href = "http://localhost:3000/Posts2";
    }


    //  end Add post



    return (
        <>
            <div className="page-wrapper">
                <section className="wpo-blog-single-section wpo-blog-single-left-sidebar-section section-padding">
                    <div class="container">
                        <div class="row">


                            <a href="#comment" style={{ textDecoration: 'none', color: "#5495ca", fontSize: "20px" }}>Add Post <span > <img src="https://img.icons8.com/pastel-glyph/64/000000/circled-chevron-down.png" width="40" height="40" /></span></a>

                            <div className="post format-standard-image">
                                <div className="entry-media">
                                    {/* <img src="assets/images/blog-details/1.jpeg" alt /> */}
                                </div>
                                <div className="entry-meta">
                                    {/* <ul>
                                            <li><i className="fi flaticon-user"></i> By <a href="#">Jenny Watson</a> </li>
                                            <li><i className="fi flaticon-comment-white-oval-bubble"></i> Comments 35 </li>
                                            <li><i className="fi flaticon-calendar"></i> 24 Jun 2021</li>
                                        </ul> */}
                                </div>
                                <h2>Share  your experience with Nay .</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful.</p>
                                <blockquote>
                                    Combined with a handful of model sentence structures, generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                                </blockquote>
                                <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself,</p>

                                <div className="gallery">
                                    <div>
                                        <img src="assets/images/blog-details/1.jpeg" />
                                    </div>
                                    <div>
                                        <img src="assets/images/blog-details/2.jpg" />
                                    </div>
                                </div>
                            </div>
                            <div class="comment-respond" id="comment">
                                <h3 class="comment-reply-title">Add your story</h3>
                                <form class="comment-form" onSubmit={add_Posts}>

                                    {/* <input placeholder="Website" type="url"/> */}
                                    <div class="form-textarea">
                                        <textarea placeholder="Write Your Story with us..." onChange={(e) => setPost(e.target.value)} name="post" value={post}></textarea>
                                    </div>
                                    <div class="form-submit">
                                        <button id="submit" value="Post " type="submit" style={{ border: "none", borderRadius: "23%", background: "#86a0b6", width: "80px", height: "50px", marginBottom: "20px" }} >
                                            Add Post
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <br />
                        <br /><br /><br /><br />

                        <h3 class="comments-title">Posts</h3>
                        {Load && <h1>Loading .... </h1>}
                        {posts && posts.map(p => (
                            <div className="author-box">
                                <div className="author-avatar">
                                    <a href="" target="_blank"><img src={`http://127.0.0.1:8000/${p.picture}`} alt height="70px" width="70px" /></a>
                                </div>
                                <div className="author-content">
                                    <a href="#" className="author-name">Author: {p.name}</a>
                                    <div class="comments-meta">
                                        <h4> <span class="comments-date">{p.post}</span></h4>
                                    </div>
                                    <p>{p.Date}</p>
                                    <div className="socials">
                                        <ul className="social-link">

                                            <button type="submit" name='like' style={{ border: "none" }} >  <NavLink to={`/blog/${p.id}`} style={{ textDecoration: " none", fontSize: "20px" }}><i class="fa fa-comment-o" > comment</i></NavLink> </button>

                                            {/*  */}
                                            {/* <i style="font-size:24px" class="fa">&#xf0e5;</i> */}
                                            {/* <i class='far fa-heart' style='font-size:48px;color:red'></i> */}
                                        </ul>


                                    </div>
                                </div>

                            </div>

                        )
                        )
                        }

                    </div>





                </section >
            </div>
        </>


    );
}
export default Posts2;