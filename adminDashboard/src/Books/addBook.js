import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";




const addBook = () => {

    return (
        <><h1>anudsicasdicbadivjvqeave</h1>
            {/* <div className="container">
                <div className="col"></div>
                <div className="col-11">
                    <form onSubmit={addUser}>


                        <div className='row mt-5'>

                            <div className='col'>
                                <div class="form-group">
                                    <label for="inputState">Costumer</label>
                                    <select name='book_state' onChange={e => setCostumer(e.target.value)} defaultValue={costumer_ids}
                                        id="inputState" class="form-control">
                                        <option selected>Choose...</option>
                                        {Persons.map(a => <option value={a.id}> {a.name} </option>)}

                                    </select>
                                </div>
                            </div>

                            <div className='col'>
                                <div class="form-group">
                                    <label for="inputState">Service</label>
                                    <select name='book_state' onChange={e => setService(e.target.value)} defaultValue={service_ids}
                                        id="inputState" class="form-control">
                                        <option selected>Choose...</option>
                                        {services.map(a => <option value={a.id}> {a.title} </option>)}

                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="form-group ">
                            <label for="exampleInputEmail1">costumer Phone</label>
                            <input type="text" name='phone' onChange={e => setPhone(e.target.value)} defaultValue={phones}
                                className="form-control" />
                        </div>
                        <div className="form-group ">
                            <label for="exampleInputEmail1">time</label>
                            <input type="time" name='hour' onChange={e => setAddress(e.target.value)} defaultValue={hours}
                                className="form-control" />
                        </div>
                        <div className="form-group ">
                            <label for="exampleInputEmail1">Email</label>
                            <input type="email" name='email' onChange={e => setEmail(e.target.value)} defaultValue={emails}
                                className="form-control" />
                        </div>


                        <div className='row'>

                            <div className='col'>

                                <div className="form-group">
                                    <label for="exampleInputEmail1">Date</label>
                                    <input type="date" name='date' onChange={e => setDate(e.target.value)} defaultValue={dates}
                                        className="form-control" placeholder="" />
                                </div>
                            </div>

                            <div className='col'>

                                <div class="form-group">
                                    <label for="inputState">State</label>
                                    <select name='book_state' onChange={e => setState(e.target.value)} defaultValue={book_states}
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
                <div className="col"></div>
            </div> */}

        </>
    );
}

export default addBook;