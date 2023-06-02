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

    const showItems = toDo.items.map((item) => {
        return <li>{item.taskName}</li>
    })
 
    return ( 
        <>
        <div className="list">
            <h2>{toDo.listName}</h2>
                <ul>
                    {showItems}
                </ul>

            <div class="bottom-buttons">
                <button onClick={() => clickEdit()} class="edit-button">Edit</button>
                <button onClick={() => deleteList(toDo.id)} class="delete-button">Delete</button>
                <div>
                    <input type="checkbox" name="completed" onChange={changeCompleteStatus} checked={isCompleted} />
                    <label for="completed">Completed</label>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default ToDo;

 