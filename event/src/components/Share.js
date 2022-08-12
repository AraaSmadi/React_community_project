import React, { useState, useEffect } from 'react';
import '../Posts.css';
import axios from "axios";
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

function Share() {
    const [post, setPost] = useState('');
   
    const id =sessionStorage.getItem('user_id');

    // const navigate = useNavigate();
    // let id = JSON.parse(localStorage.getItem("user_id"));
    // if (!id) {
    //   navigate("/login");
    // }
    const [posts, setPosts] = useState([]);
    const [Load, setLoad] = useState(true);

    console.log(id);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/attempt')
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
            body: JSON.stringify({ post: post ,costumer_id:id}),

        });
        console.log(post);
        if (response.ok) {
            swal({
                title: "Good job!",
                text: " post added successfully!",
                icon: "success",
                button: "ok!",
              }) .then(()=> {
                window.location.href = "http://localhost:3000/share";

            });
        }
        
    }


    //  end Add post




  return (
    <section class="wpo-blog-single-section section-padding">
    <div class="container">
        <div class="row">
            <div class="col col-lg-8 col-12">
                <div class="wpo-blog-content">
                    <div class="post format-standard-image mt-5">
                       
                        <h2 >Share us your favourites  with Memory ...</h2>
                        <p>“I love you without knowing how, or when, or from where. I love you straightforwardly, without complexities or pride; so I love you because I know no other way.”</p>
                   
                         {/* <div class="row"> */}
                         <div class="comment-respond" id="comment">
                                <h3 class="comment-reply-title">Add your story</h3>
                                <form class="comment-form" onSubmit={add_Posts}>

                                    {/* <input placeholder="Website" type="url"/> */}
                                    <div class="form-textarea">
                                        <textarea placeholder="Write Your Story with us..." onChange={(e) => setPost(e.target.value)} name="post" value={post}></textarea>
                                    </div>
                                    <div class="form-submit">
                                        <button id="submit" value="Post " type="submit" style={{ border: "none",  background: "#86a0b6", width: "80px", height: "40px", marginBottom: "20px" }} >
                                            Add Post
                                        </button>
                                    </div>
                                </form>
                            </div>
                         {/* </div> */}
                    </div>

                   
                   
                     {/* <!-- end tag-share --> */}
                     {Load && <h1>Loading .... </h1>}
                        {posts && posts.map(p => (
                    <div class="author-box">
                        <div class="author-avatar">
                            <a href="#" target="_blank"><img src={`http://127.0.0.1:8000/${p.picture}`} alt height="70px" width="70px"/></a>
                        </div>
                        <div class="author-content">
                            <a href="" class="author-name">{p.name}</a>    <span style={{marginLeft:"40px"}}>{p.Date}</span>
                            <p>{p.post}</p>
                            <div class="socials">
                                <ul class="social-link">
                                    {/* <li><a href="#"><i class="ti-facebook"></i></a></li>
                                    <li><a href="#"><i class="ti-twitter-alt"></i></a></li>
                                    <li><a href="#"><i class="ti-linkedin"></i></a></li>
                                    <li><a href="#"><i class="ti-instagram"></i></a></li> */}
                                    <button type="submit" name='like' style={{ border: "none" }} >  <NavLink to={`/blog/${p.num}`} style={{ textDecoration: " none",fontSize:"17px" }}><i class="fa fa-comment-o" > join discussion</i></NavLink> </button>
                                   
                                </ul>
                            </div>
                        </div>
                    </div> 
                     )
                     )
                     }
                    {/* <!-- end author-box --> */}

                

                    {/* <div class="comments-area">
                        <div class="comments-section">
                            <h3 class="comments-title"> Comments</h3>
                            <ol class="comments">
                                <li class="comment even thread-even depth-1" id="comment-1">
                                    <div id="div-comment-1">
                                        <div class="comment-theme">
                                            <div class="comment-image"><img src="assets/images/blog-details/comments-author/img-1.jpg" alt/></div>
                                        </div>
                                        <div class="comment-main-area">
                                            <div class="comment-wrapper">
                                                <div class="comments-meta">
                                                    <h4>Robert Sonny <span class="comments-date">says Jul 21, 2021 at 10:00am</span></h4>
                                                </div>
                                                <div class="comment-area">
                                                    <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system</p>
                                                    <div class="comments-reply">
                                                        <a class="comment-reply-link" href="#"><span>Reply</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul class="children">
                                        <li class="comment">
                                            <div>
                                                <div class="comment-theme">
                                                    <div class="comment-image"><img src="assets/images/blog-details/comments-author/img-2.jpg" alt/></div>
                                                </div>
                                                <div class="comment-main-area">
                                                    <div class="comment-wrapper">
                                                        <div class="comments-meta">
                                                            <h4>John Abraham  <span class="comments-date">says Jul 21, 2021 at 10:00am</span></h4>
                                                        </div>
                                                        <div class="comment-area">
                                                            <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system</p>
                                                            <div class="comments-reply">
                                                                <a  class="comment-reply-link" href="#"><span>Reply</span></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul>
                                                <li class="comment">
                                                    <div>
                                                        <div class="comment-theme">
                                                            <div class="comment-image"><img src="assets/images/blog-details/comments-author/img-3.jpg" alt/></div>
                                                        </div>
                                                        <div class="comment-main-area">
                                                            <div class="comment-wrapper">
                                                                <div class="comments-meta">
                                                                    <h4>Robert Sonny <span class="comments-date">says Jul 21, 2021 at 10:00am</span></h4>
                                                                </div>
                                                                <div class="comment-area">
                                                                    <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system</p>
                                                                    <div class="comments-reply">
                                                                        <a  class="comment-reply-link" href="#"><span>Reply</span></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li class="comment">
                                    <div>
                                        <div class="comment-theme">
                                            <div class="comment-image"><img src="assets/images/blog-details/comments-author/img-1.jpg" alt/></div>
                                        </div>
                                        <div class="comment-main-area">
                                            <div class="comment-wrapper">
                                                <div class="comments-meta">
                                                    <h4>John Abraham  <span class="comments-date">says Jul 21, 2021 at 10:00am</span></h4>
                                                </div>
                                                <div class="comment-area">
                                                    <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system</p>
                                                    <div class="comments-reply">
                                                        <a  class="comment-reply-link" href="#"><span>Reply</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ol>
                        </div> 
                        {/* <!-- end comments-section --> */}

                        {/* <div class="comment-respond">
                            <h3 class="comment-reply-title">Leave a reply</h3>
                            <form class="comment-form">
                                <div class="form-inputs">
                                    <input placeholder="Name" type="text"/>
                                    <input placeholder="Email" type="email"/>
                                    <input placeholder="Website" type="url"/>
                                </div>
                                <div class="form-textarea">
                                    <textarea id="comment" placeholder="Write Your Comments..."></textarea>
                                </div>
                                <div class="form-submit">
                                    <input id="submit" value="Post Comment" type="submit"/>
                                </div>
                            </form>
                        </div>
                    </div>   */}
                    {/* <!-- end comments-area --> */}
                </div>
            </div>
            <div class="col col-lg-4">
                <div class="blog-sidebar">
                <div class="widget wpo-instagram-widget">
                        <div class="widget-title">
                            <h3>Instagram</h3>
                        </div>
                        <ul class="d-flex">
                            <li><a href=""><img src="../assets/images/instragram/1.jpg" alt=""/></a></li>
                            <li><a href=""><img src="../assets/images/instragram/2.jpg" alt=""/></a></li>
                            <li><a href=""><img src="../assets/images/instragram/3.jpg" alt=""/></a></li>
                            <li><a href=""><img src="../assets/images/instragram/4.jpg" alt=""/></a></li>
                            <li><a href=""><img src="../assets/images/instragram/5.jpg" alt=""/></a></li>
                            <li><a href=""><img src="../assets/images/instragram/6.jpg" alt=""/></a></li>
                        </ul>
                    </div>
                  
                    {/* <div class="widget search-widget">
                        <form>
                            <div>
                                <input type="text" class="form-control" placeholder="Search Post.."/>
                                <button type="submit"><i class="ti-search"></i></button>
                            </div>
                        </form>
                    </div> */}
                    {/* <div class="widget category-widget">
                        <h3>Categories</h3>
                        <ul>
                            <li><a href="blog.html">Wedding Event <span>5</span></a></li>
                            <li><a href="blog.html">Photography <span>7</span></a></li>
                            <li><a href="blog.html">Album <span>3</span></a></li>
                            <li><a href="blog.html">Wedding Dress<span>6</span></a></li>
                            <li><a href="blog.html">Best Gift <span>2</span></a></li>
                            <li><a href="blog.html">Wedding Tips <span>8</span></a></li>
                        </ul>
                    </div> */}
                    <div class="widget recent-post-widget">
                        <h3>Related Posts</h3>
                        <div class="posts">
                            <div class="post">
                                <div class="img-holder">
                                    <img src="assets/images/recent-posts/img-1.jpg" alt/>
                                </div>
                                <div class="details">
                                    <h4><a href="blog-single.html">Best Wedding Gift You May Like and Prefer</a></h4>
                                    <span class="date">19 Jun 2021 </span>
                                </div>
                            </div>
                            <div class="post">
                                <div class="img-holder">
                                    <img src="assets/images/recent-posts/img-2.jpg" alt/>
                                </div>
                                <div class="details">
                                    <h4><a href="blog-single.html">Best Hair Style Tips You May Follow in your Wedding</a></h4>
                                    <span class="date">22 May 2021 </span>
                                </div>
                            </div>
                            <div class="post">
                                <div class="img-holder">
                                    <img src="assets/images/recent-posts/img-3.jpg" alt/>
                                </div>
                                <div class="details">
                                    <h4><a href="blog-single.html">How To Avoid Massive Weasting Money in Your wedding</a></h4>
                                    <span class="date">12 Apr 2021 </span>
                                </div>
                            </div>
                        </div>
                    </div>
                 {/* <div class="widget about-widget">
                        <div class="img-holder">
                            <img src="assets/images/blog/about-widget.jpg" alt/>
                        </div>
                        <h4>Jenny Watson</h4>
                        <p>Hi! beautiful people. I`m an authtor of this blog. Read our post - stay with us</p>
                        <div class="social">
                            <ul class="clearfix">
                                <li><a href="#"><i class="ti-facebook"></i></a></li>
                                <li><a href="#"><i class="ti-twitter-alt"></i></a></li>
                                <li><a href="#"><i class="ti-linkedin"></i></a></li>
                                <li><a href="#"><i class="ti-pinterest"></i></a></li>
                            </ul>
                        </div>
                        <div class="aw-shape">
                            <img src="assets/images/blog/ab.png" alt=""/>
                        </div>
                    </div> */}
              
                </div>
            </div>
        </div>
    </div>
     {/* <!-- end container --> */}
</section>



  )
}

export default Share
