import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";



const Services = () => {


    let usee = useNavigate();


    const [Persons, setapi] = useState([]);
    const [Cat, setcat] = useState([]);

    const [Catname, setcatname] = useState([]);


    const [diplay, setdiplay] = useState('none');
    const [selectedFile, setSelectedFile] = useState();
    const [selectedFile2, setSelectedFile2] = useState();
    const [selectedFile3, setSelectedFile3] = useState();
    const [selectedFile4, setSelectedFile4] = useState();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [picture, setImageUrl] = useState("");



    // const fileBrowseHandler = (event) => {
    //     let value = URL.createObjectURL(event.target.files[0]);
    //     setImageUrl(value);
    // };


    useEffect(
        () => {
            axios.get(`http://127.0.0.1:8000/api/categories`)
                .then((res) => setcat(res.data))
        }
        , [])



    useEffect(
        () => {
            axios.get(`http://127.0.0.1:8000/api/services`)
                .then((res) => setapi(res.data))
        }
        , [])



    const getData = () => {
        axios.get(`http://127.0.0.1:8000/api/services`)
            .then((res) => {
                setapi(res.data);
            })
    }



    const hanldeDelete = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/services/${id}`)
            .then(() => {
                getData();
            })
    }

    let successAdd = null



    // const addUser = (e) => {
    //     e.preventDefault();

    //     axios.post(`http://127.0.0.1:8000/api/services`, {
    //         title: name,
    //         price: email,
    //         description: pass,
    //         file: selectedFile



    //     }).then(() => {
    //         getData();
    //     })

    //     setName('')
    //     setEmail('')
    //     setPass('')


    //     console.log(selectedFile)


    //     let successAdd = `         <div className="alert alert-success" role="alert">
    //         add user success 
    //     </div>`
    // }



    const addUser = async (e) => {
        const formData = new FormData();
        formData.append("file", selectedFile);
        formData.append("file2", selectedFile2);
        formData.append("file3", selectedFile3);
        formData.append("file4", selectedFile4);
        formData.append("categories_id", Catname);
        formData.append("title", name);
        formData.append("price", email);
        formData.append("description", pass);
        await fetch("http://127.0.0.1:8000/api/services", {
          method: "POST",
          body: formData,
        })
        .then((result)=>{
            getData();
        })
        .catch((err)=>{
            console.log(err);
          
        });
      };
      const changedis=()=>{
        if(diplay == 'none'){
            setdiplay('block')

        }else{
            setdiplay('none')
        }
    }

        // console.log(selectedFile)
        // console.log(selectedFile2)
        // console.log(selectedFile3)


    return (
        <>
            <div className='container text-black'>
                <div className='row'>
                    <div className='col'></div>
                    <div className='col-11'>

                        {successAdd ? successAdd : ''}
                        <button className='btn btn-primary' onClick={changedis}> Add Service</button>
                        <form onSubmit={addUser}   style={{display:diplay}}>
                            <div className="form-group mt-5">
                                <label for="exampleInputEmail1">Title</label>
                                <input type="text" name='name' onChange={e => setName(e.target.value)} defaultValue={name} className="form-control"  placeholder="" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Price</label>
                                <input type="text" name='email' onChange={e => setEmail(e.target.value)} defaultValue={email} className="form-control"  placeholder="" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Description</label>
                                <input type="text" name='password' onChange={e => setPass(e.target.value)} defaultValue={pass} className="form-control"  placeholder="" />
                            </div>

                            
                                    <div class="form-group">
                                        <label for="inputState">Categuriese</label>
                                        <select name='book_state' onChange={e => setcatname(e.target.value)} defaultValue={Catname}
                                            id="inputState" class="form-control">
                                            <option selected>Choose...</option>
                                            {Cat.map(a => <option value={a.id}> {a.name} </option>)}

                                        </select>
                                    </div>


                                
                            
                            <div className='row'>
                            <div class="form-group">
                                <label for="exampleFormControlFile1">Example file input</label>
                                <input type="file"  name='picture' onChange={(e) => setSelectedFile(e.target.files[0])} class="form-control-file"  />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlFile1">Example file input</label>
                                <input type="file"  name='picture_two' onChange={(e) => setSelectedFile2(e.target.files[0])} class="form-control-file"  />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlFile1">Example file input</label>
                                <input type="file"  name='picture_three' onChange={(e) => setSelectedFile3(e.target.files[0])} class="form-control-file"  />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlFile1">Example file input</label>
                                <input type="file"  name='picture_four' onChange={(e) => setSelectedFile4(e.target.files[0])} class="form-control-file"  />
                            </div>
                            </div>

                            <button type='submit' className="btn btn-primary">Submit</button>
                        </form>

                        <hr></hr>
                        <h2 className='mt-3'>Services :</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th> title</th>
                                    <th> price</th>
                                    <th> picture</th>
                                    <th> categury</th>
                                    <th> Edit / Delete</th>
                                </tr>
                            </thead>
                            <tbody>


                                {Persons.length ? Persons.map((a) =>

                                    <tr>
                                        <td>{a.id}</td>
                                        <td>{a.title}</td>
                                        <td>{a.price}</td>
                                        <td><img src= {`http://127.0.0.1:8000/${a.picture}`}  /> </td>

                                        <td>{a.categories_id}</td>

                                        <td>
                                            <button onClick={() => hanldeDelete(a.id)} className='btn btn-danger' >Delete</button>
                                            <button onClick={() => usee(`/admin/services/${a.id}`)} className='btn btn-outline-secondary ml-2'>Edit</button>
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

export default Services;