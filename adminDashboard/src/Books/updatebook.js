import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';



const UpdateBook = () => {
    let { id } = useParams();
    let usee = useNavigate();
    const [singleData, setsingleData] = useState([]);

    useEffect(
        () => {
            axios.get(`http://localhost:8000/api/books/${id}`)
                .then((res) => setsingleData(res.data))
        }
        , [])

    const [Persons, setapi] = useState([]);
    const [books, setapibooks] = useState([]);
    const [services, setapiservices] = useState([]);
    useEffect(
        () => {
            axios.get(`http://127.0.0.1:8000/api/services`)
                .then((res) => setapiservices(res.data))
        }
        , []);
// console.log(singleData)

        useEffect(
            () => {
                axios.get(`http://localhost:8000/api/costumers`)
                    .then((res) => setapi(res.data))
            }
            , []);

            const [date, setdate] = useState('');
            const [phone, setphone] = useState('');
            const [hour, setaddress] = useState('');
            const [email, setemail] = useState('');
            const [book_state, setstate] = useState('');
            const [service_id, setservice] = useState('');
            const [costumer_id, setcostumer] = useState('');

            useEffect(() => {
                setdate(singleData.date)
                setphone(singleData.phone);
                setaddress(singleData.hour);
                setemail(singleData.email);

                setstate(singleData.book_state);
                setservice(singleData.service_id);
                setcostumer(singleData.costumer_id);
            }, [singleData] );


    const updateUser = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/books/${id}`, {
            date: date,
            phone: phone,
            hour: hour,
            email: email,
            book_state: book_state,
            service_id: service_id,
            costumer_id: costumer_id
        })
        // history.replace('/profile')
        usee('/admin/books')
    }
    return (
        <>
            <div className='container text-black'>
                <div className='row'>
                    <div className='col'></div>
                    <div className='col-11'>

                        <form onSubmit={updateUser}>


                            <div className='row mt-5'>

                                <div className='col'>
                                    <div class="form-group">
                                        <label for="inputState">Costumer</label>
                                        <select name='book_state' onChange={e => setcostumer(e.target.value)} defaultValue={costumer_id}
                                            id="inputState" class="form-control">
                                             <option selected value={costumer_id}>costumer_id</option>
                                            {Persons.map(a => <option value={a.id}> {a.name} </option>)}

                                        </select>
                                    </div>


                                </div>

                                <div className='col'>

                                    <div class="form-group">
                                        <label for="inputState">Service</label>
                                        <select name='book_state' onChange={e => setservice(e.target.value)} defaultValue={service_id}
                                            id="inputState" class="form-control">
                                            <option selected value={service_id}>service_id</option>
                                            {services.map(a => <option value={a.id}> {a.title} </option>)}

                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group ">
                                <label for="exampleInputEmail1">costumer Phone</label>
                                <input type="text" name='user_phone' onChange={e => setphone(e.target.value)} defaultValue={phone}
                                    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                            </div>
                            <div className="form-group ">
                                <label for="exampleInputEmail1">time</label>
                                <input type="time" name='hour' onChange={e => setaddress(e.target.value)} defaultValue={hour}
                                    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                            </div>
                            <div className="form-group ">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="email" name='sub_email' onChange={e => setemail(e.target.value)} defaultValue={email}
                                    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                            </div>


                            <div className='row'>

                                <div className='col'>

                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Date</label>
                                        <input type="date" name='date' onChange={e => setdate(e.target.value)} defaultValue={date}
                                            className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
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
                    </div>
                    <div className='col'></div>
                </div>
            </div>
        </>
    );
}

export default UpdateBook;