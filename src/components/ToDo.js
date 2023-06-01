import { useState } from "react";

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
        <h2>{toDo.listName}</h2>
        <button onClick={() => clickEdit()}>Edit</button>
        <button onClick={() => deleteList(toDo.id)}>Delete</button>

        <input type="checkbox" name="completed" onChange={changeCompleteStatus} checked={isCompleted} />
        <label for="completed">Completed</label>
        </>
     );
}
 
export default ToDo;

 