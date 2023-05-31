import ToDo from "./ToDo"

const ToDoList = ({toDoLists, onEdit}) => {

    const toDoListComponents = toDoLists.map((toDo) => {
        return <ToDo key={toDo.id} toDo={toDo} onEdit={onEdit}/>
    })
    return ( 
        <>
        {toDoListComponents}
        </>
     );
}
 
export default ToDoList;