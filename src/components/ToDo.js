import { useState } from "react";
import "../cssFiles/toDoCssFiles/ToDoContainer.css";

const ToDo = ({toDo, onEdit, deleteList, updateCompleted}) => {

    const [isCompleted , setIsCompleted] = useState(toDo.isCompleted);

     const changeCompleteStatus = () => {
        setIsCompleted(!isCompleted)
        updateCompleted(isCompleted, toDo.id)
    }
 
    return ( 
        <>
        <div class="list">
        <h2>{toDo.listName}</h2>
        <button onClick={() => onEdit()} class="edit-button">Edit</button>
        <button onClick={() => deleteList(toDo.id)} class="delete-button">Delete</button>

        <input type="checkbox" name="completed" onChange={changeCompleteStatus} checked={isCompleted} />
        <label for="completed">Completed</label>
        </div>
        </>
     );
}
 
export default ToDo;

 