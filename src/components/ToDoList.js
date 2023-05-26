import ToDo from "./ToDo"

const ToDoList = ({toDoLists}) => {

    const toDoListComponents = toDoLists.map((toDo) => {
        return <ToDo key={toDo.id} toDo={toDo}/>
    })
    return ( 
        <>
        {toDoListComponents}
        </>
     );
}
 
export default ToDoList;