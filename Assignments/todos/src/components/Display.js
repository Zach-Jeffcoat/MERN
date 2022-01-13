import React, {useState} from 'react';


const Display = (props)=>{

    const [toDoList, setToDoList] = props;


    const handleCompleted =(toDo)=>{
        toDo.marked.markedDelete = !toDo.markedDelete;
        let updateToDos=[...toDoList];
        setToDoList(updateToDos)
    }

    const styled = (markedDelete) => {
        if(markedDelete === true){
            return "completed"
        } else {
            return "incomplete"
        }
    }

    const deleteButton =(DeletingId) =>{
        setToDoList(
            toDoList.filter((toDo, index)=>{
                return toDo.id !== DeletingId;
            })
        )
    }



    return(
        <div>
            {
                toDoList.map((toDo, index)=>(
                    <div className={styled(toDo.markedDelete)} key={index}>
                        <p>{toDo.content}</p>
                        <input type="checkbox" onChange={(e)=>handleCompleted(toDo)}/>
                        <button onClick={(e)=>deleteButton(toDo.id)}>Delete!</button>
                    </div>
                ))
            }  
        </div>





    )
}

export default Display;