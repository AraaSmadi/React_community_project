import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateUser = () => {
    let { id } = useParams();
    let usee = useNavigate();
    const [singleData, setsingleData] = useState([]);
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [pass, setPass] = useState('');

    useEffect(
        () => {
            axios.get(`http://localhost:8000/api/costumers/${id}`)
                .then((res) => setsingleData(res.data))
        }
        , [])


        const [name, setName] = useState(singleData.name);
        const [email, setEmail] = useState(singleData.email);
        const [pass, setPass] = useState(singleData.password);



        useEffect(() => {
            setName(singleData.name)
            setEmail(singleData.email);
            setPass(singleData.password);
        }, [singleData] );



        const updateUser = (e) => {
            e.preventDefault();

            axios.put(`http://localhost:8000/api/costumers/${id}`, {
                name:name ,
                email:email ,
                password:pass
    
            })
            // history.replace('/profile')
            usee('/admin/users')
        }
        console.log(name)

    return ( 
        <>
        <div className='container mt-3'>
            <div className='col'></div>
            <div className='col-10 text-black'>
                <h2>Edit {singleData.name} User</h2>
            <form onSubmit={updateUser}>
                    <div className="form-group mt-5">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" name='name' onChange={e => setName(e.target.value)} defaultValue={name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Jhone" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" name='email' onChange={e => setEmail(e.target.value)} defaultValue={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" name='password' onChange={e => setPass(e.target.value)} defaultValue={pass} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-check">
                        <input type="text" name='photo' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="photo" />


                    </div>
                    <button type='submit' className="btn btn-primary">Edit</button>
                </form>

            </div>
            <div className='col'></div>

        </div>
        
        </>
     );
}
 
export default UpdateUser;