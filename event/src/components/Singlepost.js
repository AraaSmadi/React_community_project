import React, { useState, useEffect } from 'react';
import '../Posts.css';
import axios from "axios";
import { useParams } from 'react-router';

function Singlepost() {

    const { id } = useParams();

const [posts, setPosts] = useState([]);
//  const [user_id, setuser_id] = useState({});
//  const [post_id, setpost_id] = useState({});
//  const [likes, setlike] = useState(0);
//  setpost_id(id);
//  setuser_id(1);
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/post/${id}`)
            .then((response) => response.json())
            .then(data => {
                setPosts(data);
                console.log(data);
            });
   
           
    }, []);

    // //like
    // const [likeactive, setlikeactive] = useState(false);
  

    // const like = () => {
        
    //     if (likeactive) {
    //         setlikeactive(false);
    //         setlike(likes - 1);
    //     }
    //     else {
    //         setlikeactive(true);
    //         setlike(likes + 1);
    //     }
    //     axios.put(`https://62c47caf7d83a75e39fb0ca3.mockapi.io/likes/${post_id}`, {
    //         likes
    //     })
    // }

    // //like

   
    return (
        <>

            <section class="wpo-blog-single-section section-padding">
                <div class="container">
              

                    <h3 class="comments-title">Posts</h3>
                           
                        <div className="author-box">
                            <div className="author-avatar">
                                <a href="#" target="_blank"><img src="assets/images/blog-details/author.jpg" alt /></a>
                            </div>
                            <div className="author-content">
                                {/* <a href="#" className="author-name">Author: Jenny Watson</a> */}
                                <div class="comments-meta">
                                    <h4>Robert Sonny <span class="comments-date">{posts.Date}</span></h4>
                                </div>
                                <p>{posts.post}</p>
                                <div className="socials">
                                    <ul className="social-link">
                                    {/* <button type="submit" name='like' className={[likeactive ? 'active-like' : null, 'button'].join(' ')} onClick={like} style={{ border: "none" }} ><i class='far fa-heart'></i> {likes} Likes</button> */}
                                        <button type="submit" name='like' style={{ border: "none" }} ><i class="fa fa-comment-o" >  Comments </i></button>
                                    </ul>
                                    <div class="comments-area">
                                        <div class="comments-section">
                                            <h3 class="comments-title">Comments</h3>
                                            <ol class="comments">
                                                <li class="comment even thread-even depth-1" id="comment-1">
                                                    <div id="div-comment-1">
                                                        <div class="comment-theme">
                                                            <div class="comment-image"><img src="assets/images/blog-details/comments-author/img-1.jpg" alt /></div>
                                                        </div>
                                                        <div class="comment-main-area">
                                                            <div class="comment-wrapper">
                                                                <div class="comments-meta">
                                                                    <h4>Robert Sonny <span class="comments-date">says Jul 21, 2021 at 10:00am</span></h4>
                                                                </div>
                                                                <div class="comment-area">
                                                                    <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system</p>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ol>

                                        </div>
                                    </div>

                                    <br /> <br />
                                    <input type="text" style={{ width: "500px", borderRadius: "20px" }}></input>
                                    <button type="submit" >Comments</button>
                                </div>
                            </div>

                        </div>


                </div>





            </section >
        </>


    );
}
export default Singlepost;