import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateServices = () => {

    let { id } = useParams();
    let usee = useNavigate();
    const [singleData, setsingleData] = useState([]);

    useEffect(
        () => {
            axios.get(`http://127.0.0.1:8000/api/services/${id}`)
                .then((res) => setsingleData(res.data))
        }
        ,
        []);

    const [name, setName] = useState(singleData.title);
    const [email, setEmail] = useState(singleData.price);
    const [pass, setPass] = useState(singleData.description);


    useEffect(() => {
        setName(singleData.title)
        setEmail(singleData.price);
        setPass(singleData.description);
    }, [singleData]);


    const updateUser = (e) => {
        e.preventDefault();

        axios.put(`http://127.0.0.1:8000/api/services/${id}`, {
            title: name,
            price: email,
            description: pass
        })
        // history.replace('/profile')
        usee('/admin/services')
    }





    return (
        <>

            <div className='container mt-3'>
                <div className='col'></div>
                <div className='col-10 text-black'>
                    <h2>Edit {singleData.name} </h2>
                    <form onSubmit={updateUser}>
                        <div className="form-group mt-5">
                            <label for="exampleInputEmail1">title</label>
                            <input type="text" name='name' onChange={e => setName(e.target.value)} defaultValue={name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Price</label>
                            <input type="text" name='email' onChange={e => setEmail(e.target.value)} defaultValue={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=" " />
                        </div>
                        <div className="form-group">
                            {/* <label for="exampleInputPassword1">Description</label>
                            <input type="text" name='password' onChange={e => setPass(e.target.value)} defaultValue={pass} className="form-control" id="exampleInputPassword1" placeholder="" />
                            <textarea onChange={e => setPass(e.target.value)} defaultValue={pass}></textarea> */}

                            <label for="exampleFormControlTextarea1">Description</label>
                            <textarea class="form-control" onChange={e => setPass(e.target.value)} defaultValue={pass} id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="form-check">
                            <label for="">picture</label>

                            <input type="text" name='photo' className="form-control" />


                        </div>
                        <button type='submit' className="btn btn-primary">Edit</button>
                    </form>

                </div>
                <div className='col'></div>

            </div>

        </>
    );
}

export default UpdateServices;