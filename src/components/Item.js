const Item = ({item, deleteItem, selectItemForEditing}) => {

    return ( 
        <>
        <h3>{item.taskName}</h3>
        <h3>{item.dueDate}</h3>
        <h3>{item.priority}</h3>
        <button onClick={() => selectItemForEditing(item)}>Edit</button>
        <button onClick={() => deleteItem(item.id)}>Delete</button>
        <hr/>
        </>
     );
    
}
 
export default Item;