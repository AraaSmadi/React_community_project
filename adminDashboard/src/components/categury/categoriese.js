import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Categoriese = () => {
    let usee = useNavigate();

    const [diplay, setdiplay] = useState('none');
    const [Persons, setapi] = useState([]);
    const [name, setName] = useState('');

    useEffect(
        () => {
            axios.get(`http://127.0.0.1:8000/api/categories`)
                .then((res) => setapi(res.data))
        }
        , [])



    const getData = () => {
        axios.get(`http://127.0.0.1:8000/api/categories`)
            .then((res) => {
                setapi(res.data);
            })
    }


    const hanldeDelete = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/categories/${id}`)
            .then(() => {
                getData();
            })
    }


    const changedis=()=>{
        if(diplay == 'none'){
            setdiplay('block')

        }else{
            setdiplay('none')
        }
    }
    let successAdd = null

    const addUser = (e) => {
        e.preventDefault();

        axios.post(`http://127.0.0.1:8000/api/categories`, {

            name: name

        }).then(() => {
            getData();
        })
            .catch(error => {
                console.log(error)
            });

            getData();

        let successAdd = `         <div className="alert alert-success" role="alert">
                add user success 
            </div>`
    }

    console.log(name)
    return (
        <>

            <div className='container text-black'>
                <div className='row'>
                    <div className='col'></div>
                    <div className='col-11'>

                    <button className='btn btn-primary' onClick={changedis}> Add categury</button>
                        <div>{successAdd ? successAdd : ''}</div>

                        <form onSubmit={addUser}  style={{display:diplay}}>
                            <div className="form-group mt-5">
                                <label for="exampleInputEmail1">Title</label>
                                <input type="text" name='name' onChange={e => setName(e.target.value)} defaultValue={name} required
                                    className="form-control" placeholder="" />
                            </div>

                            <button type='submit' className="btn btn-primary">Submit</button>
                        </form>

                        <hr></hr>
                        <h2 className='mt-3'>Categoriese :</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th> title</th>
                                    {/* <th> date</th> */}

                                    <th> Edit / Delete</th>
                                </tr>
                            </thead>
                            <tbody>


                                {Persons.length ? Persons.map((a) =>

                                    <tr>
                                        <td>{a.id}</td>
                                        <td>{a.name}</td>
                                        {/* <td>{a.created_at}</td> */}

                                        <td>
                                            <button onClick={() => hanldeDelete(a.id)} className='btn btn-danger' >Delete</button>
                                            <button onClick={() => usee(`/admin/categoriese/${a.id}`)} className='btn btn-outline-secondary ml-2'>Edit</button>
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

export default Categoriese;