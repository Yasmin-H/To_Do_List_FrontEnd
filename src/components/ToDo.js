import { useState } from "react";

const ToDo = ({toDo, onEdit, deleteList, updateCompleted}) => {

    const [isCompleted , setIsCompleted] = useState(toDo.isCompleted);

     const changeCompleteStatus = () => {
        setIsCompleted(!isCompleted)
        updateCompleted(isCompleted, toDo.id)
    }
 
    return ( 
        <>
        <h2>{toDo.listName}</h2>
        <button onClick={() => onEdit()}>Edit</button>
        <button onClick={() => deleteList(toDo.id)}>Delete</button>

        <input type="checkbox" name="completed" onChange={changeCompleteStatus} checked={isCompleted} />
        <label for="completed">Completed</label>
        </>
     );
}
 
export default ToDo;

 