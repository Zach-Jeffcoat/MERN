import React, {useState} from 'react';


const Form = (props)=>{

    const {toDoList, setToDoList} = props;
    const [task, setTask] = useState("");

    const submitHandler = (e) =>{
        e.preventDefault();
        setToDoList([...toDoList, {
            content: task,
            markedDelete: false,
            id: Math.floor(Math.random() * 1000000)
    }])
    setTask("");


    return(
        <div>
            <form onSubmit={ submitHandler }>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)}/>
            <button>Submit!</button>
            </form>
        </div>





    )
};
}
export default Form;
