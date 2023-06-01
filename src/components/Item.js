import { useState } from "react";
import "../cssFiles/itemCssFiles/Item.css";

const Item = ({item, deleteItem, selectItemForEditing, updateCompleted}) => {

    const[isCompleted , setIsCompleted] = useState(item.completed);


    const changeCompleteStatus = () => {
        setIsCompleted(!isCompleted)
        updateCompleted(isCompleted, item.id)
    }

    return ( 
        <>
        <div className="Task">
            <h3>{item.taskName}</h3>
            <h3>{item.dueDate}</h3>
            <h3>{item.priority}</h3>
            <div className="item-buttons">
                <button onClick={() => selectItemForEditing(item)}>Edit</button>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
            </div>
        </div>
        
        <div className="checkbox">
            <input  type="checkbox" name="completed"  onChange={changeCompleteStatus} checked={isCompleted} />
            <label for="completed">Completed</label>

        </div>
       
        </>
     );
    
}
 
export default Item;