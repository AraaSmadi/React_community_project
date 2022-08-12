import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './users.css'
import { useNavigate } from "react-router-dom";
const Users = () => {

    let usee = useNavigate();

    const [Persons, setapi] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [picture, setImageUrl] = useState("");
    const [diplay, setdiplay] = useState('none');
    const fileBrowseHandler = (event) => {
        let value = URL.createObjectURL(event.target.files[0]);
        setImageUrl(value);
    };


    

    useEffect(
        () => {
            axios.get(`http://localhost:8000/api/costumers`)
                .then((res) => setapi(res.data))
        }
        , [])


    const getData = () => {
        axios.get(`http://localhost:8000/api/costumers`)
            .then((res) => {
                setapi(res.data);
            })
    }

    const hanldeDelete = (id) => {
        axios.delete(`http://localhost:8000/api/costumers/${id}`)
            .then(() => {
                getData();
            })
    }


    let successAdd = null

    const addUser = (e) => {
        e.preventDefault();

        axios.post(`http://localhost:8000/api/costumers`, {
            name: name,
            email: email,
            password: pass,


        }).then(() => {
            getData();
            setName('');
            setEmail('');
            setPass('');

        });



       


        console.log(picture)


        let successAdd = `         <div className="alert alert-success" role="alert">
        add user success 
    </div>`
    }


    const changedis=()=>{
        if(diplay == 'none'){
            setdiplay('block')

        }else{
            setdiplay('none')
        }
    }

    return (
        <>
            <div className='container text-black'>
                <div className='row'>
                    <div className='col'></div>
                    <div className='col-11'>
                    <button className='btn btn-primary' onClick={changedis}> Add User</button>
                        {successAdd ? successAdd : ''}

                        <form onSubmit={addUser} style={{display:diplay}}>
                            <div className="form-group mt-5"   >
                                <label for="exampleInputEmail1">Name</label>
                                <input type="text" name='name' onChange={e => setName(e.target.value)} defaultValue={name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" name='email' onChange={e => setEmail(e.target.value)} defaultValue={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" name='password' onChange={e => setPass(e.target.value)} defaultValue={pass} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Photo</label>
                                <input type="file" name='picture' className="form-control"  onChange={fileBrowseHandler} id="exampleInputPassword1" placeholder="" />
                            </div>

                            <button type='submit' className="btn btn-primary">Submit</button>
                        </form>

<hr></hr>
                        <h2 className='mt-3'>Users :</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th> Name</th>
                                    <th> Email</th>
                                    <th> Edit / Delete</th>
                                </tr>
                            </thead>
                            <tbody>


                                {Persons.length ? Persons.map((a) =>

                                    <tr>
                                        <td>{a.id}</td>
                                        <td>{a.name}</td>
                                        <td>{a.email}</td>

                                        <td>
                                            <button onClick={() => hanldeDelete(a.id)} className='btn btn-danger' >Delete</button>
                                            <button onClick={() => usee(`/admin/users/${a.id}`)} className='btn btn-outline-secondary ml-2'>Edit</button>
                                        </td>


                                    </tr>

                                ) : ' no data '}


                            </tbody>
                        </table>
                    </div>
                    <div className='col'></div>

                </div>








            </div>
        </>
    );
}

export default Users;