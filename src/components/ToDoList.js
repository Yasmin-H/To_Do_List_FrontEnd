import ToDo from "./ToDo"

const ToDoList = ({toDoLists, onEdit, deleteList, updateCompleted}) => {

    const toDoListComponents = toDoLists.map((toDo) => {
        return <ToDo key={toDo.id} toDo={toDo} onEdit={onEdit} deleteList={deleteList} updateCompleted={updateCompleted}/>
    })
    return ( 
        <>
        {toDoListComponents}
        </>
     );
}
 
export default ToDoList;