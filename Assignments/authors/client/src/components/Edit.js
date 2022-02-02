import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';


const EditAuthor = (props)=>{

    const {id} = props;

    const [name, setName] = useState("")
    const [errors, setError] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/Authors/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setName(res.data.name);
            })
            .catch((err)=>{
                console.log(err);
            
            });
    }, [id])

const editHandler = (e)=>{
    e.preventDefault();
    axios.put(`http://localhost:8000/api/Authors/${id}`,
    //request body
    {
        name
    })
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            navigate("/");
        })
        .catch((err)=>{
            console.log(err);
            console.log("err.response:", err.response);
            console.log("err.response.data:", err.response.data);
            console.log("err.response.data.errors:", err.response.data.errors);
            setError(err.response.data.errors)

        })
}


    return(
        <div>
            <header style={{borderBottom:"5px double lightgray", padding:"10px", margin:"10px"}}>
                <h1 style={{fontSize:"50px", marginLeft:"450px", marginRight:"450px"}}>Edit a Author!</h1>
                <Link to={"/"}>Return Home</Link>
            </header>
            
            <form onSubmit={editHandler}>
                <div>
                    <label>Name</label>
                    <input value={name} onChange={(e)=>setName(e.target.value)} type="text" />
                    {
                        errors.name?
                        <span>{errors.name.message}</span>
                        :null
                    }
                </div>
                <button>Edit Author</button>
            </form>
        </div>
    )
}


export default EditAuthor;