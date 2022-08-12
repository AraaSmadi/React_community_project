import React, { useEffect, useState,useFetch } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert';
import '../Posts.css';

function Blog() {
 

    const { id } = useParams();
    //insert comments
    const [comment, setComment] = useState("");
    const [costumer_id, setCostumer_id] = useState({});
    const [post_id, setPost_id] = useState({});
    const user_id =sessionStorage.getItem('user_id');
    console.log(id);
  
    const handleClick = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://127.0.0.1:8000/api/comments_post`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ comment: comment, costumer_id:user_id, post_id:id }),

        })
        
        ;
        if (response.ok) {
            // window.alert("comment added successfully")
            swal({
                title: "Good job!",
                text: " comment added successfully!",
                icon: "success",
                button: "ok!",
              })
              .then(()=> {
                fetchComments();
            });
        }
    };
    const fetchComments = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/comments/${id}`)
        const res = await response.json()
        setAll(res)
    }

    console.log(comment)

    const [selectedPost, setSelectedPost] = useState([]);
    const [currentPost, setCurrentPost] = useState(post_id);


    //fetch all comments
    const [all, setAll] = useState([])
    useEffect(() => {
        const fetchComments = async () => {
            const response = await fetch(`http://127.0.0.1:8000/api/comments/${id}`)
            const res = await response.json()
            setAll(res)
        }

        fetchComments()
    }, [])
    console.log('araa',all)

    const fetchComment = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/comments/${id}`)
        const res = await response.json()
        setAll(res)
    }


 

    // update comments
    const [update, setUpdate] = useState(false)
    const [editComment, setEditComment] = useState({
        comment:'',costumer_id:user_id,post_id:id
    })
    const updateHandler = (e) => {
        e.preventDefault();

        setUpdate(true);

    }
console.log('p',editComment.comment)

// const editHandeler=()=>{}
    //  useEffect((id)=>{
    //     const getComment=async()=>{
    //         const response= await fetch (`http://127.0.0.1:8000/api/comments_post/${id}`)
    //         const dbData=await response.json();
    //         setEditComment(dbData);
    // console.log('tt',dbData);
           
            
    //     }
    //     getComment();
    // },[update])

    // const getComment=()=>async()=>{
    //     const response= await fetch (`http://127.0.0.1:8000/api/comments_post/${id}`)
    //     const dbData=await response.json();
    //     setEditComment(dbData);
    // }
    const editHandeler =(id)=>{
       
        // e.preventDefault();
      
        axios.post(`http://127.0.0.1:8000/api/comment/${id}`, {
            comment:editComment.comment
        })
          
            .then((res) =>fetchComment(),setUpdate(false)
            
            )
      


    }

    // console.log('uu',editComment)
   

    const deleteHandeler = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/comment/${id}`)     
     
          .then(()=> {
            fetchComment();
        });
        
   


     }
          // fetch posts
          const [posts, setPosts] = useState([]);

          useEffect(() => {
            const fetchPosts=async()=>{
                const response=await fetch(`http://127.0.0.1:8000/api/fetch/${id}`)
                const data=await response.json()
        
                  .then(data => {
                      setPosts(data);
                      console.log(data);
                  });
            }
          
            fetchPosts()     
          }, []);
          console.log('ff',posts);
  return (
    
<section class="wpo-blog-single-section wpo-blog-single-left-sidebar-section section-padding">
            <div class="container">
                <div class="row">
                    <div class="col col-lg-8 col-12 order-lg-2">
                        <div class="wpo-blog-content">
                            <div class="post format-standard-image">
                                <div class="entry-media">
                                    {/* <blockquote>
                                    Combined with a handful of model sentence structures, generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                                </blockquote><img src="assets/images/blog/img-4.jpg" alt/> */}
                                </div>
                                {posts.map((post)=>{
                                    return(
                                        <div>
                                <div class="entry-meta">
                                    
                                    <ul>
                                        <li><i class="fi flaticon-user"></i> By <a href="#">  {post.name}</a> </li>
                                        <li><i class="fi flaticon-comment-white-oval-bubble"></i> discussion</li>
                                        <li><i class="fi flaticon-calendar"></i> {post.Date}</li>
                                    </ul>
                                </div>
                                <h5></h5>
                                <h4>{post.post}</h4>
                                </div>
                                ) })}
                                {/* <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself,</p> */}

                                {/* <div class="gallery">
                                    <div>
                                        <img src="../assets/images/blog-details/1.jpeg" alt=""/>
                                    </div>
                                    <div>
                                        <img src="../assets/images/blog-details/2.jpg" alt=""/>
                                    </div>
                                </div> */}
                            </div>

                         
                             {/* <!-- end tag-share --> */}
                          
                             {/* <!-- end tag-share --> */}

                            {/* <div class="author-box">
                                <div class="author-avatar">
                                    <a href="#" target="_blank"><img src="assets/images/blog-details/author.jpg" alt/></a>
                                </div>
                                <div class="author-content">
                                    <a href="#" class="author-name">Author: Jenny Watson</a>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                                    <div class="socials">
                                        <ul class="social-link">
                                            <li><a href="#"><i class="ti-facebook"></i></a></li>
                                            <li><a href="#"><i class="ti-twitter-alt"></i></a></li>
                                            <li><a href="#"><i class="ti-linkedin"></i></a></li>
                                            <li><a href="#"><i class="ti-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div> */}
                             {/* <!-- end author-box --> */}
                             <div class="comments-area">
                                <div class="comments-section">
                                    <h3 class="comments-title"> Comments</h3>
                                    <ol class="comments">
                                        <li class="comment even thread-even depth-1" id="comment-1">
                                        {all.length > 0 && all.map((user) => {
                                                    // if (user.post_id !== currentPost) return;
                                                    return (
                                            <div id="div-comment-1">
                                           
                                                <div class="comment-theme">
                                                    <div class="comment-image"><img src={`http://127.0.0.1:8000/${user.picture}`} alt height="70px" width="70px" /></div>
                                                </div>
                                                <div class="comment-main-area">
                                                    <div class="comment-wrapper">
                                                        <div class="comments-meta">
                                                            <h4>{user.name}  <span class="comments-date">says {user.Date}</span></h4>
                                                        </div>
                                                        <div class="comment-area">
                                                          
                                                        {!update ?
                                                                            <p>{user.comment}</p>

                                                                            : null}
                                                                        {update ?

                                                                            <input name='comment' style={{  background: "none" }} onChange={(e)=>setEditComment({...editComment,comment:e.target.value})}  defaultValue={user.comment}/>

                                                                            : null}
                                                                        
                                                
                                                                        <div className="comments-reply">
                                                                          
                                                                            {user_id == user.id &&
                                                                            <>
                                                                            {!update ?
                                                                                <button onClick={updateHandler} style={{ border: "none", background: "none" }}><a className="comment-reply-link" ><span>edit</span></a></button>

                                                                                : null}
                                                                            {update ?
                                                                                <button onClick={()=>editHandeler(user.com)} style={{ border: "none", background: "none" }} type='submit'><a className="comment-reply-link" ><span>edit</span></a></button>

                                                                                : null}
                                                                            <button type='submit' onClick={()=>deleteHandeler(user.com)} style={{ border: "none", background: "none" }}><a className="comment-reply-link" ><span>Delete</span></a></button>
                                                                            </>  }

                                                                        
                                                        </div></div>
                                                    </div>
                                                </div>
                                            </div>
                                            )
                                        })}
                                           
                                        </li>

                                     
                                    </ol>
                                </div> 
                                {/* <!-- end comments-section --> */}

                                <div class="comment-respond">
                                    <h3 class="comment-reply-title">Add comment</h3>
                                    <form class="comment-form" onSubmit={handleClick}>
                                     
                                    <div className="form-textarea">
                                                <textarea id="comment" placeholder="Write Your Comments..." name='comment' value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                                            </div>
                                            <div className="form-submit">
                                                <button type="submit" style={{ border: "none", background: "#86a0b6",width:"150px",height:"35px" }}>Post Comment</button>
                                                {/* <button type="submit" style={{border:"none",background:"none"}}><input id="submit" value="Post Comment"/></button> */}
                                            </div>
                                    </form>
                                </div>
                            </div>

                           
     
                             {/* <!-- end comments-area --> */}
                        </div>
                    </div>
                    <div class="col col-lg-4 order-lg-1">
                        <div class="blog-sidebar">
                        {posts.map((post)=>{
                                    return(
                            <div class="widget about-widget">
                                <div class="img-holder">
                                    <img src={`http://127.0.0.1:8000/${post.picture}`} alt/>
                                </div>
                                <h4>{post.name}</h4>
                                <p>Hi! beautiful people. I`m an authtor of this blog. Read our post - stay with us</p>
                                <div class="social">
                                <ul class="clearfix">
                                        <li><a href="https://www.facebook.com/"><i class="ti-facebook"></i></a></li>
                                        <li><a href="https://twitter.com/i/flow/login"><i class="ti-twitter-alt"></i></a></li>
                                        <li><a href="https://www.linkedin.com/feed/"><i class="ti-linkedin"></i></a></li>
                                        <li><a href="https://www.pinterest.com/"><i class="ti-pinterest"></i></a></li>
                                    </ul>
                                </div>
                                <div class="aw-shape">
                                    <img src="../assets/images/blog/ab.png" alt=""/>
                                </div>
                            </div>
                            ) })}
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
                            <div class="widget recent-post-widget">
                                <h3>Related Posts</h3>
                                <div class="posts">
                                    <div class="post">
                                        <div class="img-holder">
                                            <img src="../assets/images/recent-posts/img-1.jpg" alt/>
                                        </div>
                                        <div class="details">
                                            <h4><a href="blog-single.html">Best Wedding Gift You May Like and Prefer</a></h4>
                                            <span class="date">19 Jun 2021 </span>
                                        </div>
                                    </div>
                                    <div class="post">
                                        <div class="img-holder">
                                            <img src="../assets/images/recent-posts/img-2.jpg" alt/>
                                        </div>
                                        <div class="details">
                                            <h4><a href="blog-single.html">Best Hair Style Tips You May Follow in your Wedding</a></h4>
                                            <span class="date">22 May 2021 </span>
                                        </div>
                                    </div>
                                    <div class="post">
                                        <div class="img-holder">
                                            <img src="../assets/images/recent-posts/img-3.jpg" alt/>
                                        </div>
                                        <div class="details">
                                            <h4><a href="blog-single.html">How To Avoid Massive Weasting Money in Your wedding</a></h4>
                                            <span class="date">12 Apr 2021 </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         
                         
                        </div>
                    </div>
                </div>
            </div>
    
      </section>

  )
}

export default Blog
