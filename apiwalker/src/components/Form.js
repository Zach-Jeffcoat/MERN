import React, {useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router'



const Form = (props)=>{

    const [type, setType] = useState("people");
    const [id, setId] = useState(0);
    const [error, setError] = useState(false);

    const submitHandler=(e)=>{
        e.preventDefault();

        axios.get(`https://swapi.dev/api/${type}/${id}`)
            .then((res=>{
                console.log(res);
                console.log(res.data);
                
                navigate(`/display/${type}/${id}`);
                setType("people");
                setId(0);
            })
            .catch((err)=>{
                console.log(err)

        })
    ,


    return(
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="type"> Search for:</</label>
                <select value={type} name="type" onChange={(e)=>setType(e.target.value)}>
                    <option value="people">People</option>
                    <option value="planet">Planets</option>
                    <option value="films">Films</option>
                    <option value="species">Species</option>
                    <option value="starships">Starships<</option>
                </select>

                <label htmlFor="id">ID:</label>
                <input value={id} onChange={(e)=>setId(e.target.value)} type="number" />

                <input type="submit" value="submit" />
            </form>
        </div>
    )
)