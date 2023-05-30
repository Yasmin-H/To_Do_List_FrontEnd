import { useState } from "react";

const Item = ({item, deleteItem, selectItemForEditing,updateCompleted}) => {

    const changeCompleteStatus = () => {
        updateCompleted(item.id)
    }

    return ( 
        <>
        <h3>{item.taskName}</h3>
        <h3>{item.dueDate}</h3>
        <h3>{item.priority}</h3>
        <button onClick={() => selectItemForEditing(item)}>Edit</button>
        <button onClick={() => deleteItem(item.id)}>Delete</button>
        <div>
            <input  type="checkbox" id="completed" name="completed"  onChange={changeCompleteStatus}  />
            <label for="completed">Completed</label>

        </div>
       
        <hr/>
        </>
     );
    
}
 
export default Item;