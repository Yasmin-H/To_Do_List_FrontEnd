const ToDo = ({toDo, onEdit}) => {


 
    return ( 
        <>
        <h2>{toDo.listName}</h2>
        <button onClick={() => onEdit()}>Edit</button>
        <button>Delete</button>
        </>
     );
}
 
export default ToDo;

