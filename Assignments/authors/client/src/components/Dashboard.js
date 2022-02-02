import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';


const AllAuthors = (props) =>{


    const [AuthorList, setAuthorList] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/pirates")
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setAuthorList(res.data);
            })
            .catch((err)=>{
                console.log(err)
            })
    } , [])

    const deleteAuthor = (idFromBelow)=>{
        axios.delete(`http://localhost:8000/api/Authors/${idFromBelow}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setAuthorList(AuthorList.filter((Author, index)=>Author._id !== idFromBelow))
            })
            .catch((err)=>console.log(err))

        //react we must handle the front end

    }


    return(
        <div style={{textAlign:"center"}}>
            <header>
                <h1 style={{fontSize:"50px", borderBottom:"5px double lightgray", marginLeft:"450px", marginRight:"450px"}}>Authormon</h1>
                <Link to={"/new"}>Add a New Author</Link>

            </header>

            {
                AuthorList.map((Author, index)=>(
                    <div key={index}>
                        <table>
                            <th>
                                <h3>Name</h3>
                                <h3>Actions</h3>
                            </th>
                            <tr>
                                <p>{Author.name}</p>
                                <div>
                                    <button onClick={()=>navigate("/Author/edit/:id")}>Edit</button>
                                    <button onClick={()=> deleteAuthor(Author._id)}>Delete</button>
                                </div>
                            </tr>
                        </table>
                    </div>
                ))
            }
        </div>
    )}

export default AllAuthors;