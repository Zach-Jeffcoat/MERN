import React, {useState} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';



const NewAuthor = (props) =>{

    const [name, setName] = useState("")
    const [errors, setError] = useState({})


    const submitHandler = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/Authors",
        //request's body that the back-end is asking for (see our controller)... create(req.body) THIS IS THAT!
        {
            name
        })
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            //if we had to do everything in one view (display/create)
            //it would look something like this:
            // setAuthorList([...AuthorList, res.data])
            //since our NewAuthor component does not share a view/path
                //with the display, we do not have to handle state immediately
            //When we navigate() back to the "AllAuthors" component,
                //it will trigger a total render of the component, triggering AllAuthors' useEffect 
                    //which runs setAuthorList after it's been updated here via our axios.post!
            navigate("/");
        })
        .catch((err)=>{
            console.log(err);
            //If we do not fulfill our validators from the schema, 
            //then we will hit the catch. Follow the flow of data in your console.logs below
            console.log("err.response:", err.response);
            console.log("err.response.data:", err.response.data);
            console.log("err.response.data.errors:", err.response.data.errors);
            setError(err.response.data.errors)
        })

    }

    return(
        <div>
            <header style={{borderBottom:"5px double lightgray", padding:"10px", margin:"10px"}}>
                <h1 style={{fontSize:"50px", marginLeft:"450px", marginRight:"450px"}}>Add a Author!</h1>
                <Link to={"/"}>Return Home</Link>
            </header>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Name</label>
                    <input value={name} onChange={(e)=>setName(e.target.value)} type="text" />
                    {errors.name?
                        <span>{errors.name.message}</span>
                        :null
                    }
                </div>
                <button>Add Author</button>


            </form>
            
        </div>
    )
}

export default NewAuthor;