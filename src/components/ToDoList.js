import ToDo from "./ToDo"

const ToDoList = ({toDoLists, onEdit, deleteList}) => {

    const toDoListComponents = toDoLists.map((toDo) => {
        return <ToDo key={toDo.id} toDo={toDo} onEdit={onEdit} deleteList={deleteList}/>
    })
    return ( 
        <>
        {toDoListComponents}
        </>
     );
}
 
export default ToDoList;