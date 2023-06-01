import { useState } from "react";
import "../cssFiles/toDoCssFiles/ToDo.css";

const ToDo = ({toDo, onEdit, deleteList, updateCompleted, selectToDo}) => {

    const [isCompleted , setIsCompleted] = useState(toDo.isCompleted);

     const changeCompleteStatus = () => {
        setIsCompleted(!isCompleted);
        updateCompleted(isCompleted, toDo.id);
    }

    const clickEdit = () => {
        selectToDo(toDo);
        onEdit();
    }
 
    return ( 
        <>
        <div class="list">
        <h2>{toDo.listName}</h2>

        <div class="bottom-buttons">
            <button onClick={() => clickEdit()} class="edit-button">Edit</button>
            <button onClick={() => deleteList(toDo.id)} class="delete-button">Delete</button>
            <input type="checkbox" name="completed" onChange={changeCompleteStatus} checked={isCompleted} />
            <label for="completed">Completed</label>
        </div>
        </div>
        </>
     );
}
 
export default ToDo;

 