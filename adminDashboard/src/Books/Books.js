import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";


const Books = () => {

    let usee = useNavigate();
    const [Persons, setapi] = useState([]);
    const [books, setapibooks] = useState([]);
    const [services, setapiservices] = useState([]);
    const [date, setdate] = useState('');
    const [diplay, setdiplay] = useState('none');
    const [phone, setphone] = useState('');
    const [hour, setaddress] = useState('');
    const [email, setemail] = useState('');
    const [book_state, setstate] = useState(0);
    const [service_id, setservice] = useState('');
    const [costumer_id, setcostumer] = useState('');




    useEffect(
        () => {
            axios.get(`http://127.0.0.1:8000/api/books`)
                .then((res) => setapibooks(res.data))
        }
        , []);

    useEffect(
        () => {
            axios.get(`http://127.0.0.1:8000/api/services`)
                .then((res) => setapiservices(res.data))
        }
        , []);


    useEffect(
        () => {
            axios.get(`http://localhost:8000/api/costumers`)
                .then((res) => setapi(res.data))
        }
        , []);


    const getData = () => {
        axios.get(`http://127.0.0.1:8000/api/books`)
            .then((res) => {
                setapibooks(res.data);
            })
    }

    const handleactive = (id, idstate) => {
        if (idstate) {
            axios.put(`http://127.0.0.1:8000/api/booksstate/${id}`, {
                book_state: 0,

            }).then((res) => {
                getData();
            })

        } else {
            axios.put(`http://127.0.0.1:8000/api/booksstate/${id}`, {
                book_state: 1,

            }).then((res) => {
                getData();
            })
        }

    }


    const hanldeDelete = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/books/${id}`)
            .then(() => {
                getData();
            })
    }

    let successAdd = null


    const changedis=()=>{
        if(diplay == 'none'){
            setdiplay('block')

        }else{
            setdiplay('none')
        }
    }


    const addUser = (e) => {
        e.preventDefault();

        axios.post(`http://127.0.0.1:8000/api/booksss`, {
            date: date,
            phone: phone,
            hour: hour,
            email: email,
            book_state: book_state,
            service_id: service_id,
            costumer_id: costumer_id

        }).then(() => {
            getData();
        })

        let successAdd = `         <div className="alert alert-success" role="alert">
                add user success 
            </div>`
    }
    console.log(hour, phone, email)

    return (
        <>

            <div className='container text-black'>
                <div className='row'>
                    <div className='col'></div>
                    <div className='col-11'>
                        {/* <div class="dropdown dropdown-lg dropdown-block">
                            <button class="btn btn-secondary dropdown-toggle btn-lg btn-block" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown button
                            </button>
                            <div class="dropdown-menu w-100 " aria-labelledby="dropdownMenuButton">
                                <form onSubmit={addUser}>




                                    <div className='col'>
                                        <div class="form-group">
                                            <label for="inputState">Costumer</label>
                                            <select name='book_state' onChange={e => setcostumer(e.target.value)} defaultValue={costumer_id}
                                                id="inputState" class="form-control">
                                                <option selected>Choose...</option>
                                                {Persons.map(a => <option value={a.id}> {a.name} </option>)}

                                            </select>
                                        </div>
                                    </div>

                                    <div className='col'>
                                        <div class="form-group">
                                            <label for="inputState">Service</label>
                                            <select name='book_state' onChange={e => setservice(e.target.value)} defaultValue={service_id}
                                                id="inputState" class="form-control">
                                                <option selected>Choose...</option>
                                                {services.map(a => <option value={a.id}> {a.title} </option>)}

                                            </select>
                                        </div>
                                    </div>


                                    <div className="form-group ">
                                        <label for="exampleInputEmail1">costumer Phone</label>
                                        <input type="text" name='phone' onChange={e => setphone(e.target.value)} defaultValue={phone}
                                            className="form-control" />
                                    </div>
                                    <div className="form-group ">
                                        <label for="exampleInputEmail1">time</label>
                                        <input type="time" name='hour' onChange={e => setaddress(e.target.value)} defaultValue={hour}
                                            className="form-control" />
                                    </div>
                                    <div className="form-group ">
                                        <label for="exampleInputEmail1">Email</label>
                                        <input type="email" name='email' onChange={e => setemail(e.target.value)} defaultValue={email}
                                            className="form-control" />
                                    </div>


                                    <div className='row'>

                                        <div className='col'>

                                            <div className="form-group">
                                                <label for="exampleInputEmail1">Date</label>
                                                <input type="date" name='date' onChange={e => setdate(e.target.value)} defaultValue={date}
                                                    className="form-control" placeholder="" />
                                            </div>
                                        </div>

                                        <div className='col'>

                                            <div class="form-group">
                                                <label for="inputState">State</label>
                                                <select name='book_state' onChange={e => setstate(e.target.value)} defaultValue={book_state}
                                                    id="inputState" class="form-control">
                                                    <option selected>Choose...</option>
                                                    <option value='1'> Active </option>
                                                    <option value='0'> Not Active </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>


                                    <button type='submit' className="btn btn-primary">Submit</button>
                                </form>
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div> */}

                        {successAdd ? successAdd : ''}
                        {/* <Link to='add' className='btn btn-primary'> Add Book</Link> */}
                        <button className='btn btn-primary' onClick={changedis}> Add book</button>

                        <form onSubmit={addUser} style={{display:diplay}}>


                            <div className='row mt-5'>

                                <div className='col'>
                                    <div class="form-group">
                                        <label for="inputState">Costumer</label>
                                        <select name='book_state' onChange={e => setcostumer(e.target.value)} defaultValue={costumer_id}
                                            id="inputState" class="form-control">
                                            <option selected>Choose...</option>
                                            {Persons.map(a => <option value={a.id}> {a.name} </option>)}

                                        </select>
                                    </div>
                                </div>

                                <div className='col'>
                                    <div class="form-group">
                                        <label for="inputState">Service</label>
                                        <select name='book_state' onChange={e => setservice(e.target.value)} defaultValue={service_id}
                                            id="inputState" class="form-control">
                                            <option selected>Choose...</option>
                                            {services.map(a => <option value={a.id}> {a.title} </option>)}

                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group ">
                                <label for="exampleInputEmail1">costumer Phone</label>
                                <input type="text" name='phone' onChange={e => setphone(e.target.value)} defaultValue={phone}
                                    className="form-control" />
                            </div>
                            <div className="form-group ">
                                <label for="exampleInputEmail1">time</label>
                                <input type="time" name='hour' onChange={e => setaddress(e.target.value)} defaultValue={hour}
                                    className="form-control" />
                            </div>
                            <div className="form-group ">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="email" name='email' onChange={e => setemail(e.target.value)} defaultValue={email}
                                    className="form-control" />
                            </div>


                            <div className='row'>

                                <div className='col'>

                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Date</label>
                                        <input type="date" name='date' onChange={e => setdate(e.target.value)} defaultValue={date}
                                            className="form-control" placeholder="" />
                                    </div>
                                </div>

                                <div className='col'>

                                    <div class="form-group">
                                        <label for="inputState">State</label>
                                        <select name='book_state' onChange={e => setstate(e.target.value)} defaultValue={book_state}
                                            id="inputState" class="form-control">
                                            <option selected>Choose...</option>
                                            <option value='1'> Active </option>
                                            <option value='0'> Not Active </option>
                                        </select>
                                    </div>
                                </div>
                            </div>


                            <button type='submit' className="btn btn-primary">Submit</button>
                        </form>

                        <hr></hr>
                        <h2 className='mt-3'>Books :</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th> date</th>
                                    <th> time</th>
                                    <th> phone</th>

                                    <th> email</th>
                                    <th> state</th>
                                    <th> service</th>
                                    <th> costumer</th>
                                    <th> Edit / Delete</th>
                                </tr>
                            </thead>
                            <tbody>


                                {books ? books.map((a) =>

                                    <tr>
                                        <td>{a.id}</td>
                                        <td>{a.date}</td>
                                        <td>{a.hour}</td>
                                        <td>{a.phone}</td>

                                        <td>{a.email}</td>
                                        <td>{a.book_state ? <span className='text-success'>Acive</span> : <span className='text-warning'>not Active</span>}</td>
                                        <td>{a.service_id}</td>
                                        <td>{a.costumer_id}</td>

                                        <td>

                                            {a.book_state ?
                                                <button onClick={() => handleactive(a.id, a.book_state)} className='btn btn-outline-warning mr-2' >Ignore</button>
                                                : <button onClick={() => handleactive(a.id, a.book_state)} className='btn btn-outline-success mr-2' >Accept</button>}

                                            <button onClick={() => hanldeDelete(a.id)} className='btn btn-danger' >Delete</button>

                                            <button onClick={() => usee(`/admin/books/${a.id}`)} className='btn btn-outline-secondary ml-2'>Edit</button>
                                        </td>


                                    </tr>

                                ) : 'Loading'}

                            </tbody>
                        </table>
                    </div>
                    <div className='col'></div>
                </div>
            </div>

        </>
    );
}

export default Books;