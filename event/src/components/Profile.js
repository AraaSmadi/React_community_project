import './profile.css';
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

function Profile() {

   const id =sessionStorage.getItem('user_id');
   console.log(id);
    const [users, setUsers] = useState({
        name: '', email: '', phone: '', password: '', picture: ''
    });
    const [selectedFile, setSelectedFile] = useState();

    const [update, setUpdate] = useState(false);
    const { c_id } = useParams();
    console.log(id);

  //retrieve user info
    useEffect(() => {
        const data = async () => {
            const response = await fetch(`http://127.0.0.1:8000/api/profile/${id}`)
            const dbData = await response.json();
            setUsers(dbData);

        }
        data()
    }, [update])

    const [singleData, setsingleData] = useState([]);
    useEffect(
        () => {
            axios.get(`http://127.0.0.1:8000/api/profile/${id}`)
                .then((res) => setsingleData(res.data))
        }
        , [])

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [pass, setPass] = useState('');
    const [picture, setPicture] = useState('');



    useEffect(() => {
        setName(singleData.name)
        setEmail(singleData.email);
        setPass(singleData.password);
        setPhone(singleData.phone);
        setPicture(singleData.picture);

    }, [singleData] );

  //update user info

  const updateHandeler = async (e) => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", pass);

    await fetch(`http://127.0.0.1:8000/api/profile/${id}`, {
      method: "POST",
      body: formData,
    })
    .then((result)=>{
        console.log('complete');
    })
    .catch((err)=>{
        console.log(err);
      
    });
  };
console.log(selectedFile,name,email,pass ,picture)









    // const updateHandeler = (e) => {
    //     e.preventDefault();
    //     axios.put(`http://127.0.0.1:8000/api/profile/${id}`, users)
    //         .then((res) => setUsers(res.data))
    //         .then(() => setUpdate(!update))
    //     console.log(users)
    //     if (!update) {
    //         window.alert('Your profile has been updated successfuly')

    //     }
    // }







    //post history
    const [post, setPost] = useState([]);

    useEffect(() => {
        const fetching = async () => {
            const api = await fetch(`http://127.0.0.1:8000/api/userposts/${id}`);
            const dataa = await api.json();
            setPost(dataa);
            console.log(dataa);
        }
        fetching();
    }, [id])

    return (


        <div class="container" style={{ marginTop: '120px' }}>
            <div class="profile-wrapper">
                <div class="profile-section-user">
                    {/* <div class="profile-cover-img"><img src="https://bootdey.com/img/Content/flores-amarillas-wallpaper.jpeg" alt=""/></div> */}


                    {/* <hr class="m-0"/> */}
                    <div class="hidden-sm-down">
                        {/* <hr class="m-0"/> */}
                        <div class="profile-info-contact p-4">
                            {/* <h6 class="mb-3">User Information</h6> */}
                            <form onSubmit={updateHandeler}>
                                <div class="profile-info-brief p-3">{ picture ? (<img class="img-fluid user-profile-avatar" src={`http://127.0.0.1:8000/${picture}`} alt="" />)
                                                                             : (< img class="img-fluid user-profile-avatar" src="https://images.assetsdelivery.com/compings_v2/tuktukdesign/tuktukdesign1606/tuktukdesign160600119.jpg" alt="" />)}
                                    <div class="text-center">
                                    <input type="file" name='picture' onChange={(e) => setSelectedFile(e.target.files[0])} />
                                        <hr class="m-2"/>
                                    </div>
                                </div>
                              
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <td><strong>Name:</strong></td>
                                            <td>
                                                <input type="text" className="form-control" name='name' onChange={e => setName(e.target.value)} defaultValue={name} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><strong>Email:</strong></td>
                                            <td>
                                                {/* <p class="text-muted mb-0">rathemes@gmail.com</p> */}
                                                <input type="text" className="form-control" name='email' onChange={e => setEmail(e.target.value)} defaultValue={email} />
                                            </td>
                                        </tr>
                                      
                                      {/*  <tr>
                                            <td><strong>Password:</strong></td>
                                            <td>
                                                 <p class="text-muted mb-0">Rathemes</p> 
                                                <input type="password" className="form-control" name='password' placeholder='' onChange={e => setPass(e.target.value)} defaultValue={pass} />
                                            </td>
                                        </tr>*/}
                                        <button className="btn btn-primary" type='submit' style={{ backgroundColor: '#86a0b6', marginTop: '10px' }} >Update</button>

                                    </tbody>
                                </table>
                            </form>
                        </div>

                        <hr class="m-0" />


                        <hr class="m-0" />
                    </div>

                </div>

                <div class="profile-section-main">

                    <ul class="nav nav-tabs profile-tabs" role="tablist">
                        <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#profile-overview" role="tab">Your Posts</a></li>
                    </ul>

                    <div class="tab-content profile-tabs-content"  >

                        <div class="tab-pane active" id="profile-overview" role="tabpanel" >

                            {post.length > 0 && post.map(c => (

                                <div class="stream-posts">

                                    <div class="stream-post" >

                                        {/* <div class="sp-author" >
                                            <a href="#" class="sp-author-avatar"><img src={c.picture} alt="" /></a>
                                            <h6 class="sp-author-name" ><a href="#">{c.name}</a></h6></div> */}
                                        <div class="sp-content" style={{marginLeft:'20px'}} >
                                            <div class="sp-info"></div>
                                            <h6>{c.Date}</h6>
                                            <p class="sp-paragraph mb-0">{c.post}</p>
                                        </div>
                                        <h2></h2>


                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </div>
        </div>



    )
}

export default Profile; 