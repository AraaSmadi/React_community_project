import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const UpdateCategoriese = () => {

    let { id } = useParams();
    let usee = useNavigate();
    const [singleData, setsingleData] = useState([]);

    useEffect(
        () => {
            axios.get(`http://127.0.0.1:8000/api/categories/${id}`)
                .then((res) => setsingleData(res.data))
        }
        ,
        []);

    const [name, setName] = useState(singleData.name);

    useEffect(() => {
        setName(singleData.name)

    }, [singleData] );


    const updateUser = (e) => {
        e.preventDefault();

        axios.put(`http://127.0.0.1:8000/api/categories/${id}`, {
            name: name,
        })
        // history.replace('/profile')
        usee('/admin/categoriese')
    }
// console.log(name)
    
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
                        <button type='submit' className="btn btn-primary">Edit</button>
                   
                    </form>

                </div>

                <div className='col'></div>
            </div>

        </>
    );
}

export default UpdateCategoriese;