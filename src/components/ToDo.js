const ToDo = ({toDo, onEdit, deleteList}) => {


 
    return ( 
        <>
        <h2>{toDo.listName}</h2>
        <button onClick={() => onEdit()}>Edit</button>
        <button onClick={() => deleteList(toDo.id)}>Delete</button>
        </>
     );
}
 
export default ToDo;

