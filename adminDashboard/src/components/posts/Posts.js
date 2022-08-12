import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";




const Posts = () => {

    let usee = useNavigate();



    const [Persons, setapi] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState(1);
    const [pass, setPass] = useState(1);
    const [picture, setImageUrl] = useState("");

    useEffect(
        () => {
            axios.get(`http://127.0.0.1:8000/api/posts`)
                .then((res) => setapi(res.data))
        }
        , [])


    const getData = () => {
        axios.get(`http://127.0.0.1:8000/api/posts`)
            .then((res) => {
                setapi(res.data);
            })
    }

    const hanldeDelete = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/posts/${id}`)
            .then(() => {
                getData();
            })
    };
    let successAdd = null;





    const handleactive = (id, idstate ) => {
        if (idstate) {
            axios.put(`http://127.0.0.1:8000/api/postsstate/${id}`, {
                rule: 0,

            }).then((res) => {
                getData();
                
            })

        } else {
            axios.put(`http://127.0.0.1:8000/api/postsstate/${id}`, {
                rule: 1,

            }).then((res) => {
                getData();
                
            })
        }

    }

    const addUser = (e,reset) => {
        e.preventDefault();

        axios.post(`http://localhost:8000/api/posts`, {
            post: name,
            rule: email,
            costumer_id :pass



        }).then(() => {
            getData();

            reset();
        });


        let successAdd = `         <div className="alert alert-success" role="alert">
            add user success 
        </div>`
    }


    // const cancelCourse = () => { 
    //     document.getElementById("create-course-form").reset();
    //   }

console.log(Persons)








    return (
        <>



            <div className='container text-black'>
                <div className='row'>
                    <div className='col'></div>
                    <div className='col-11'>

                        {successAdd ? successAdd : ''}

                        {/* <form onSubmit={addUser} id="create-course-form" >
                            <div className="form-group mt-5">
                                <label for="exampleInputEmail1">Post :</label>
                                <textarea type="text" name='name' onChange={e => setName(e.target.value)} defaultValue={name} rows="5" className="form-control" ></textarea>
                            </div>

                            
                            <div className='row'>

                                <div className='col'>
                                    <div class="form-group">
                                        <label for="inputState">State</label>
                                        <select name='book_state' onChange={e => setEmail(e.target.value)} defaultValue={email}
                                            id="inputState" class="form-control">
                                            <option > Choose... </option>

                                            <option value='1'> Active </option>
                                            <option value='0'> Not Active </option>
                                        </select>
                                    </div>
                                </div>

                                <div className='col'>

                                </div>

                            </div>


                            <button type='submit' className="btn btn-primary">Submit</button>
                        </form> */}

                        <hr></hr>
                        <h2 className='mt-3'>Posts :</h2>
                        <table className="table responsive">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th> User </th>
                                    <th> Date</th>
                                    <th> Post</th>
                                    <th> state</th>
                                    <th> Edit / Delete</th>
                                </tr>
                            </thead>
                            <tbody>


                                {Persons.length ? Persons.map((a) =>

                                    <tr>
                                        <td>{a.id}</td>
                                        <td>{a.name}</td>
                                        <td>{a.Date}</td>
                                        <td><textarea className='' value={a.post} rows="5" width='200px' disabled></textarea></td>
                                        <td>{a.rule ? <span className='text-success'>Acive</span> : <span className='text-warning'>not Active</span>}</td>
                                        <td>

                                            {a.rule ?
                                                <button onClick={() => handleactive(a.id, a.rule)} className='btn btn-outline-warning mr-2' >Ignore</button>
                                                : <button onClick={() => handleactive(a.id, a.rule)} className='btn btn-outline-success mr-2' >Accept</button>}

                                            <button onClick={() => hanldeDelete(a.id)} className='btn btn-danger' >Delete</button>
                                            <button onClick={() => hanldeDelete(a.costumer_id)} className='btn btn-outline-danger ml-2' >Block User</button>

                                            {/* {a.rule == 1 && <button onClick={() => usee(`/admin/books/${a.id}`)} className='btn btn-outline-secondary ml-2'>Edit</button>} */}
                                        </td>


                                    </tr>

                                ) : ' Loading... '}


                            </tbody>
                        </table>
                    </div>
                    <div className='col'></div>

                </div>








            </div>

        </>
    );
}

export default Posts;