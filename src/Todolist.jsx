

import Todo from "./Todo";
function Todolist({todos,onDelete,onToggle}){

    return(
        <ul id="list">

            {todos.map(todo=>(
                <Todo key={todo.id} onDelete={onDelete}
                onToggle={onToggle}
                todo={todo}></Todo>
            ))}
        </ul>
    )
}

export default Todolist;