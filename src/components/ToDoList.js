import ToDo from "./ToDo"

const ToDoList = ({toDoLists}) => {

    const toDoListComponents = toDoLists.map((toDo) => {
        return <ToDo toDo={toDo}/>
    })
    return ( 
        <>
        {/* {toDoListComponents} */}
        </>
     );
}
 
export default ToDoList;